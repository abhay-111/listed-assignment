import React from 'react'
import { StatisticsCard } from '../ui/StatisticsCard';

export const UserStats = () => {
    const userStats = [
      {
        iconUrl: "",
        statName: "Total Revenues",
        statValue: "$2,129,430",
        bgColor: "bg-[#DDEFE0]",
      },
      {
        iconUrl: "",
        statName: "Total Revenues",
        statValue: "$2,129,430",
        bgColor: "bg-[#DDEFE0]",
      },
      {
        iconUrl: "",
        statName: "Total Revenues",
        statValue: "$2,129,430",
        bgColor: "bg-[#DDEFE0]",
      },
      {
        iconUrl: "",
        statName: "Total Revenues",
        statValue: "$2,129,430",
        bgColor: "bg-[#DDEFE0]",
      },
    ];
  return (
    <div className='w-full flex gap-[36px]'>
        {
            userStats.map((stat)=>{
                return <StatisticsCard statName={stat.statName} statValue={stat.statValue} bgColor={stat.bgColor} iconUrl={stat.iconUrl}></StatisticsCard>
            })
        }
    </div>
  )
}
