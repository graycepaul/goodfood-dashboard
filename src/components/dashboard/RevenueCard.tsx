"use client";

import { chartData } from "@/data/dashboard";
import { TrendingUp } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function RevenueCard() {
  return (
    <div className="bg-white  p-6 w-full rounded-lg xl:rounded-none">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-lg  text-gray-600">Revenue</h2>
        </div>
        <button className=" text-[#5a6acf] hover:text-blue-700 text-sm font-medium px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors border border-[#5a6acf48]">
          View Report
        </button>
      </div>

      {/* Revenue Amount */}
      <div className="mb-8 ">
        <div className="flex items-baseline gap-3 flex-col">
          <p className="text-3xl md:text-4xl font-bold text-gray-900">
            IDR 7.852.000
          </p>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-green-600" />
            <p className="text-gray-500 text-sm">
              <span className="text-sm font-medium text-green-600 px-2 py-1 rounded-full">
                +2.1%
              </span>
              vs last week
            </p>
          </div>
          <p className="text-gray-500 text-sm">Sales from 1-12 Dec, 2020</p>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="h-52 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 10, right: 10, left: -20, bottom: 10 }}
            barSize={12}
            barGap={4}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f0f0f0"
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6b7280" }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6b7280" }}
              dx={-10}
            />
            <Tooltip
              cursor={{ fill: "transparent" }}
              labelFormatter={(label) => `Day: ${label}`}
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "0.5rem",
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
              }}
            />
            <Bar
              dataKey="last6Days"
              name="Last 6 days"
              fill="#3b82f6"
              radius={[2, 2, 0, 0]}
            />
            <Bar
              dataKey="lastWeek"
              name="Last Week"
              fill="#d1d5db"
              radius={[2, 2, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Chart Legend */}
      <div className="flex items-center gap-6 pt-4 ">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-blue-500 rounded-sm"></div>
          <span className="text-xs text-gray-700">Last 6 days</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-gray-300 rounded-sm"></div>
          <span className="text-xs text-gray-700">Last Week</span>
        </div>
      </div>
    </div>
  );
}
