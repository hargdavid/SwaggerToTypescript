import { DataType } from "../types/types";
import { convertObjectToType } from "./objectToType";

export const structureData = (data: unknown): string => {
  const dataKeys: string[] = Object.keys(data);
  let returnString = "";

  dataKeys.forEach((dataKey: string) => {
    if (data[dataKey] && data[dataKey].type) {
      if (data[dataKey].type === DataType.Object) {
        returnString += convertObjectToType(dataKey, data[dataKey].properties);
      }
    }
  });

  return returnString;
};
