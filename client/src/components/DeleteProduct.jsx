import React from "react";

function DeleteProduct({
  currentProduct,
  handleCancelDelete,
  handleConfirmDelete,
}) {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-bold mb-4">Delete Product</h3>
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete this product? This action cannot be
          undone.
        </p>

        <div className="flex items-center mb-4 gap-4 bg-gray-50 px-2 py-4 rounded">
          <img
            src={currentProduct.image_url}
            className="w-12 h-12 object-contain"
          />
          <span>{currentProduct.name}</span>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleCancelDelete}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded-md mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirmDelete}
            className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteProduct;
