const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.engine(
  "xian",
  engine({
    extname: ".xian",
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views/layouts"),
    partialsDir: path.join(__dirname, "views/partials")
  })
);

app.set("view engine", "xian");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("dashboard", {
    title: "Dashboard",
    pageTitle: "Dashboard"
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});