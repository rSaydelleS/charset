import conn from "../connection/dbConnection.js";
import usersControllers from "../controllers/usersControllers.js";

const userRoutes = (fastify, options, done) => {
  conn();
  fastify.get("/all", usersControllers.getUser);
  fastify.get("/:id", usersControllers.getUserById);
  fastify.post("/", usersControllers.createUser);
  fastify.post("/login", usersControllers.loginUser);
  fastify.put("/:id", usersControllers.updateUser);
  fastify.delete("/:id", usersControllers.deleteUser);

  done();
};

export default userRoutes;
