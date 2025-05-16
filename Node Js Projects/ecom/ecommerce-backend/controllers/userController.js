const fs = require('fs');
const path = './data/users.json';

const getAllUsers = (req, res) => {
  const users = JSON.parse(fs.readFileSync(path));
  res.json(users);
};

const createUser = (req, res) => {
  const users = JSON.parse(fs.readFileSync(path));
  const newUser = req.body;
  users.push(newUser);
  fs.writeFileSync(path, JSON.stringify(users, null, 2));
  res.status(201).json(newUser);
};

module.exports = { getAllUsers, createUser };
