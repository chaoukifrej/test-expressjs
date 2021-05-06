const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
app.set("view engine", "handlebars");
app.engine(
  "handlebars",
  handlebars({
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
  })
);

app.get("/", function (req, res) {
  res.render("main", { layout: "index" });
});

const port = 3000;
app.listen(port, function () {
  console.log(`Application disponible sur http://localhost:${port}`);
});
