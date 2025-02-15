import React from "react";

const Select = ({
  options = [],
  value,
  onChange,
  placeholder = "Select...",
  className = "",
  selectClassName = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      <select
        value={value}
        onChange={onChange}
        className={`border border-gray-300 rounded-md p-2 outline-none w-full ${selectClassName}`}
      >
        {/* Placeholder option */}
        <option value="" disabled hidden>
          {placeholder}
        </option>

        {/* Render options */}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
