import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import ProductCard from "../components/common/ProductCard"
import { products } from "../data/products"
import bananapickles from "../assets/bananapickles.png"; // Replace with your correct path

import Footer from "../components/common/Footer";

export default function BananaChipsPage() {
  return (
    <div className="min-h-screen bg-white">
      

      {/* Hero Section */}
      <section className="bg-[#efdb56] min-h-[660px] w-full flex items-center">
  <div className="container mx-auto px-4">
    <div className="flex flex-col lg:flex-row items-center justify-between">
      
      {/* Left Content */}
      <div className="w-full lg:w-[55%] mb-10 lg:mb-0">
        <h1 className="text-[48px] lg:text-[100px] font-extrabold text-[#2d2d2d] leading-[1.2] mb-6">
          Banana <br /> Chips
        </h1>
        <p className="text-[20px] lg:text-[32px] text-gray-700 mb-8 leading-relaxed">
          Crispy, delicious banana chips <br />
          made from real bananas
        </p>
        <Link
          to="/category"
        className="inline-block border-3 border-gray-800 text-gray-800 text-2xl font-extrabold px-12 py-4 rounded-md transition hover:bg-gray-700 hover:text-white"
        >
          Shop Now
        </Link>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-[45%] flex justify-center lg:justify-end">
        <img
          src={bananapickles}
          alt="Banana chips and pickles"
          className="w-[500px] lg:w-[900px] h-auto object-contain"
        />
      </div>

    </div>
  </div>
</section>


      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">BANANA CHIPS</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.bananaChips.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  )
}
