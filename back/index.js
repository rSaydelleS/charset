const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Servidor operacional na porta: ${port}`);
});
