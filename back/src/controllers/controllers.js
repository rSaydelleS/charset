const userModel = require("../model/userModel");

exports.getAll = async (req, res) => {
  try {
    const get = await userModel.find({});
    res.status(200).json({
      message: "Trazendo todos os usuarios",
      data: get,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Falha na busca",
    });
  }
};

exports.create = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  console.log(name, email);
  try {
    const user = await userModel.create({
      name: name,
      email: email,
    });

    res.status(200).json({
      message: "Usuario criado com sucesso",
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Campos incorretos",
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userID = req.params.id;
    const deletedUser = await userModel.findByIdAndDelete(userID);

    res.status(200).json({
      message: "Usuario deletado com sucesso",
      data: deletedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Erro ao deletar usuario",
    });
  }
};
