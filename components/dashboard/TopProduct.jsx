'use client'
import React,{useState,useEffect} from 'react'
import { CustomPieChart } from '../ui/charts/CustomPieChart';

export const TopProduct = () => {
    const [domLoaded, setDomLoaded] = useState(false);
    useEffect(() => {
      setDomLoaded(true);
    }, []);
  return (
    <div className="flex flex-col bg-white rounded-[20px] min-w-[480px] w-full p-[30px_40px] gap-[23px]">
      <div className="w-full flex justify-between">
        <p className="text-[18px] leading-[22px] font-bold ">Top Product</p>
        <p className="text-[12px] leading-[16px] text-[#858585]">Top Product</p>
      </div>
      <div className="flex w-full gap-[43px]">
        <div className='flex-1'>
           {domLoaded &&  <CustomPieChart></CustomPieChart>}
        </div>
        <div className="flex flex-col  w-full  gap-[21px] justify-between">
          <div className="flex gap-[10px]">
            <div className="h-[11px] w-[11px] bg-[#98D89E] rounded-full"></div>
            <div className="flex flex-col gap-[5px]">
              <p className="text-[14px] leading-[100%]  font-bold">
                Basic Tees
              </p>
              <p className="text-[12px] leading-[14px] text-[#858585]">55%</p>
            </div>
          </div>
          <div className="flex gap-[10px]">
            <div className="h-[11px] w-[11px] bg-[#98D89E] rounded-full"></div>
            <div className="flex flex-col gap-[5px]">
              <p className="text-[14px] leading-[100%]  font-bold">
                Basic Tees
              </p>
              <p className="text-[12px] leading-[14px] text-[#858585]">55%</p>
            </div>
          </div>
          <div className="flex gap-[10px]">
            <div className="h-[11px] w-[11px] bg-[#98D89E] rounded-full"></div>
            <div className="flex flex-col gap-[5px]">
              <p className="text-[14px] leading-[100%]  font-bold">
                Basic Tees
              </p>
              <p className="text-[12px] leading-[14px] text-[#858585]">55%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
