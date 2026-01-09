import { ChartDataItem } from "@/types/type";

export const chartData: ChartDataItem[] = [
  { day: "Mon", lastWeek: 45, last6Days: 65 },
  { day: "Tue", lastWeek: 35, last6Days: 55 },
  { day: "Wed", lastWeek: 55, last6Days: 75 },
  { day: "Thu", lastWeek: 40, last6Days: 60 },
  { day: "Fri", lastWeek: 65, last6Days: 85 },
  { day: "Sat", lastWeek: 50, last6Days: 70 },
  { day: "Sun", lastWeek: 70, last6Days: 90 },
];
export const timeData = [
  {
    period: "Afternoon",
    time: "1pm - 4pm",
    orders: "1,890 orders",
    percentage: 40,
    color: "bg-blue-500",
  },
  {
    period: "Evening",
    time: "6pm - 9pm",
    orders: "1,512 orders",
    percentage: 32,
    color: "bg-purple-500",
  },
  {
    period: "Morning",
    time: "9am - 12pm",
    orders: "1,323 orders",
    percentage: 28,
    color: "bg-yellow-500",
  },
];
