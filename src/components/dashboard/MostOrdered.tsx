import { foodItems } from "@/data/dashboard";

export default function MostOrderedFood() {
  return (
    <div className="bg-white border-l border-t border-gray-200  p-6 w-full">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-lg font-medium text-gray-800 mb-2">
          Most Ordered Food
        </h2>
        <p className="text-sm text-gray-500">
          Adipiscing elit, sed do eiusmod tempor
        </p>
      </div>

      {/* Food Items List */}
      <div className="space-y-6">
        {foodItems.map((item, index) => (
          <div
            key={index}
            className="pb-6 border-b border-gray-100 last:border-0 last:pb-0"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className=" w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-2xl">
                  {item.emoji}
                </div>

                <div>
                  <h3 className="font-medium text-gray-600">{item.name}</h3>
                </div>
              </div>

              <div className="text-right">
                <div className="text-base font-medium text-gray-500">
                  {item.price}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
