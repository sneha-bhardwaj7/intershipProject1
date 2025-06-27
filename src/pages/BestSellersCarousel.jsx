import React, { useRef } from "react";
import { bestsellers } from "../data/bestsellers";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";

export default function BestSellersCarousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 260; // Approx card width + margin
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  const ProductCard = ({ product }) => (
    <div
      className="w-[230px] min-w-[230px] h-[420px] border border-gray-300 rounded-xl shadow-md mx-4 flex flex-col items-center justify-between overflow-hidden"
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
          <span className="text-sm font-semibold">100g = ₹{product.price}</span>
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
    <div className="relative bg-white py-10 px-6">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Scrollable Product List */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar scroll-smooth px-8"
      >
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-4 top-1/2  transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
