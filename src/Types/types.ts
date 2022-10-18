export type PropertyElement = {
  format: string;
  type: DataType;
  enum?: string[];
};

export type DataType =
  | "object"
  | "string"
  | "integer"
  | "array"
  | "boolean"
  | "number";
