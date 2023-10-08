const express = require("express");
const loginRouter = express.Router();
const { httpLoginSubmit, httpLogout } = require("./login.controller");

loginRouter.post("/login", httpLoginSubmit);
loginRouter.post("/logout", httpLogout);

module.exports = loginRouter;
