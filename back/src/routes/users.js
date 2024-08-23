const express = require("express");
const routes = express.Router();
const conn = require("../config/userConn");
const controller = require("../controllers/controllers");

conn();

routes.get("/", (req, res) => {
  res.status(200).json({
    message: "ok",
  });
});

routes.get("/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).json({
    message: `Trazendo user com id: ${id}`,
  });
});

routes.put("/update/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).json({
    message: `Rota de atualizacao do usuario ${id}`,
  });
});

routes.post("/create", controller.create);

routes.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).json({
    message: `Usuario de id ${id} deletado`,
  });
});

module.exports = routes;
