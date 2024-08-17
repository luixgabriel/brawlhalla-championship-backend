import { Request, Response } from "express";
import { notFound } from "../../app/helpers/http-helper";
import { HttpRequest } from "../../infra/http/http-adapter";
import { errorMiddleware } from "../../infra/middlewares/error-middleware";

export const adaptRoute = (controller: any, method: any) => {
  return async (req: Request, res: Response) => {
    if (typeof controller[method] !== "function") {
      notFound(`Method ${method} not found on controller ${controller}`);
    }

    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params,
      query: req.query,
      headers: req.headers,
    };

    const httpResponse = await controller[method](httpRequest);

    if (httpResponse.status >= 200 && httpResponse.status <= 299) {
      res.status(httpResponse.status).json(httpResponse.body);
    } else {
      errorMiddleware(httpResponse, req, res);
    }
  };
};
