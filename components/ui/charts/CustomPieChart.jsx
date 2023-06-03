'use client'
import React from 'react'
import { PieChart,Pie,ResponsiveContainer,Cell } from 'recharts';

import { data } from "../../../helpers/dummy";
export const CustomPieChart = () => {
  return (
    <ResponsiveContainer className="m-[10px]" width={145} height={145}>
      <PieChart
        margin={{ top: 5, bottom: 5, left: 5, right: 5 }}
        width={145}
        height={145}
      >
        <Pie data={data.pieChartData} cx="50%" cy="50%" outerRadius={70}>
          {data.pieChartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
