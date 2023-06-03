import React from 'react'

export const StatisticsCard = ({bgColor,iconUrl,statName,statValue, dimensions}) => {
  return (
    <div
      className={`h-[120px]  min-w-[221px] p-[20px_25px] rounded-[20px] flex flex-col`}
      style={{backgroundColor:bgColor}}
    >
      <img
        src={iconUrl}
        className={"object-contain self-end "}
        style={{height:dimensions.height, width:dimensions.width}}
        alt=""
      />
      <div className="flex flex-col gap-[5px]">
        <p className="text-[14px] leading-[17px]">{statName}</p>
        <p className="text-[24px] font-bold leading-[33px]">{statValue}</p>
      </div>
    </div>
  );
}
