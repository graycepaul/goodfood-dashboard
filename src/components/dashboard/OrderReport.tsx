"use client";

import { orderData } from "@/data/dashboard";
import { TrendingDown } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function OrderReport() {
  return (
    <div className="bg-white rounded-lg xl:rounded-none border-0 xl:border-l xl:border-t border-gray-200 p-6 w-full">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-lg text-gray-800 mb-2">Order</h2>
        </div>
        <button className="text-[#5a6acf] hover:text-blue-700 text-sm font-medium px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors border border-[#5a6acf48]">
          View Report
        </button>
      </div>

      {/* Revenue Amount */}
      <div className="mb-8">
        <div className="flex items-baseline gap-3 flex-col">
          <div className="flex items-center gap-2">
            <TrendingDown className="h-4 w-4 text-red-600" />
            <p className="text-gray-500 text-sm">
              <span className="text-sm font-medium text-red-600 px-2 py-1 rounded-full">
                +2.1%
              </span>
              vs last week
            </p>
          </div>
          <p className="text-gray-500 text-sm">Sales from 1-12 Dec, 2020</p>
        </div>
      </div>

      {/* Line Graph */}
      <div className="h-64 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={orderData}
            margin={{ top: 10, right: 10, left: -25, bottom: 10 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f3f4f6"
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#6b7280" }}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#6b7280" }}
              domain={[0, 120]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "6px",
                fontSize: "11px",
                padding: "8px",
              }}
              labelFormatter={(label) => `Day: ${label}`}
            />
            <Line
              type="linear"
              dataKey="lastWeek"
              stroke="#d1d5db"
              strokeWidth={1.5}
              dot={false}
              strokeDasharray="5 5"
              connectNulls={true}
            />
            <Line
              type="linear"
              dataKey="last6Days"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={false}
              connectNulls={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Chart Legend */}
      <div className="flex items-center gap-6 pt-4">
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
