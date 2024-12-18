import conn from "../connection/dbConnection.js";
import usersControllers from "../controllers/usersControllers.js";

const userRoutes = (fastify, options, done) => {
  conn();
  fastify.post("/", usersControllers.createUser);
  fastify.put("/:id", usersControllers.updateUser);
  fastify.delete("/:id", usersControllers.deleteUser);

  done();
};

export default userRoutes;
