import Fastify from "fastify";
import CharRoutes from "./src/routes/charRoutes.js";

const fastify = Fastify({ logger: true });
const PORT = 3333;
fastify.register(CharRoutes);

const start = () => {
  try {
    fastify.listen({ port: PORT }, () => {
      console.log(`server listening on ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
