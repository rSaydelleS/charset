const express = require("express");
const routes = express.Router();
const conn = require("../config/userConn");
const controller = require("../controllers/controllers");

conn();

routes.get("/", controller.getAll);

routes.get("/:id", controller.getOne);

routes.put("/update/:id", controller.updateLogin);

routes.post("/create", controller.create);

routes.post("/login", controller.login);

routes.delete("/delete/:id", controller.deleteUser);

module.exports = routes;
