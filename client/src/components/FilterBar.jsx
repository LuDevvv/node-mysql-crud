import React, { useState } from "react";
import { IoIosAddCircle, IoIosArrowDown } from "react-icons/io";
import { useProductContext } from "../context/ProductContext";

function FilterBar({ onFilterChange }) {
  const { handleAddProduct } = useProductContext();
  const filters = [
    {
      filterId: 0,
      filterName: "All",
    },
    {
      filterId: 1,
      filterName: "Price low to high",
    },
    {
      filterId: 2,
      filterName: "Price high to low",
    },
  ];

  const [selectedFilter, setSelectedFilter] = useState(filters[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
    onFilterChange(filter.filterId);
    setIsOpen(false);
  };

  return (
    <div className="w-full relative inline-block text-left mb-4">
      <div className="flex justify-between">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-md inline-flex items-center shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <span className="text-sm">{selectedFilter.filterName}</span>

          <IoIosArrowDown
            className={`h-4 w-4 ml-2 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </button>

        <button
          onClick={handleAddProduct}
          className="flex gap-2 items-center bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded whitespace-nowrap"
        >
          <IoIosAddCircle />
          Add Product
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute top-full mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="py-1">
            {filters.map((filter) => (
              <button
                key={filter.filterId}
                onClick={() => handleFilterClick(filter)}
                className={`flex gap-4 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                  selectedFilter.filterId === filter.filterId
                    ? "bg-gray-100"
                    : ""
                }`}
              >
                {filter.filterName}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterBar;
