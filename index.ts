import express from "express";
const app: express.Express = express();
import router from "./routes/apiRoute";

app.use("/", router);

app.listen(8080, () => {
  console.log("start server 8080");
});
