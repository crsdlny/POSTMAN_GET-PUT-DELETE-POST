import express from "express";
import api_router from "./routes/api.js";
import { sequelize } from "./models/db.js";
import "./models/Product.js";

await sequelize.sync();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to Crisdale API");
});

app.use("/api", api_router);

app.listen(3000, () => {
  console.log("XianFire-style app running on http://localhost:3000");
});