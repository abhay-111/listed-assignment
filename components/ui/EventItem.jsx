import React from 'react'

export const EventItem = ({title,time,color,description}) => {
  return (
    <div className={"flex w-full flex-col gap-[5px] border-l-[5px] pl-[10px] " + color}>
      <p className=" font-bold text-[14px] leading-[17px]">
        {title}
      </p>
      <p className="text-[12px] leading-[16px] text-[#999999]">{time}</p>
      <p className="text-[12px] leading-[16px] text-[#999999]">
        {description}
      </p>
    </div>
  );
}
