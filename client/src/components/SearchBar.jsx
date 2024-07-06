import React, { useState, useRef } from "react";
import { SlMagnifier } from "react-icons/sl";

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");
  const searchInputRef = useRef(null);

  const handleChange = (event) => {
    setTerm(event.target.value);
    handleSubmit(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(term);
  };

  const handleClearSearch = () => {
    setTerm("");
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex items-center w-full rounded-md bg-white shadow-sm"
    >
      <button
        onClick={handleSubmit}
        className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
      >
        <SlMagnifier className="h-4 w-4 text-gray-400" />
      </button>

      <input
        ref={searchInputRef}
        type="text"
        placeholder="Search products..."
        value={term}
        onChange={handleChange}
        className="pl-10 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-sm"
      />
      {term && (
        <button
          type="button"
          onClick={handleClearSearch}
          className="absolute inset-y-0 right-0 flex items-center p-4 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </form>
  );
}

export default SearchBar;
