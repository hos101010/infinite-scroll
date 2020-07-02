import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";

const router: express.Router = express.Router();

router.use(
  "/",
  graphqlHTTP((req, res) => ({
    schema,
    graphiql: true,
    context: { req, res },
  }))
);

export default router;
