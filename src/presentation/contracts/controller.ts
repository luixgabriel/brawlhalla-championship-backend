import { HttpResponse } from "./http";

export interface Controller<T = any> {
  handle: (data: T) => Promise<HttpResponse>;
}
