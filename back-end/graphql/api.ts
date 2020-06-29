import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";

const router: express.Router = express.Router();

router.use(
  "/",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

export default router;
