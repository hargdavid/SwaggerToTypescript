import { DataType } from "../types/types";

export const convertInputType = (inputType: DataType) => {
  switch (inputType) {
    case DataType.Boolean: {
      return DataType.Boolean;
    }
    case DataType.Integer:
    case DataType.Number: {
      return DataType.Number;
    }
    case DataType.String: {
      return DataType.String;
    }
    default: {
      return inputType;
    }
  }
};
