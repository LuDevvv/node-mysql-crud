import React, { useState } from "react";

function AddProduct({ onClose, onSubmit }) {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    image_url: "",
    price: 0,
    stock_quantity: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product);
    onClose();
  };

  // console.log(product);

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white w-[30rem] rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Add New Product</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={product.name}
                onChange={handleChange}
                placeholder="Enter product name"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm outline-none py-2"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={product.description}
                onChange={handleChange}
                rows="3"
                placeholder="Enter product description"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm outline-none py-2"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="image_url"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Image URL
              </label>
              <input
                type="url"
                id="image_url"
                name="image_url"
                value={product.image_url}
                onChange={handleChange}
                placeholder="Enter image URL"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm outline-none py-2"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Price ($)
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={product.price}
                onChange={handleChange}
                placeholder="Enter product price"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm outline-none py-2"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="stock_quantity"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Stock Quantity
              </label>
              <input
                type="number"
                id="stock_quantity"
                name="stock_quantity"
                value={product.stock_quantity}
                onChange={handleChange}
                placeholder="Enter stock quantity"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm outline-none py-2"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="mr-4 py-2 px-4 text-sm text-gray-700 rounded-md border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="py-2 px-4 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
