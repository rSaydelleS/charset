import UserModel from "../models/UserModel.js";

const getUser = async (req, reply) => {
  try {
    // const userId = await req.params.id;
    // const foundedUser = await UserModel.findById({ _id: userId });
    const users = await UserModel.find();
    if (!users) {
      reply.status(404).send({ data: "id de usuario nao encontrado" });
    }
    return reply.send({ data: users });
  } catch (error) {
    console.error(error);
  }
};

const createUser = async (req, reply) => {
  try {
    const { nome, email, senha } = await req.body;
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
    return reply.send({ data: newUser });
  } catch (error) {
    console.error(error);
  }
};

const deleteUser = async (req, reply) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findByIdAndDelete({ _id: id });
    return reply.send({ data: `usuario de id:${id} deletado` });
  } catch (error) {
    console.error(error);
  }
};

export default {
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
