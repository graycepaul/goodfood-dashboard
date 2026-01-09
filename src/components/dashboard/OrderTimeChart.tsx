"use client";

import { orderTimeData } from "@/data/dashboard";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function OrderTimeChart() {
  return (
    <div className="bg-white border-0 xl:border-l h-full border-gray-200  p-6 w-full rounded-lg xl:rounded-none">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg text-gray-800">Order Time</h2>
        <button className="text-[#5a6acf] hover:text-blue-700 text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors border border-[#5a6acf48] min-w-fit">
          View Report
        </button>
      </div>

      {/* Doughnut Pie Chart */}
      <div className="h-75 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={orderTimeData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
              stroke="white"
              strokeWidth={2}
            >
              {orderTimeData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  className="hover:opacity-80 transition-opacity"
                />
              ))}
            </Pie>
            <Tooltip
              labelFormatter={(label) => {
                const data = orderTimeData.find((item) => item.name === label);
                return data ? `${data.timeRange}` : label;
              }}
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "0.5rem",
                fontSize: "12px",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Chart Legend */}
      <div className="grid grid-cols-3 gap-4 pt-4 ">
        {orderTimeData.map((item, index) => (
          <div key={index} className="text-center">
            <div className="flex items-start justify-center gap-2 ">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: item.color }}
              />
            </div>

            <div className="flex flex-col items-center text-xs text-gray-800">
              <span className="text-xs font-medium text-gray-700">
                {item.name}
              </span>
              <p>{item.value}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
