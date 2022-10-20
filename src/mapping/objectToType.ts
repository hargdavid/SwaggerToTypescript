import { capitalizeString } from "../helpers/capitalizeString";
import { getTypeNameFromRef } from "../helpers/getTypeNameFromRef";
import { PropertyElement, DataType } from "../types/types";

/* 
  example format
  export type TestObj = {
    uid: string;
  };
*/
export const convertObjectToType = (
  typeName: string,
  properties: Map<string, PropertyElement>
): string => {
  let enums = "";
  let returnString = "";
  returnString += `export type ${typeName} = {`;
  Object.keys(properties).forEach((objKey) => {
    returnString += `
  `;

    const propObj: PropertyElement = properties[objKey];
    switch (propObj.type as unknown as DataType) {
      case DataType.Array: {
        returnString += convertToArray(objKey, propObj);
        break;
      }
      case DataType.Boolean: {
        returnString += convertToBoolean(objKey);
        break;
      }
      case DataType.Integer:
      case DataType.Number: {
        returnString += convertToNumber(objKey);
        break;
      }
      case DataType.Object: {
        // TODO add objects if needed
        break;
      }
      case DataType.String: {
        if (propObj.enum) {
          returnString += convertToStringEnum(typeName, objKey);
          enums += convertToEnum(typeName, objKey, propObj.enum);
        } else {
          returnString += convertToString(objKey);
        }
        break;
      }
    }
  });

  returnString += `
};

`;

  if (enums.length > 0) {
    returnString += `${enums}
`;
  }

  return returnString;
};

const convertToString = (name: string) => {
  return `${name}: string;`;
};

const convertToNumber = (name: string) => {
  return `${name}: number;`;
};

const convertToBoolean = (name: string) => {
  return `${name}: boolean;`;
};

const convertToArray = (name: string, element: PropertyElement) => {
  let typeName = "";
  if (element.items) {
    if (element.items.items) {
      typeName = getTypeNameFromRef(element.items.items.$ref);
    } else {
      typeName = getTypeNameFromRef(element.items.$ref);
    }
  }

  return `${name}: ${typeName}[];`;
};

const convertToEnum = (
  typeName: string,
  name: string,
  enumArr: string[]
): string => {
  const capitalizedName = capitalizeString(name);
  let formattedEnumVals = "";

  enumArr.forEach((enumEl, key) => {
    if (key > 0) {
      formattedEnumVals += ``;
    }
    formattedEnumVals += `
  ${enumEl},`;
  });

  return `export enum ${typeName}${capitalizedName}Enum {${formattedEnumVals}
}
`;
};

const convertToStringEnum = (typeName: string, name: string) => {
  const capitalizedName = capitalizeString(name);
  return `${name}: ${typeName}${capitalizedName}Enum;`;
};
