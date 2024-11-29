import conn from "../connection/dbConnection.js";
import Controller from "../controllers/charControllers.js";

const charRouter = (fastify, options, done) => {
  conn();
  fastify.get("/char/:id", Controller.getById);
  fastify.post("/char", Controller.createChar);
  fastify.put("/char/:id", Controller.updateChar);
  fastify.delete("/char/:id", Controller.deleteChar);

  done();
};

export default charRouter;
