import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import fileUpload from "express-fileupload";
import path from "path";
import HomeRoute from "./routes/indexRoute.js";
const __dirname = path.resolve();

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use(
  fileUpload({
    createParentPath: true,
  })
);
const port = process.env.PORT || 1337;
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use("/", HomeRoute);

app.get("/", (req, res) => {
  const time = new Date().getTime();
  const date = new Date().toDateString();
  return res.send({
    success: `The server is working fine on the date ${date} and ${time}`,
  });
});
app.listen(port, () => {
  console.log(`The server is listening on ${port}`);
});
