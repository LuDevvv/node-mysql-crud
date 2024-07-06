import React from "react";

function NoProductsFound() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-64 bg-white shadow-md rounded-lg p-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-20 w-20 text-gray-300 mb-6 animate-bounce"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        No products found
      </h3>
      <p className="text-gray-600 text-center">
        Try adjusting your search filters or searching for a different product.
      </p>
    </div>
  );
}

export default NoProductsFound;
