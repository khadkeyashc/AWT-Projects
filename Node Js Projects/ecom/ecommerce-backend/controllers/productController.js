const fs = require('fs');
const path = './data/products.json';

const getAllProducts = (req, res) => {
  const products = JSON.parse(fs.readFileSync(path));
  res.json(products);
};

const createProduct = (req, res) => {
  const products = JSON.parse(fs.readFileSync(path));
  const newProduct = req.body;
  products.push(newProduct);
  fs.writeFileSync(path, JSON.stringify(products, null, 2));
  res.status(201).json(newProduct);
};

module.exports = { getAllProducts, createProduct };
