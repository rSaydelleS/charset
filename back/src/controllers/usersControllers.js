import UserModel from "../models/UserModel";

const createUser = async (req, reply) => {
  try {
    const { nome, email, senha } = req.body;
    const user = await UserModel.create({ nome, email, senha });
    return reply.code(201).send({ data: user });
  } catch (error) {
    console.log(error);
  }
};

export default {
  createUser,
};
