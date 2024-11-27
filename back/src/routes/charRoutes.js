const charRouter = (fastify, options, done) => {
  fastify.get("/char/:id", (req, reply) => {
    const { id } = req.params;
    reply.send(`getting char of id: ${id}`);
  });

  done();
};

export default charRouter;
