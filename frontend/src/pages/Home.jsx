import React from "react";

const Home = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-black to-blue-800 flex flex-col justify-center items-center">
      {/* Placeholder for Image */}
      <div className="w-52 h-52 mb-5">
        <img src="pxl.jpg" alt="Calendar Icon" className="w-full h-full" />
      </div>

      {/* Title */}
      <h1 className="text-white text-2xl font-bold mb-8">APE CALENDAR</h1>

      {/* Buttons */}
      <div className="flex flex-col gap-5">
        <button className="w-[655px] h-[75px] text-lg font-bold text-black bg-white rounded-tl-md cursor-pointer">
          GET STARTED
        </button>
        <button className="w-[655px] h-[75px] text-lg font-bold text-white bg-black rounded-tl-md cursor-pointer">
          I ALREADY HAVE AN ACCOUNT
        </button>
      </div>
    </div>
  );
};

export default Home;
