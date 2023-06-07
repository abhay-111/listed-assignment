"use client";
import React from "react";
import {
  LineChart,
  XAxis,
  YAxis,
  Line,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import { data } from "../../../helpers/dummy";
export default function UserLineChart() {
  return (
    <ResponsiveContainer
      className={"ml-[-25px] min-w-[300px] w-full"}
      width="100%"
      height={212}
    >
      <LineChart width="100%" height={250} data={data.lineChartData}>
        <XAxis
          style={{ fontSize: "14px" }}
          interval={"preserveStartEnd"}
          axisLine={false}
          tickLine={false}
          stroke="#858585"
          dataKey="name"
        />
        <YAxis
          style={{ fontSize: "14px" }}
          stroke="#858585"
          axisLine={false}
          padding={{ left: 10 }}
          tickLine={false}
        />
        {data.lineChartData.map((item, i) => (
          <ReferenceLine y={i * 200} key={i} strokeWidth={1} stroke="#EAEAEA" />
        ))}
        <Line
          type="monotone"
          dot={false}
          dataKey="pv"
          strokeWidth={3}
          stroke="#9BDD7C"
        />
        <Line
          type="monotone"
          dot={false}
          dataKey="uv"
          strokeWidth={3}
          stroke="#E9A0A0"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
