import Fastify from "fastify";
import CharRoutes from "./src/routes/charRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const fastify = Fastify({ logger: true });
const PORT = 3333;
fastify.register(CharRoutes);

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
