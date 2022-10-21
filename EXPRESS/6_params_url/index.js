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

app.get("/users/add", (req, res) => {
  res.sendFile(`${basePath}/userform.html`);
});

app.post("/users/save", (req, res) => {});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  console.log(`buscando pelo o usuário com o id ${id}`);
  res.sendFile(`${basePath}/users.html`);
});

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`servidor rodado na porta ${port}`);
});
