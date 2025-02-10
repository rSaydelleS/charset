import UserModel from "../models/UserModel.js";
import bcrypt, { genSalt } from "bcrypt";

const saltRounds = 13;

const loginUser = async (req, reply) => {
  try {
    const { email, senha } = req.body;
    let user = await UserModel.findOne({ email: email }).exec();
    if (user === null) {
      return reply.send({ data: "email ou senha inexistentes" });
    }
    return reply.send({ data: user });
  } catch (error) {
    console.error(error);
  }
};

const getUser = async (req, reply) => {
  try {
    const users = await UserModel.find();
    if (!users) {
      reply.status(404).send({ data: "nenhum usuario encontrado" });
    }
    return reply.send({ data: users });
  } catch (error) {
    console.error(error);
  }
};

const getUserById = async (req, reply) => {
  try {
    const userId = req.params.id;
    const foundedUser = await UserModel.findById({ _id: userId });
    if (!foundedUser) {
      return reply.send({ data: `o usuario de id: ${userId} não existe` });
    }
    return reply.send({ data: foundedUser });
  } catch (error) {
    console.error(error);
  }
};

const createUser = async (req, reply) => {
  try {
    const { nome, email, senha } = await req.body;
    const genSalts = bcrypt.genSalt(saltRounds);
    const encryptedPassword = bcrypt.hash(senha, genSalts);
    const user = await UserModel.create({ nome, email, encryptedPassword });
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
  loginUser,
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
