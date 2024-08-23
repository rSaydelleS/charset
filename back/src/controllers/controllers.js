const userModel = require("../model/userModel");

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
