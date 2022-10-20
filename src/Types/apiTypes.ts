import { ArrayObj, DataType, RefItem } from "./types";

export type PathObj = {
  get?: MethodObj;
  post?: MethodObj;
  delete?: MethodObj;
  patch?: MethodObj;
  put?: MethodObj;
};

export type MethodObj = {
  tags: string[];
  parameters: Parameter[];
  responses: Map<string, ResponseObj>;
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

export enum MethodType {
  GET = "get",
  POST = "post",
  DELETE = "delete",
  PATCH = "patch",
  PUT = "put",
}
