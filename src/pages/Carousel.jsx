import React from "react";
import Marquee from "react-fast-marquee";
import { bestsellers } from "../data/bestsellers";
import { ShoppingCart } from "lucide-react";

export default function BestSellersCarousel() {
  const ProductCard = ({ product }) => (
    <div
      key={product.id}
      className="w-[230px] min-w-[230px] h-[420px] border border-gray-300 rounded-xl shadow-md m-4 flex flex-col items-center justify-between overflow-hidden"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-[180px] object-cover"
      />

      <div className="p-4 w-full text-center">
        <h2 className="font-semibold text-lg text-gray-800">{product.name}</h2>
        <p className="text-sm text-gray-500">{product.description}</p>

        <div className="mt-2">
          <span className="text-sm font-semibold">
            100g = ₹{product.price}
          </span>
          <span className="text-sm text-gray-400 line-through ml-2">
            ₹{product.originalPrice}
          </span>
        </div>

        <div className="flex justify-center items-center mt-1 text-sm text-orange-500">
          ⭐ {product.rating}.0{" "}
          <span className="ml-1 text-gray-400">125 Reviews</span>
        </div>
      </div>

      <button className="w-full bg-[#d26c08] hover:bg-[#ad5a07] text-white font-bold py-2">
        <div className="flex items-center justify-center gap-2">
          <ShoppingCart size={18} /> Add to cart
        </div>
      </button>
    </div>
  );

  return (
    <div className="bg-white py-6">
      {bestsellers.length > 3 ? (
        <Marquee gradient={false} speed={40} pauseOnHover={true}>
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Marquee>
      ) : (
        <div className="flex justify-center flex-wrap">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
