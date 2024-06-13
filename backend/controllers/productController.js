const Product = require('../models/productModel');

const getProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

const createProduct = async (req, res) => {
  const { name, price, description, image, category, countInStock } = req.body;
  const product = new Product({
    name,
    price,
    description,
    image,
    category,
    countInStock,
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
};

module.exports = {
  getProducts,
  createProduct,
};
