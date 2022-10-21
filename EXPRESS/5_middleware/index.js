const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const basePath = path.join(__dirname, "templates");

const checkAuth = function (req, res, next) {
  req.althStatus = true;
  if (req.althStatus) {
    console.log("Está logado");
    next();
  } else {
    console.log("Não está logado, faça o login para continuar.");
    next();
  }
};

app.use(checkAuth);

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`servidor rodado na porta ${port}`);
});
