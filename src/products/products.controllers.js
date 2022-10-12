const uuid = require("uuid");
const Products = require("../models/product.models");

const getAllProducts = async () => {
  const data = await Products.findAll();
  return data;
};

const createProduct = async (data) => {
  const newProduct = await Products.create({
    id: uuid.v4(),
    name: data.name,
    category: data.category,
    price: data.price,
    isAvailable: data.isAvailable,
  });
  return newProduct;
};

const getProductById = async (idSearch) => {
  const data = await Products.findOne({
    where: {
      id: idSearch,
    },
  });
  return data;
};

const editProduct = async (idUpdate, data) => {
  const response = await Products.update(data, {
    where: {
      id: idUpdate,
    },
  });
  return response;
};

const deleteProduct = async (id) => {
  const data = await Products.destroy({
    where: {
      id,
    },
  });
  return data;
};

module.exports = {
  getAllProducts,
  createProduct,
  getProductById,
  editProduct,
  deleteProduct,
};
