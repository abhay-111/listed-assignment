'use client'
import React from 'react'
import { PieChart,Pie,ResponsiveContainer,Cell } from 'recharts';
const data = [
  {
    name: "Group A",
    value: 400,
    fill: "#98D89E",
  },
  {
    name: "Group B",
    value: 300,
    fill: "#EE8484",
  },
  {
    name: "Group C",
    value: 500,
    fill: "#F6DC7D",
  },
];

export const CustomPieChart = () => {
  return (
    <ResponsiveContainer className="m-[10px]" width={145} height={145}>
      <PieChart
        margin={{ top: 5, bottom: 5, left: 5, right: 5 }}
        width={145}
        height={145}
      >
          <Pie data={data} cx="50%" cy="50%" outerRadius={70}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
