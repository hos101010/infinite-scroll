import express from "express";
import cors from "cors";
import graphqlRouter from "../graphql/api";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(cors());

    this.app.use("/graphql", graphqlRouter);

    this.app.get("/", (req: express.Request, res: express.Response) => {
      res.send("Hello world");
    });
  }
}

export default App;
