const knex = require("knex");
const dbConfig = require("../config/db.config");

const database = knex(dbConfig);

const Product = {
  getAll: async () => {
    try {
      return await database("products").select("*");
    } catch (error) {
      throw new Error("Error fetching products: " + error.message);
    }
  },

  getById: async (id) => {
    try {
      return await database("products").where({ id }).first();
    } catch (error) {
      throw new Error("Error fetching product by ID: " + error.message);
    }
  },

  create: async (product) => {
    try {
      return await database("products").insert(product);
    } catch (error) {
      throw new Error("Error creating product: " + error.message);
    }
  },

  update: async (id, product) => {
    try {
      return await database("products").where({ id }).update(product);
    } catch (error) {
      throw new Error("Error updating product: " + error.message);
    }
  },

  remove: async (id) => {
    try {
      return await database("products").where({ id }).del();
    } catch (error) {
      throw new Error("Error deleting product: " + error.message);
    }
  },
};

module.exports = Product;
