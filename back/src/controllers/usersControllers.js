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

const updateUser = async (req, reply) => {
  try {
    const { id } = req.params;
    const { nome, email, senha } = req.body;
    const newUser = await UserModel.findByIdAndUpdate(
      { _id: id },
      {
        nome: nome,
        email: email,
        senha: senha,
      }
    );
    return reply({ data: newUser });
  } catch (error) {
    console.error(error);
  }
};

export default {
  createUser,
  updateUser,
};
