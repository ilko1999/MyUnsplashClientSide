import React from "react";

function SearchBar({ placeholder, handleChange }) {
  
  return (
    <>
      <input placeholder={placeholder} onChange={handleChange} />
    </>
  );
}

export default SearchBar;
