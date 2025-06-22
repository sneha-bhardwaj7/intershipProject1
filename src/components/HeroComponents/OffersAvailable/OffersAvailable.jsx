import React from "react";
import bananaChips from "../../../assets/banana-chips.png"; // Replace with actual image path
import pickleJar from "../../../assets/pickles3.png";   // Replace with actual image path

const OffersAvailable = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-12">
      
      {/* Top Section with Images & Text */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mb-12 gap-6">
        
        {/* Left Image */}
        <div className="w-96 h-72 rounded-lg overflow-hidden shadow-md">
          <img
            src={bananaChips}
            alt="Banana Chips"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Center Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold leading-tight">
            OFFERS<br />AVAILABLE
          </h2>
        </div>

        {/* Right Image */}
        <div className="w-96 h-72 rounded-lg overflow-hidden shadow-md">
          <img
            src={pickleJar}
            alt="Pickle Jar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Bottom Box with Logo */}
      <div className="w-full md:w-[90%] h-50 border border-orange-400 rounded-lg flex items-center justify-center">

       
      </div>
    </div>
  );
};

export default OffersAvailable;
