import express, { Request, Response } from "express";
import userRoutes from "../src/main/routes/user-routes";
import { resolve } from "path";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use('/user', userRoutes)
// app.use('/', postRoutes)
// app.use('/', voluntaryRoutes)
// app.use('/', jobRoutes)
// app.use('/', clientRoutes)
// app.use('/', candidateRoutes)

app.get("/", (req: Request, res: Response) => {
  res.send("API Running! :)");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
