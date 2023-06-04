'use client'
import React,{useState,useEffect} from 'react'
import { CustomPieChart } from '../ui/charts/CustomPieChart';
import { data } from "../../helpers/dummy";
export const TopProduct = () => {
    const [domLoaded, setDomLoaded] = useState(false);
    useEffect(() => {
      setDomLoaded(true);
    }, []);
  return (
    <div className="flex flex-col bg-white rounded-[20px]  w-full p-[30px_40px] gap-[23px]">
      <div className="w-full flex justify-between">
        <p className="text-[18px] leading-[22px] font-bold font-montserrat ">Top Product</p>
        <p className="text-[12px] leading-[16px] text-[#858585] cursor-pointer">
          May - June 2021
          <img
            className="w-[5px] h-[8px] inline ml-2 rotate-[90deg]"
            src="https://res.cloudinary.com/dqzjevzuo/image/upload/v1685799677/pfcdidyynigmafxbjstl.svg"
            alt=""
          />
        </p>
      </div>
      <div className="flex w-full gap-[43px]">
        <div className="flex-1">
          {domLoaded && <CustomPieChart data={data.pieChartData} ></CustomPieChart>}
        </div>
        <div className="flex flex-col  w-full  gap-[21px] justify-between">
          {
            data.pieChartData.map((item)=>{
              return (
                <div className="flex gap-[10px]">
                  <div className="h-[11px] w-[11px] rounded-full" style={{ backgroundColor:item.fill}}></div>
                  <div className="flex flex-col gap-[5px]">
                    <p className="text-[14px] leading-[100%]  font-bold">
                      {item.name}
                    </p>
                    <p className="text-[12px] leading-[14px] text-[#858585]">
                      {item.value} %
                    </p>
                  </div>
                </div>
              );
            })
          }
          
        </div>
      </div>
    </div>
  );
}
