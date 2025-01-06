import React from 'react';

const CustomInput = ({
  name,
  text,
  type = 'text',
  handleChange,
  value = '',
  isTextarea = false,
  isDisabled = false,
}) => (
  <label className="flex-1 w-full flex flex-col">
    {text && (
      <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
        {text}
      </span>
    )}

    {isTextarea ? (
      <textarea
        required
        name={name}
        value={value} // Controlled input
        rows={4}
        placeholder={text}
        onChange={(e) => handleChange(e, name)}
        className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#b3b3b4] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#6d7077] rounded-[10px] sm:min-w-[300px]"
        disabled={isDisabled}
      />
    ) : (
      <input
        required
        name={name}
        value={value} // Controlled input
        type={type}
        placeholder={text}
        onChange={(e) => handleChange(e, name)}
        disabled={isDisabled}
        className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#b3b3b4] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#6d7077] rounded-[10px] sm:min-w-[300px]"
      />
    )}
  </label>
);

export default CustomInput;
