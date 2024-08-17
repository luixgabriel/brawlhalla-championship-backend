export interface HttpResponse {
  status: Number;
  body?: any;
  message?: string;
}

export interface HttpRequest {
  body?: any;
  params?: any;
  query?: any;
  headers?: any;
}
