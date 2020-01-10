const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../validation");

router.post("/register", async (req, res) => {
  try {
    const userObj = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      age: req.body.age,
      dob: req.body.dob,
      currentAddress: req.body.currentAddress,
      permanentAddress: req.body.permanentAddress
    };

    // validate
    const { error } = registerValidation(userObj);
    if (error)
      return res
        .status(400)
        .send({ error: true, message: error.details[0].message });

    // check if user exists
    const userExists = await User.findOne({ email: userObj.email });
    if (userExists)
      return res
        .status(400)
        .send({ error: true, message: "User already exists" });

    // hash the pass
    const salt = await bcrypt.genSalt(12);
    const hashPass = await bcrypt.hash(userObj.password, salt);
    userObj.password = hashPass;

    // create user
    const user = new User(userObj);

    // save user
    const { _id } = await user.save();

    // send response
    return res.status(200).send({ user: _id });
  } catch (err) {
    if (err) {
      // send error
      return res
        .status(400)
        .send({ error: true, message: JSON.stringify(err) });
    }
  }
});

router.post("/login", async (req, res) => {
  try {
    const loginObj = {
      email: req.body.email,
      password: req.body.password
    };

    // validate
    const { error } = loginValidation(loginObj);
    if (error)
      return res
        .status(400)
        .send({ error: true, message: error.details[0].message });

    // check if user exists
    const user = await User.findOne({ email: loginObj.email });
    if (!user)
      return res
        .status(400)
        .send({ error: true, message: "User does not exists" });

    // verify password
    const validPass = await bcrypt.compare(loginObj.password, user.password);
    if (!validPass)
      return res
        .status(400)
        .send({ error: true, message: "Password is invalid" });

    // create a token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_TOKEN_SECRET, {
      expiresIn: "15m"
    });

    res.header("auth-token", token).send({ user: user._id });
  } catch (err) {
    if (err) {
      return res
        .status(400)
        .send({ error: true, message: JSON.stringify(err) });
    }
  }
});

module.exports = router;
