import React from 'react'
import LineChart from '../ui/charts/CustomLineChart';

export const ProductActivities = () => {
  return (
    <section className="md:p-[30px_40px] p-[12px_24px]  w-full gap-[30px] bg-white rounded-[20px] flex flex-col">
      <div className="flex md:flex-row flex-col  justify-between gap-3 md:items-center">
        <div className="flex flex-col gap-[5px]">
          <p className="text-[18px] leading-[22px] font-bold font-montserrat">Activities</p>
          <p className="text-[12px] leading-[16px] text-[#858585] cursor-pointer">
            May - June 2021
            <img
              className="w-[5px] h-[8px] inline ml-2 rotate-[90deg]"
              src="https://res.cloudinary.com/dqzjevzuo/image/upload/v1685799677/pfcdidyynigmafxbjstl.svg"
              alt=""
            />
          </p>
        </div>
        <div className="flex gap-[35px]">
          <div className="flex items-center gap-[11px]">
            <div className="h-[10px] w-[10px] rounded-full bg-[#E9A0A0]"></div>
            <p className="text-[14px] leding-[17px]">Guest</p>
          </div>
          <div className="flex items-center gap-[11px]">
            <div className="h-[10px] w-[10px] rounded-full bg-[#9BDD7C]"></div>
            <p className="text-[14px] leding-[17px]">User</p>
          </div>
        </div>
      </div>
      <LineChart></LineChart>
    </section>
  );
}
