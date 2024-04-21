const express = require("express");
const path = require("path");
const Router = express.Router();

Router.route("/")
  .get((req, res) => {
    res.sendFile(path.join(__dirname, "../Public/Login.html"));
  })
  .post((req, res) => {
    console.log(req.body);
  });

module.exports = Router;