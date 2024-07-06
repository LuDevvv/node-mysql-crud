import React, { useState } from "react";

function ProductCard({
  product,
  setIsEditing,
  setIsDeleting,
  setCurrentProduct,
}) {
  const handleEditClick = () => {
    setIsEditing(true);
    setCurrentProduct(product);
  };

  const handleDeleteClick = () => {
    setIsDeleting(true);
    setCurrentProduct(product);
  };

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-2xl">
      <div className="w-full flex justify-center p-3">
        <div className="w-full flex justify-end gap-2 items-center rounded">
          <button
            onClick={handleEditClick}
            className="p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 bg-blue-500 focus:ring-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </button>
          <button
            onClick={handleDeleteClick}
            className="p-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 bg-red-500 focus:ring-red-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="p-4">
        <img
          src={product.image_url}
          alt={product.name}
          className="h-40 w-full object-contain"
        />
      </div>
      <div className="flex flex-col justify-between h-full p-4">
        <div>
          <h3 className="text-lg font-bold mb-2 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-3">
            {product.description}
          </p>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-green-600 font-medium text-lg">
              ${product.price.toFixed(2)}
            </span>
            {product.stock_quantity <= 0 ? (
              <span className="bg-red-100 text-red-800 text-xs font-normal px-2.5 py-0.5 rounded-sm">
                Unavailable
              </span>
            ) : (
              <span className="bg-green-100 text-green-800 text-xs font-normal px-2.5 py-0.5 rounded-sm">
                {product.stock_quantity} In Stock
              </span>
            )}
          </div>
          <button className="w-full bg-blue-500 text-white text-center py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Visit Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
