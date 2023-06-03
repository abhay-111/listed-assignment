import React from 'react'
import LineChart from '../ui/charts/CustomLineChart';

export const ProductActivities = () => {
  return (
    <section className="p-[30px_40px] w-full gap-[30px] bg-white rounded-[20px] flex flex-col">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-[5px]">
          <p className="text-[18px] leading-[22px] font-bold">Activities</p>
          <p className="text-[14px] text-[#858585] leading-[17px]">
            May - June 2021
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
