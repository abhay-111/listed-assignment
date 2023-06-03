"use client";
import React, { useState, useEffect } from "react";
import { CustomPieChart } from "../ui/charts/CustomPieChart";
import { EventItem } from "../ui/EventItem";

export const Schedule = () => {
  const eventData = [
    {
      title: "Meeting with suppliers from Kuta Bali",
      time: "14.00-15.00",
      description: "at Sunset Road, Kuta, Bali ",
      color: "border-[#9BDD7C]",
    },
    {
      title: "Check operation at Giga Factory 1",
      time: "18.00-20.00",
      description: "at Central Jakarta ",
      color: "border-[#6972C3]",
    },
  ];
  return (
    <div className="flex flex-col bg-white rounded-[20px] min-w-[480px] w-full p-[30px_40px] gap-[23px]">
      <div className="w-full flex justify-between">
        <p className="text-[18px] leading-[22px] font-bold ">
          Today’s schedule
        </p>
        <p className="text-[12px] leading-[16px] text-[#858585]">
          See all
          <img
          className="w-[5px] h-[8px] inline ml-2"
            src="https://res.cloudinary.com/dqzjevzuo/image/upload/v1685799677/pfcdidyynigmafxbjstl.svg"
            alt=""
          />
        </p>
      </div>
      <div className="flex w-full flex-col gap-[13px] overflow-hidden">
        {eventData.map((item, index) => {
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
