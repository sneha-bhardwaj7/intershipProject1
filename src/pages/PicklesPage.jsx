import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import ProductCard from "../components/common/ProductCard"
import { products } from "../data/products"
import pickles5 from "../assets/pickles5.png"; // Replace with your correct path
import Footer from "../components/common/Footer";


export default function PicklesPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
           <section className="bg-[#e4c283bb] w-full py-20 px-4 lg:px-30">
  <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-y-12 lg:gap-y-0">
    
    {/* Left Content */}
    <div className="w-full lg:w-[55%] text-center lg:text-left">
      <h1 className="text-[36px] sm:text-[48px] lg:text-[100px] font-extrabold text-[#2d2d2d] leading-[1.2] mb-6">
        Pickles
      </h1>
      <p className="text-[18px] sm:text-[20px] lg:text-[32px] text-gray-700 mb-8 leading-relaxed">
        Tangy and spicy pickles, <br />
        perfect to complement your meals
      </p>
      <Link
        to="/category"
        className="inline-block border-3 border-gray-800 text-gray-800 text-lg sm:text-xl lg:text-2xl font-extrabold px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-md transition hover:bg-gray-700 hover:text-white"
      >
        Shop Now
      </Link>
    </div>

    {/* Right Image */}
    <div className="w-full lg:w-[45%] flex justify-center lg:justify-end">
      <img
        src={pickles5}
        alt="Banana chips and pickles"
        className="w-[280px] sm:w-[400px] lg:w-[500px] h-auto max-h-[500px] object-contain"
      />
    </div>

  </div>
</section>
      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">PICKLES</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.pickles.map((product) => (
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
