import React from "react";
import bananaImage from "../../../assets/banana.png";

const BananaAndPickles = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#b8a47e9e] px-6 py-20">
      <div className="max-w-[1300px] w-full h-[490px] flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        
        {/* Left Text Content */}
        <div className="flex-1 text-left">
                <h1 className="text-[#322424] text-[700px] sm:text-[70px] font-bold leading-tight mb-4">
                    Banana Chips <br /> & Pickles
                </h1>
                <p className="text-[30px] text-[#3b2f2f] leading-snug mb-6">
                    Explore our selection of <br />
                    banana chips and <br />
                    flavorful pickles
                </p>
                <button className="mt-2 px-12 py-4 border border-black text-[#3b2f2f] text-[30px] rounded-md font-medium hover:bg-black hover:text-white transition">
                    Shop Now
                </button>
                </div>


        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={bananaImage}
            alt="Banana Chips and Pickles"
            className="w-[700px] sm:w-[750px] md:w-[800px] lg:w-[850px] xl:w-[900px] h-auto object-contain max-w-none"
          />
        </div>
      </div>
    </div>
  );
};

export default BananaAndPickles;

