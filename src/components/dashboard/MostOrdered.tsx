import { foodItems } from "@/data/dashboard";
import Image from "next/image";

export default function MostOrderedFood() {
  return (
    <div className="bg-white rounded-lg xl:rounded-none border-0 border-l xl:border-t border-gray-200  p-6 w-full h-full">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-lg text-gray-800 mb-2">Most Ordered Food</h2>
        <p className="text-sm text-gray-500">
          Adipiscing elit, sed do eiusmod tempor
        </p>
      </div>

      {/* Food Items List */}
      <div className="space-y-6">
        {foodItems.map((item, index) => (
          <div
            key={index}
            className="pb-6 border-b border-gray-100 last:border-0 last:pb-0 w-full"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 w-full">
                <Image
                  alt={item.name}
                  src={item.img}
                  width={40}
                  height={40}
                  className="w-12 h-12 mt-4"
                />
                <div>
                  <h3 className="font-medium text-gray-600">{item.name}</h3>
                </div>
              </div>

              <div className="text-right min-w-fit">
                <div className="text-base text-gray-500">{item.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
