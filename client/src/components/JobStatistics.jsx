import React from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { DATA } from "../lib/consts/dummy/dummy";

export default function JobStatistics() {
  return (
    <div className="h-[22rem] bg-white p-4 rounded-md border border-gray flex flex-col flex-1 py-5">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={DATA}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical="false" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="jobApplied"
            name="Jobs Applied"
            stackId="a"
            fill="#0E64B4"
          />
          <Bar
            dataKey="jobViews"
            name="Jobs Viewed"
            stackId="a"
            fill="#82ca9d"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
