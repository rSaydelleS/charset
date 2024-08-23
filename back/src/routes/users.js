const express = require("express");
const routes = express.Router();
const conn = require("../config/userConn");
const controller = require("../controllers/controllers");

conn();

routes.get("/", controller.getAll);

routes.get("/:id", controller.getOne);

routes.put("/update/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).json({
    message: `Rota de atualizacao do usuario ${id}`,
  });
});

routes.post("/create", controller.create);

routes.delete("/delete/:id", controller.deleteUser);

module.exports = routes;
