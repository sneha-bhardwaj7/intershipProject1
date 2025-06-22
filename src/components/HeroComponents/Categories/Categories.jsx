import React from "react";
import bananaChips from "../../../assets/banana-chips.png";
import pickles from "../../../assets/pickles.png";

const Categories = () => {
  return (
    <div className="py-12 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">OUR CATEGORIES</h2>

      <div className="flex flex-wrap justify-center gap-30 px-4">
        {/* Banana Chips Card */}
        <div className="relative w-full sm:w-[400px] md:w-[450px] lg:w-[500px]">
          <img
            src={bananaChips}
            alt="Banana Chips"
            className="w-full h-[300px] object-cover rounded-md shadow-md"
          />
          <div className="absolute bottom-[-35px] left-1/2 transform -translate-x-1/2 bg-white px-10 py-6 min-w-[200px] rounded-md shadow-md font-bold text-xl text-black text-center">
            <p className="whitespace-nowrap">BANANA CHIPS</p>
          </div>
        </div>

        {/* Pickles Card */}
        <div className="relative w-full sm:w-[400px] md:w-[450px] lg:w-[500px]">
          <img
            src={pickles}
            alt="Pickles"
            className="w-full h-[300px] object-cover rounded-md shadow-md"
          />
          <div className="absolute bottom-[-35px] left-1/2 transform -translate-x-1/2 bg-white px-10 py-6 min-w-[200px] rounded-md shadow-md font-bold text-xl text-black text-center">
            <p className="whitespace-nowrap">PICKLES</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
