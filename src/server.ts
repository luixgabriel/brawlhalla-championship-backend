import ExpressAdapter from "./infra/http/express";

import "dotenv/config";

const httpServer = new ExpressAdapter();
const PORT = 3333 || process.env.PORT;

httpServer.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
