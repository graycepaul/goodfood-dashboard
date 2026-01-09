import { Bell, Search, ChevronDown } from "lucide-react";

export default function DashboardHeader() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 border-b border-gray-200">
      {/* Search Input */}
      <div className="relative w-64 xl:w-full max-w-md pb-1">
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="w-64 xl:w-full pl-4 pr-4 py-2.5 bg-gray-100  rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Burger Dropdown */}
        <div className="flex items-center space-x-2">
          <span className="text-lg bg-orange-200 rounded-full p-1 px-2">
            🍔
          </span>
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2.5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[180px]">
              <option>Delicious Burger</option>
              <option>French Fries</option>
              <option>Pizza</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Notification Bell */}
        <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <Bell className="h-5 w-5 text-gray-600" />
          <span className="absolute top-1.5 right-1.9 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
      </div>
    </div>
  );
}
