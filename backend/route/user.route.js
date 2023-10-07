const express = require("express");
const { UserModel } = require("../model/user.model");
const UserRoute = express.Router();
const bcrypt = require("bcrypt");

// register

UserRoute.post("/register", async (req, res) => {
  const { name, email, pass } = req.body;
  try {
    bcrypt.hash(pass, 5, async (err, hash) => {
      if (err) throw err;
      const user = new UserModel({ name, email, pass: hash });
      await user.save();
      res.status(200).send({ msg: "New User Registered Successfully" });
    });
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

// Login

UserRoute.post("/login", (req, res) => {});

module.exports = {
  UserRoute,
};
