import CharModel from "../models/CharModel.js";

const getById = async (req, reply) => {
  try {
    const { id } = req.params;
    const char = await CharModel.findById({ _id: id });
    reply.send({ data: char });
  } catch (error) {
    console.error(error);
  }
};

const createChar = async (req, reply) => {
  try {
    const { nome, classe, nivel, especie } = req.body;
    const char = await CharModel.create({ nome, classe, nivel, especie });
    reply.send({ data: "char created" });
  } catch (error) {
    console.error(error);
  }
};

const updateChar = async (req, reply) => {
  try {
    const { id } = req.params;
    const { nome, classe, nivel, especie } = req.body;
    const char = await CharModel.findByIdAndUpdate(id, {
      nome: nome,
      classe: classe,
      nivel: nivel,
      especie: especie,
    });
    reply.send({ data: `updating char of id: ${id}` });
  } catch (error) {
    console.error(error);
  }
};

const deleteChar = async (req, reply) => {
  try {
    const { id } = req.params;
    const char = await CharModel.findByIdAndDelete(id);
    return reply.send({ data: `deleting char of id: ${id}` });
  } catch (error) {
    console.error(error);
  }
};

export default {
  getById,
  createChar,
  updateChar,
  deleteChar,
};
