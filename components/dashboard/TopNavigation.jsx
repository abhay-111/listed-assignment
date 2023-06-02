import React from "react";

export const TopNavigation = () => {
  return (
    <div className="w-full flex justify-between items-center mt-[20px]">
      <p className="text-[24px] leading-[29px] font-bold">Dashboard</p>
      <div className="flex gap-[30px] items-center">
        <input
          type="search"
          className="h-[30px] w-[180px] rounded-[10px] p-[6px_15px] text-[#B0B0B0] placeholder:text-[#B0B0B0] text-[14px]"
          placeholder="Search..."
        />
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
