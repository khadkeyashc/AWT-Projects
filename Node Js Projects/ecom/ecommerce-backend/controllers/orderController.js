const fs = require('fs');
const path = './data/orders.json';

const getAllOrders = (req, res) => {
  const orders = JSON.parse(fs.readFileSync(path));
  res.json(orders);
};

const createOrder = (req, res) => {
  const orders = JSON.parse(fs.readFileSync(path));
  const newOrder = req.body;
  orders.push(newOrder);
  fs.writeFileSync(path, JSON.stringify(orders, null, 2));
  res.status(201).json(newOrder);
};

module.exports = { getAllOrders, createOrder };
