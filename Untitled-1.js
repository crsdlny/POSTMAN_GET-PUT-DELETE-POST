import express from "express";
import router from "./routes.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Crisdale API");
});

app.use(router);

app.listen(3000, () => {
  console.log("XianFire-style app running on http://localhost:3000");
});