import React from 'react';

const CustomInput = ({ name, text, type, value, handleChange, isTextarea, error }) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700">{text}</label>
      {isTextarea ? (
        <textarea
          name={name}
          value={value} // Ensure value is passed
          onChange={handleChange} // Ensure change is handled
          className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value} // Ensure value is passed
          onChange={handleChange} // Ensure change is handled
          className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default CustomInput;
