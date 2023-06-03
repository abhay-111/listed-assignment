"use client";
import React from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Line,
  Tooltip,
  ReferenceLine,
  CartesianAxis,
  ResponsiveContainer,
} from "recharts";
export default function UserLineChart() {
  const data = [
    {
      name: "",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Week 1",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Week 2",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Week 3",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Week 4",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height={212}>
      <LineChart width={1000} height={250} data={data}>
        <XAxis
          interval={"preserveStartEnd"}
          axisLine={false}
          tickLine={false}
          stroke="#858585"
          dataKey="name"
        />
        <YAxis
          stroke="#858585"
          axisLine={false}
          padding={{ left: 10 }}
          tickLine={false}
        />
        {data.map((item, i) => (
          <ReferenceLine y={i * 2500} strokeWidth={1} stroke="#EAEAEA" />
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
