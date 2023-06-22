import React from 'react'
import { add } from "@/app/store/reducers/mainSlice";
import { useDispatch } from 'react-redux';
export const NavListItems = ({text,iconUrl,isActive,index}) => {
  const dispatch = useDispatch()
  return (
    <li onClick={()=> dispatch(add(index))} className="flex items-center gap-[20px] w-full cursor-pointer">
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
