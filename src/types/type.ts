export interface ChartDataItem {
  day: string;
  lastWeek: number;
  last6Days: number;
}
export interface FoodItem {
  name: string;
  price: string;
  emoji: string;
}
export interface OrderTimeData {
  name: string;
  value: number;
  color: string;
  timeRange: string;
  orders: number;
  [key: string]: string | number;
}
export interface RatingItem {
  name: string;
  percentage: number;
  color: string;
  borderColor: string;
}
