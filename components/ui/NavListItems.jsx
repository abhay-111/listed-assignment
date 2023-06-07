import React from 'react'

export const NavListItems = ({text,iconUrl,isActive}) => {
  return (
    <li className="flex items-center gap-[20px] w-full cursor-pointer">
      <img src={iconUrl} className="h-[18px] w-[18px]" alt="" />
      <p
        className={
          "text-white md:text-[18px] text-[14px] leading-[22px] font-montserrat " +
          (isActive ? "font-bold" : "font-[300]")
        }
      >
        {text}
      </p>
    </li>
  );
}
