import { ArrayObj, DataType, RefItem } from "./types";

export type PathObj = {
  get?: MethodType;
  post?: MethodType;
  delete?: MethodType;
  patch?: MethodType;
  put?: MethodType;
};

export type MethodType = {
  tags: string[];
  parameters: Parameter[];
  response: Map<string, ResponseObj>;
};

export type Parameter = {
  in: "body" | "path" | "query";
  name: string;
  required: true;
  type?: DataType;
  format?: string;
  schema?: RefItem;
};

export type ResponseObj = {
  description: string;
  schema?: ArrayObj;
};

export enum ResponseCode {
  BadRequest = "400",
  Success = "200",
}
