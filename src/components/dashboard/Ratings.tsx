"use client";

import Image from "next/image";

export default function Ratings() {
  return (
    <div className="bg-white rounded-lg xl:rounded-none border-0 xl:border-t border-gray-200  p-6 w-full h-full">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-lg  text-gray-800 mb-2">Your Rating</h2>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur
        </p>
      </div>

      {/* Data Representation */}
      <div className="relative h-64 flex items-center justify-center">
        <Image
          alt={"Your Rating"}
          src={"/assets/dataSet.png"}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
