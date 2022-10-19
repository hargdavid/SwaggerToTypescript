export type PropertyElement = {
  format: string;
  type: DataType;
  enum?: string[];
  nullable?: boolean;
  items?: ArrayObj;
};

export type ArrayObj = RefItem & {
  type?: string;
  items?: RefItem;
};

export type RefItem = {
  $ref?: string;
};

export enum DataType {
  Array = "array",
  Boolean = "boolean",
  Integer = "integer",
  Number = "number",
  Object = "object",
  String = "string",
}

export type EnumObj = {
  name: string;
  values: string[];
};
