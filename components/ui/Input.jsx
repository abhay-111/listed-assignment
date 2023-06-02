import React from 'react'

export const Input = ({ labelText , type,placeholder}) => {
  return (
    <div className="flex flex-col gap-[10px]">
      <label>{labelText}</label>
      <input
        type={type}
        className="h-[40px] w-full bg-[#F5F5F5] text-[16px] placeholder:text-black leading-[19.2px] outline-none p-[10px_15px] rounded-[10px]"
        placeholder={placeholder}
      />
    </div>
  );
}
