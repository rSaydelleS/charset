import Fastify from "fastify";
import CharRoutes from "./src/routes/charRoutes.js";
import UserRoutes from "./src/routes/userRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const fastify = Fastify({ logger: true });
const PORT = 4040;
fastify.register(CharRoutes, { prefix: "/char" });
fastify.register(UserRoutes, { prefix: "/users" });

const start = () => {
  try {
    fastify.listen({ port: PORT }, () => {
      fastify.log.info(`server is runing on port:${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
