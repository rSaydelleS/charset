import conn from "../connection/dbConnection.js";
import Controller from "../controllers/charControllers.js";

const charRouter = (fastify, options, done) => {
  conn();
  fastify.get("/:id", Controller.getById);
  fastify.post("/", Controller.createChar);
  fastify.put("/:id", Controller.updateChar);
  fastify.delete("/:id", Controller.deleteChar);

  done();
};

export default charRouter;
