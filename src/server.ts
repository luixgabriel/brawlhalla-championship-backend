import ExpressAdapter from "./infra/http/express";
import dotenv from "dotenv";
dotenv.config();

const httpServer = new ExpressAdapter();
const PORT = 3000;

httpServer.listen(PORT, () =>
  console.log(`Servidor rodando na porta ${PORT}!`)
);
