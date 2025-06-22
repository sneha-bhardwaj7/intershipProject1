import React from "react";
import chipsImg from "../../../assets/chips1.png"; // Replace with actual image path
import Carousel from "../Carousel/Carousel"; // Adjust the path if different

const products = [
  { id: 1, img: chipsImg },
  { id: 2, img: chipsImg },
  { id: 3, img: chipsImg },
  { id: 4, img: chipsImg },
  { id: 5, img: chipsImg },
];

const WeeklyTopPurchases = () => {
  const duplicatedProducts = [...products, ...products]; // Smooth loop

  return (
    <div className="flex flex-col md:flex-row items-stretch w-full overflow-hidden">
      {/* Left Panel */}
      <div className="w-full h-120 md:w-[45%] min-w-[220px] bg-[#f9a23d] flex flex-col justify-center items-center text-center text-black font-bold text-3xl md:text-3xl py-10 rounded-br-[100px] rounded-tr-[100px]">
        <span>WEEKLY</span>
        <span>TOP</span>
        <span>PURCHASES</span>
      </div>

      {/* Carousel Section */}
      <div className="w-full md:w-[65%] bg-white">
        <Carousel products={duplicatedProducts} />
      </div>
    </div>
  );
};

export default WeeklyTopPurchases;
