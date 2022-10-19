import { capitalizeString } from "../helpers/capitalizeString";
import {
  PathObj,
  MethodType,
  Parameter,
  ResponseObj,
  ResponseCode,
} from "../types/apiTypes";

export const createEndpoints = (paths: unknown): string => {
  let returnString = "";
  returnString += `import * as module from "../types/types";
`;

  Object.keys(paths).forEach((path) => {
    const pathObj: PathObj = paths[path];

    if (pathObj.get) {
      returnString += createGetEndpoint(path, pathObj.get);
    }
    if (pathObj.post) {
      //TODO create method for this
    }
    if (pathObj.delete) {
      //TODO create method for this
    }
    if (pathObj.patch) {
      //TODO create method for this
    }
    if (pathObj.put) {
      //TODO create method for this
    }
  });

  return returnString;
};

const createGetEndpoint = (path: string, pathObj: MethodType): string => {
  const functionName = `get${path
    .replaceAll("{", "")
    .replaceAll("}", "")
    .replaceAll("-", "/")
    .split("/")
    .map(capitalizeString)
    .join("")}`;

  let functionString = `const ${functionName} = async () => {`;

  functionString += `};
  `;
  return functionString;
};
