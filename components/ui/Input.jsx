import React from 'react'

export const Input = ({ labelText , type,placeholder}) => {
  return (
    <div className="flex flex-col gap-[10px]">
      <label className='md:text-[16px] text-[12px]'>{labelText}</label>
      <input
        type={type}
        className="h-[40px] w-full bg-[#F5F5F5] md:text-[16px] text-[12px] placeholder:text-black leading-[19.2px] outline-none p-[10px_15px] rounded-[10px]"
        placeholder={placeholder}
      />
    </div>
  );
}
