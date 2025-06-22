import React from "react";
import pickle1 from "../../../assets/pickle1.png";
import pickle2 from "../../../assets/pickle1.png";
import pickle3 from "../../../assets/pickle1.png"; // Use distinct images

const popularPicks = [
  { id: 1, image: pickle1, alt: "Red Chili Pickle" },
  { id: 2, image: pickle2, alt: "Sweet Mango Pickle" },
  { id: 3, image: pickle3, alt: "Lemon Pickle" },
];

const PopularPicks = () => {
  return (
    <div className="bg-[#F9B64E] py-12 px-4 rounded-2xl mx-4 md:mx-16 mt-16">
      <h2 className="text-3xl md:text-3xl font-bold text-center text-black mb-12">
        OUR POPULAR PICKS
      </h2>

      <div className="flex flex-wrap justify-center gap-19">
        {popularPicks.map((item) => (
          <div
            key={item.id}
            className="w-[320px] h-[390px] overflow-hidden shadow-lg rounded-tr-[100px] rounded-bl-[100px] bg-white"
          >
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPicks;
