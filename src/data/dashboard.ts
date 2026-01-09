import {
  ChartDataItem,
  FoodItem,
  OrderTimeData,
  RatingItem,
} from "@/types/type";
import {
  LayoutDashboard,
  ShoppingCart,
  Settings,
  CreditCard,
  User,
  HelpCircle,
  NotepadText,
  MessageCircleMore,
} from "lucide-react";

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
export const foodItems: FoodItem[] = [
  {
    name: "Fresh Salad Bowl",
    price: "IDR 45,000",
    img: "/assets/saladBowl.png",
  },
  {
    name: "Chicken Noodles",
    price: "IDR 75,000",
    img: "/assets/noodles.png",
  },
  {
    name: "Smoothie Fruits",
    price: "IDR 45,000",
    img: "/assets/saladBowl.png",
  },
  {
    name: "Hot Chicken Wings",
    price: "IDR 45,000",
    img: "/assets/wings.png",
  },
];
export const orderData = [
  { day: "Mon", lastWeek: 25, last6Days: 35 },
  { day: "Tue", lastWeek: 5, last6Days: 15 },
  { day: "Wed", lastWeek: 120, last6Days: 85 },
  { day: "Thu", lastWeek: 50, last6Days: 60 },
  { day: "Fri", lastWeek: 85, last6Days: 95 },
  { day: "Sat", lastWeek: 120, last6Days: 30 },
  { day: "Sun", lastWeek: 75, last6Days: 110 },
];
export const orderTimeData: OrderTimeData[] = [
  {
    name: "Afternoon",
    value: 40,
    color: "#5a6acf",
    timeRange: "1pm - 4pm",
    orders: 1890,
  },
  {
    name: "Evening",
    value: 32,
    color: "#5a6acfb2",
    timeRange: "6pm - 9pm",
    orders: 1512,
  },
  {
    name: "Morning",
    value: 28,
    color: "#6270cd69",
    timeRange: "9am - 12pm",
    orders: 1323,
  },
];
export const ratings: RatingItem[] = [
  {
    name: "Food Taste",
    percentage: 85,
    color: "bg-[#f9a644]",
    borderColor: "#f9a644",
  },
  {
    name: "Hygiene",
    percentage: 85,
    color: "bg-[#5a6acf]",
    borderColor: "#5a6acf",
  },
  {
    name: "Packaging",
    percentage: 92,
    color: "bg-[#43c5e1]",
    borderColor: "#43c5e1",
  },
];
export const menuItems = [
  {
    section: "MENU",
    items: [
      {
        id: "dashboard",
        label: "Dashboard",
        icon: LayoutDashboard,
        active: true,
      },
      {
        id: "food-order",
        label: "Food Order",
        icon: ShoppingCart,
        active: false,
      },
      {
        id: "manage-menu",
        label: "Manage Menu",
        icon: NotepadText,
        active: false,
      },
      {
        id: "customer-review",
        label: "Customer Review",
        icon: MessageCircleMore,
        active: false,
      },
    ],
  },
  {
    section: "OTHERS",
    items: [
      { id: "settings", label: "Settings", icon: Settings, active: true },
      { id: "payment", label: "Payment", icon: CreditCard, active: false },
      { id: "accounts", label: "Accounts", icon: User, active: false },
      { id: "help", label: "Help", icon: HelpCircle, active: false },
    ],
  },
];
