import React from "react";
import { FiPlusCircle } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="search-bar">
      {/* <p> Search </p> */}
      <FiPlusCircle />
      <label for="search-bar" className="search-bar__label" />
      <input
        type="text"
        id="search-bar"
        className="search-bar__input"
        placeholder="Search"
      />
    </div>
  );
};
export default SearchBar;
