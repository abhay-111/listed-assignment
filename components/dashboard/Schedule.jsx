"use client";
import React from "react";
import { EventItem } from "../ui/EventItem";
import { data } from "../../helpers/dummy";
export const Schedule = () => {

  return (
    <div className="flex flex-col bg-white rounded-[20px]  w-full p-[30px_40px] gap-[23px]">
      <div className="w-full flex justify-between">
        <p className="text-[18px] leading-[22px] font-bold font-montserrat ">
          Today’s schedule
        </p>
        <p className="text-[12px] leading-[16px] text-[#858585] cursor-pointer">
          See all
          <img
          className="w-[5px] h-[8px] inline ml-2"
            src="https://res.cloudinary.com/dqzjevzuo/image/upload/v1685799677/pfcdidyynigmafxbjstl.svg"
            alt=""
          />
        </p>
      </div>
      <div className="flex w-full flex-col gap-[13px] overflow-hidden">
        {data.eventData.map((item, index) => {
          return (
            <EventItem
              title={item.title}
              time={item.time}
              description={item.description}
              color={item.color}
            ></EventItem>
          );
        })}
      </div>
    </div>
  );
};
