import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = ({
  icon = faSearch, 
  placeholder = "Search...", 
  value = "", 
  onChange, 
  className = "", 
  inputClassName = "",
  iconClassName = "",
  iconPosition = "start",
}) => {
  return (
    <div
      className={`flex items-center border border-gray-300 h-10 rounded-md p-2 ${className}`}
    >
      {iconPosition === "start" && (
        <FontAwesomeIcon
          icon={icon}
          className={`text-gray-500 mr-2 ${iconClassName}`}
        />
      )}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`outline-none w-full text-gray-700 ${inputClassName}`}
      />
      {iconPosition === "end" && (
        <FontAwesomeIcon
          icon={icon}
          className={`text-gray-500 ml-2 ${iconClassName}`}
        />
      )}
    </div>
  );
};

export default Search;
