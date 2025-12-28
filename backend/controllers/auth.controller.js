/**
 * Authentication controller
 */
const bcrypt = require("bcrypt");
const { signToken } = require("../utils/jwt");
const { User } = require("../models");

exports.register = async (req, res) => {
  const { email, password, role } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({ email, password: hash, role });
  res.json(user);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = signToken({ id: user.id, role: user.role });
  res.json({ token });
};
