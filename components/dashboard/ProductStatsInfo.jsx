import React from 'react'
import { StatisticsCard } from '../ui/StatisticsCard';

export const ProductStatsInfo = () => {
    const userStats = [
      {
        iconUrl:
          "https://res.cloudinary.com/dqzjevzuo/image/upload/v1685772357/dzf9eded4n1fbvkyxgcx.png",
        statName: "Total Revenues",
        statValue: "$2,129,430",
        bgColor: "bg-[#DDEFE0]",
        dimensions:'h-[24px] w-[26px]'
      },
      {
        iconUrl:
          "https://res.cloudinary.com/dqzjevzuo/image/upload/v1685772357/qsjo2lvu6duko0kwyhn1.png",
        statName: "Total Transactions",
        statValue: "1,520",
        bgColor: "bg-[#F4ECDD]",
        dimensions:'h-[24px] w-[20px]'
      },
      {
        iconUrl:
          "https://res.cloudinary.com/dqzjevzuo/image/upload/v1685772357/vtyiizsirmhvsjikjiss.png",
        statName: "Total Likes",
        statValue: "9,721",
        bgColor: "bg-[#EFDADA]",
        dimensions:'w-[24px] h-[24px]'
      },
      {
        iconUrl:
          "https://res.cloudinary.com/dqzjevzuo/image/upload/v1685772357/gaxvkedl59p1vczjhuhw.png",
        statName: "Total Users",
        statValue: "892",
        bgColor: "bg-[#DEE0EF]",
        dimensions:'h-[24px] w-[36px]'
      },
    ];
  return (
    <div className="w-full flex gap-[36px] min-h-[120px] overflow-x-scroll no-scrollbar">
      {userStats.map((stat) => {
        return (
          <StatisticsCard
            statName={stat.statName}
            statValue={stat.statValue}
            bgColor={stat.bgColor}
            iconUrl={stat.iconUrl}
            dimensions={stat.dimensions}
          ></StatisticsCard>
        );
      })}
    </div>
  );
}
