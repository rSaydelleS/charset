const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./src/routes/users");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Servidor operacional na porta: ${PORT}`);
});

app.use("/users", routes);
