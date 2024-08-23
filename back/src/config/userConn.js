const mongoose = require("mongoose");

let conn;

const connect = () => {
  try {
    if (!conn) {
      mongoose.connect(process.env.MOONG_URI_USERS);
    }

    conn = mongoose.connect(process.env.MOONG_URI_USERS);
    console.log("conectado com sucesso");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect;
