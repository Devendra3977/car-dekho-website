import React from "react";
import { FaRegEnvelope, FaYoutube } from "react-icons/fa";

const MobileVideoSection = () => {
  return (
    <div className="bg-white rounded-lg shadow border border-gray-200 py-4 px-[5vw] mt-6">
      <h1 className="text-2xl font-semibold">Video for Land Rover Defender</h1>
      <div className="my-4 rounded-lg overflow-hidden border border-gray-200 rounded-lg">
        <iframe
          className="w-full h-[200px] sm:h-[300px] md:h-[400px] rounded"
          src="https://www.youtube.com/embed/U_E0UyqVCBQ?autoplay=1&mute=1"
          title="Land Rover Defender Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p className="py-5 px-4">The Defender Octa is everything you need, And MORE.</p>
        <div className="flex justify-between items-center py-3 px-4">
            <p className="text-sm text-gray-400">6.1K Views . 9 days ago</p>
            <p className="text-red-500 flex justify-center items-center gap-1"><FaYoutube  className="inline text-2xl" /> Subscribe</p>
        </div>
      </div>
    </div>
  );
};

export default MobileVideoSection;
