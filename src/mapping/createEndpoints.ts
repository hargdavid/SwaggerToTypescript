import { capitalizeString } from "../helpers/capitalizeString";
import { convertInputType } from "../helpers/convertInputType";
import { getTypeNameFromRef } from "../helpers/getTypeNameFromRef";
import {
  PathObj,
  MethodObj,
  Parameter,
  ResponseObj,
  ResponseCode,
  MethodType,
} from "../types/apiTypes";
import { DataType } from "../types/types";

export const createEndpoints = (paths: unknown): string => {
  let returnString = "";
  returnString += `import * as types from "../types/types";
import axios from "axios";

const baseUrl = process.env.BACKEND_BASE_URL;

`;

  Object.keys(paths).forEach((path) => {
    const pathObj: PathObj = paths[path];

    if (pathObj.get) {
      returnString += createEndpointFunc(path, pathObj.get, MethodType.GET);
    }
    if (pathObj.post) {
      returnString += createEndpointFunc(path, pathObj.post, MethodType.POST);
    }
    if (pathObj.delete) {
      returnString += createEndpointFunc(
        path,
        pathObj.delete,
        MethodType.DELETE
      );
    }
    if (pathObj.patch) {
      returnString += createEndpointFunc(path, pathObj.patch, MethodType.PATCH);
    }
    if (pathObj.put) {
      //TODO create method for this
    }
  });

  return returnString;
};

const createEndpointFunc = (
  path: string,
  pathObj: MethodObj,
  methodType: MethodType
): string => {
  const functionName = createFunctionName(path, methodType);
  const parameters = createParameters(pathObj.parameters);
  const returnType = getReturnType(pathObj.responses);

  let functionString = `export const ${functionName} = async (${parameters.parameters.map(
    (parameter, index) => {
      let parameterStr = "";
      if (index > 0) {
        parameterStr += ` `;
      }
      parameterStr += `${parameter.name}${parameter.required ? "" : "?"}: ${
        parameter.inputType
      }`;
      return parameterStr;
    }
  )}): Promise<${returnType ? `types.${returnType}` : "unknown"}> => {
`;
  const baseUrl = "${baseUrl}";
  const endpoint = `${baseUrl}${path.replace(/{/g, "${")}`;

  functionString += ` try{
    return await axios.${methodType}(${"`" + endpoint + "`"}${
    parameters.query.length > 0
      ? `
      , { params: {${parameters.query.map(
        (query) => `"${query.name}": ${query.value}`
      )} }}`
      : ""
  }${parameters.body ? ", { body }" : ""});
  }catch(error){
    console.error(error)
  }
`;

  functionString += `};

`;

  return functionString;
};

const createFunctionName = (path: string, method: MethodType): string => {
  return `${method}${path
    .replace(/{/g, "")
    .replace(/}/g, "")
    .replace(/-/g, "/")
    .replace("api", "")
    .split("/")
    .map(capitalizeString)
    .join("")}`;
};

const createParameters = (parameters: Parameter[]) => {
  const returnParameters = {
    parameters: [],
    query: [],
    body: false,
  };

  if (parameters) {
    parameters.map((parameter) => {
      switch (parameter.in) {
        case "body": {
          returnParameters.body = true;

          returnParameters.parameters.push({
            name: structureParamVarName(parameter.name),
            inputType: `types.${getTypeNameFromRef(parameter.schema.$ref)}`,
            required: parameter?.required ?? true,
          });
          break;
        }
        case "query": {
          returnParameters.query.push({
            name: parameter.name,
            value: structureParamVarName(parameter.name),
          });
        }
        default:
          returnParameters.parameters.push({
            name: structureParamVarName(parameter.name),
            inputType: convertInputType(parameter.type),
            required: parameter?.required ?? true,
          });
          break;
      }
    });
  }

  return returnParameters;
};

const structureParamVarName = (name: string) => {
  const capitalizedString = name.split(".").map(capitalizeString).join("");
  return (
    capitalizedString.charAt(0).toLocaleLowerCase() + capitalizedString.slice(1)
  );
};

const getReturnType = (
  response: Map<string, ResponseObj>
): string | undefined => {
  if (response) {
    if (
      response[ResponseCode.Success].schema &&
      response[ResponseCode.Success].schema.$ref
    ) {
      return getTypeNameFromRef(response[ResponseCode.Success].schema.$ref);
    } else if (
      response[ResponseCode.Success].schema &&
      response[ResponseCode.Success].schema.type === DataType.Array &&
      response[ResponseCode.Success].schema.items.$ref
    ) {
      return `${getTypeNameFromRef(
        response[ResponseCode.Success].schema.items.$ref
      )}[]`;
    }
  }
};
