import React, { useState } from "react";
import FilterBar from "./components/FilterBar.jsx";
import SearchBar from "./components/SearchBar.jsx";
import ProductCard from "./components/ProductCard.jsx";
import NoProductsFound from "./components/NoProductsFound.jsx";
import { IoIosAddCircle } from "react-icons/io";
import AddProduct from "./components/AddProduct.jsx";
import { useProductContext } from "./context/ProductContext.jsx";
import DeleteProduct from "./components/DeleteProduct.jsx";
import EditProduct from "./components/EditProduct.jsx";

function App() {
  const {
    showAddProduct,
    handleSearch,
    handleAddProduct,
    handleFilterChange,
    sortedProducts,
    ToggleShowProduct,
    addProduct,
    isEditing,
    setIsEditing,
    isDeleting,
    setIsDeleting,
    currentProduct,
    setCurrentProduct,
    handleCancelEdit,
    handleConfirmDelete,
    handleCancelDelete,
  } = useProductContext();

  return (
    <div className="w-full mx-auto px-4 py-8 bg-gray-100 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="w-full mb-4">
          <SearchBar onSearch={handleSearch} />
        </div>

        <FilterBar onFilterChange={handleFilterChange} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sortedProducts.length > 0 &&
            sortedProducts.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                setIsEditing={setIsEditing}
                setIsDeleting={setIsDeleting}
                setCurrentProduct={setCurrentProduct}
              />
            ))}
        </div>

        {sortedProducts.length <= 0 && <NoProductsFound />}
      </div>

      {showAddProduct && (
        <AddProduct onClose={ToggleShowProduct} onSubmit={addProduct} />
      )}

      {isEditing && <EditProduct handleCancelEdit={handleCancelEdit} />}

      {isDeleting && (
        <DeleteProduct
          currentProduct={currentProduct}
          handleCancelDelete={handleCancelDelete}
          handleConfirmDelete={handleConfirmDelete}
        />
      )}
    </div>
  );
}

export default App;
