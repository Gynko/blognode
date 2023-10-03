const express = require("express");
const loginRouter = express.Router();
const { httpLoginSubmit } = require("./login.controller");

loginRouter.post("/", httpLoginSubmit);

module.exports = loginRouter;
