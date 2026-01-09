"use client";

interface RatingItem {
  name: string;
  percentage: number;
  color: string;
  borderColor: string;
}

const ratings: RatingItem[] = [
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

export default function Ratings() {
  return (
    <div className="bg-white border-t border-gray-200  p-6 w-full h-full">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-lg font-medium text-gray-800 mb-2">Your Rating</h2>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur
        </p>
      </div>

      {/* Data Representation */}
      <div className="relative h-64 flex items-center justify-center">
        {/* Food Taste */}
        <div className="absolute top-8 right-3 transform">
          <div className="relative">
            <div className="relative w-40 h-40">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="80"
                  cy="80"
                  r="79"
                  fill="none"
                  stroke={ratings[0].borderColor}
                  strokeWidth="2"
                  strokeDasharray="390"
                  strokeDashoffset={390 - (390 * 65) / 100}
                  strokeLinecap="round"
                />
              </svg>
              <div
                className={`absolute inset-1 rounded-full ${ratings[0].color} flex items-center justify-center`}
              >
                <div className="text-center">
                  <div className="text-2xl font-semibold text-white">
                    {ratings[0].percentage}%
                  </div>
                  <div className="text-xs text-white opacity-90 mt-1">
                    {ratings[0].name}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hygiene  */}
        <div className="absolute top-4 left-12 opacity-80">
          <div className="relative">
            <div className="relative w-24 h-24">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="48"
                  cy="48"
                  r="46"
                  fill="none"
                  stroke={ratings[1].borderColor}
                  strokeWidth="2"
                  strokeDasharray="289"
                  strokeDashoffset={289 - (289 * 65) / 100}
                  strokeLinecap="round"
                />
              </svg>
              <div
                className={`absolute inset-1 rounded-full ${ratings[1].color} flex items-center justify-center`}
              >
                <div className="text-center">
                  <div className="text-xl font-semibold text-white">
                    {ratings[1].percentage}%
                  </div>
                  <div className="text-xs text-white opacity-90 mt-1">
                    {ratings[1].name}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Packaging */}
        <div className="absolute bottom-6 left-4">
          <div className="relative">
            <div className="relative w-28 h-28">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="56"
                  cy="56"
                  r="54"
                  fill="none"
                  stroke={ratings[2].borderColor}
                  strokeWidth="2"
                  strokeDasharray="339"
                  strokeDashoffset={339 - (339 * 82) / 100}
                  strokeLinecap="round"
                />
              </svg>
              <div
                className={`absolute inset-1 rounded-full ${ratings[2].color} flex items-center justify-center`}
              >
                <div className="text-center">
                  <div className="text-xl font-semibold text-white">
                    {ratings[2].percentage}%
                  </div>
                  <div className="text-xs text-white opacity-90 mt-1">
                    {ratings[2].name}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
