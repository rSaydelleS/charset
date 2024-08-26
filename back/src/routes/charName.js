const express = require("express");
const routes = express.Router();
const conn = require("../config/userConn");

conn();
routes.get("/");
