import "source-map-support/register";
// eslint-disable-next-line no-unused-vars
import * as express from "express";
import App from "./App";

const port: number = Number(process.env.PORT) || 3001;
const app: express.Application = new App().app;

app
  .listen(port, () => console.log(`Express server listening at ${port}`))
  .on("error", (err) => console.error(err));
