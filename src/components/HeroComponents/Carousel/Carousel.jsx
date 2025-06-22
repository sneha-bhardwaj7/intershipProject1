import React from "react";
import Marquee from "react-fast-marquee";
import bananaChips1 from "../../../assets/chips1.png"; // Replace with real paths
import pickleJar from "../../../assets/pickle1.png";
import bananaChips2 from "../../../assets/chips2.png";
import pickleJar2 from "../../../assets/pickles2.png";


const products = [
  {
    id: 1,
    name: "Product Name",
    benefits: "Product Benefits",
    price: "Rs150",
    image: bananaChips1,
  },
  {
    id: 2,
    name: "Product Name",
    benefits: "Product Benefits",
    price: "Rs150",
    image: pickleJar,
  },
  {
    id: 3,
    name: "Product Name",
    benefits: "Product Benefits",
    price: "Rs150",
    image: bananaChips2,
  },
  {
    id: 4,
    name: "Product Name",
    benefits: "Product Benefits",
    price: "Rs150",
    image: pickleJar2,
  },
  // You can duplicate or add more for demo
];

const BestSellers = () => {
  return (
    <div className="py-12 bg-white">

      <Marquee gradient={false} speed={60} pauseOnHover={true}>
        <div className="flex gap-6 px-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="border border-orange-400 w-[220px] h-[400px] rounded-md shadow-sm flex flex-col justify-between bg-white overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-[180px] w-full object-cover"
              />
              <div className="px-4 py-2 flex-1">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.benefits}</p>
                <select className="mt-2 border rounded px-2 py-1 text-sm w-full">
                  <option>100 g - {product.price}</option>
                </select>
                <div className="mt-2 flex items-center text-sm text-gray-700">
                  <span className="text-yellow-500 mr-1">★</span>
                  4.5
                  <span className="ml-2 text-blue-500">365 Reviews</span>
                </div>
              </div>
              <button className="bg-[#d26c08] text-white font-bold py-2 text-center w-full">
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default BestSellers;
