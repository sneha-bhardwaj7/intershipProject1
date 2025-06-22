import React from "react";
import jarsImg from "../../../assets/jars.png"; // Replace with actual path

const benefits = [
  { text: "Hygienically Handmade" },
  { text: "Premium Ingredients\nBalanced Spicing" },
  { text: "Sun-dried\n& Stored in Barnis" },
  { text: "No Chemicals/\nPreservatives" },
];

const HealthBenefits = () => {
  return (
    <div className="relative w-full bg-white">
      {/* Header */}
      <h2 className="text-center text-2xl font-bold text-black pt-8 pb-4">
        HEALTH BENEFITS
      </h2>

      {/* Wavy orange background with content */}
      <div className="relative z-0">
        {/* SVG Wave Background */}
        <svg
          viewBox="0 0 1440 320"
          className="absolute top-0 left-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#f9a23d"
            d="M0,160 C360,40 1080,280 1440,160 L1440,320 L0,320 Z"
          ></path>
        </svg>

        {/* Content above SVG wave */}
        <div className="relative z-10 px-6 pt-16 pb-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-black font-medium text-sm">
            {benefits.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-gray-300 rounded-full mb-3"></div>
                {item.text.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Pickle jars image */}
          <div className="flex justify-center mt-6">
            <img
              src={jarsImg}
              alt="Pickle Jars"
              className="max-h-44 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthBenefits;
