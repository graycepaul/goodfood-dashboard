import DashboardHeader from "@/components/dashboard/DashboardHeader";
import RevenueCard from "@/components/dashboard/RevenueCard";
import OrderTimeChart from "@/components/dashboard/OrderTimeChart";
import OrderReport from "@/components/dashboard/OrderReport";
import Ratings from "@/components/dashboard/Ratings";
import MostOrderedFood from "@/components/dashboard/MostOrdered";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className=" py-4 md:py-6">
        <DashboardHeader />
      </div>

      <div className="px-4 md:px-6 lg:px-8 pb-6 md:pb-8">
        <div className="mb-4 md:mb-6">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">
            Dashboard
          </h1>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 xl:gap-0 mb-4 xl:mb-0">
          <div className="xl:col-span-2">
            <RevenueCard />
          </div>

          <div className="xl:col-span-1">
            <OrderTimeChart />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 xl:grid-cols-3 gap-4 xl:gap-0">
          <div className="md:col-span-2 xl:col-span-1 ">
            <Ratings />
          </div>

          <div className="md:col-span-3 xl:col-span-1">
            <MostOrderedFood />
          </div>

          <div className="md:col-span-5 xl:col-span-1">
            <OrderReport />
          </div>
        </div>
      </div>
    </div>
  );
}
