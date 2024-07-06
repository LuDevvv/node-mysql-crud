const {
  getAll,
  getById,
  create,
  update,
  remove,
} = require("../models/ProductModel");

// Get all products
async function getAllProducts(req, res) {
  try {
    const products = await getAll();
    res.json(products);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching products", error: error.message });
  }
}

// Get a product by its ID
async function getProductById(req, res) {
  const { id } = req.params;

  try {
    const product = await getById(id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching product", error: error.message });
  }
}

// Create a new product
async function createProduct(req, res) {
  const { name, description, image_url, price, stock_quantity } = req.body;
  const product = { name, description, image_url, price, stock_quantity };

  try {
    await create(product);
    res.status(201).json({ message: "Product created" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating product", error: error.message });
  }
}

// Update an existing product
async function updateProduct(req, res) {
  const { id } = req.params;
  const { name, description, image_url, price, stock_quantity } = req.body;
  const product = { name, description, image_url, price, stock_quantity };

  try {
    const count = await update(id, product);
    if (count) {
      res.json({ message: "Product updated" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating product", error: error.message });
  }
}

// Delete a product
async function deleteProduct(req, res) {
  const { id } = req.params;

  try {
    const count = await remove(id);
    if (count) {
      res.json({ message: "Product deleted" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting product", error: error.message });
  }
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
