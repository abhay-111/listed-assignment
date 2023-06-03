import React from "react";

export const TopNavigation = () => {
  return (
    <div className="w-full flex justify-between items-center mt-[20px]">
      <p className="text-[24px] leading-[29px] font-bold">Dashboard</p>
      <div className="flex gap-[30px] items-center">
        <div className="flex h-[30px] p-[6px_15px] w-[180px] bg-white rounded-[10px] items-center">
          <input
            type="text"
            className=" rounded-[10px] w-[138px] outline-none  text-[#B0B0B0] placeholder:text-[#B0B0B0] text-[14px]"
            placeholder="Search..."
          />
          <img
            className="h-[12px] flex-1 w-[12px] mr-2"
            src="https://res.cloudinary.com/dqzjevzuo/image/upload/v1685800015/svzf6chori3ewqyz1nkg.svg"
            alt=""
          />
        </div>
        <img
          className="h-[20px] w-[18px]"
          src="https://res.cloudinary.com/dqzjevzuo/image/upload/v1685699311/cuwitl4ghooy6dqhfxbt.svg"
          alt=""
        />
        <img
          className="h-[30px] w-[30px]"
          src="https://res.cloudinary.com/dqzjevzuo/image/upload/v1685699309/jffhwv55gikane4lv7py.png"
          alt=""
        />
      </div>
    </div>
  );
};
