import { Link } from "react-router-dom"
import { categories } from "../data/categories"
import bananapickles from "../assets/bananapickles.png" // Replace with your correct path
import BestSellersCarousel from "./BestSellersCarousel"
import Carousel from "./Carousel"
import { products } from "../data/products"
import groupPickles from "../assets/groupPickles.png" // Replace with your correct path
import Footer from "../components/common/Footer"
import curveBg from "../assets/curveShape.png"

export default function HomePage() {
  return (
    
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#f3eee5] w-full py-20">
        <div className="max-w-[1440px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="w-full lg:w-[55%] mb-10 lg:mb-0">
            <h1 className="text-[48px] lg:text-[100px] font-extrabold text-[#2d2d2d] leading-[1.2] mb-6">
              Banana Chips <br /> & Pickles
            </h1>
            <p className="text-[20px] lg:text-[32px] text-gray-700 mb-8 leading-relaxed">
              Explore our selection of <br />
              banana chips and <br />
              flavorful pickles
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
              src={bananapickles || "/placeholder.svg"}
              alt="Banana chips and pickles"
              className="w-[500px] lg:w-[900px] h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">OUR CATEGORIES</h2>
          <div className="grid md:grid-cols-2 gap-26 max-w-5xl mx-auto">
            {categories.map((category) => (
              <Link key={category.id} to={category.href} className="group flex flex-col items-center">
                {/* Image with button overlapping 50/50 */}
                <div className="relative w-full h-[300px]">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[70%] bg-white text-black text-center font-bold text-2xl py-8 rounded-lg shadow-md border border-gray-300 leading-snug tracking-wide">
                    {category.name}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">BESTSELLERS</h2>
          <BestSellersCarousel />
        </div>
      </section>

      {/* Weekly Top Purchases Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-stretch gap-6 px-0 md:px-0">
          {/* Left Heading Panel */}
          <div className="w-full md:w-[45%] min-w-[220px] h-[500px] bg-[#f9a23d] flex flex-col justify-center items-center text-center text-black font-extrabold text-3xl md:text-4xl py-10 rounded-tr-[100px] rounded-br-[100px]">
            <span>WEEKLY</span>
            <span>TOP</span>
            <span>PURCHASES</span>
          </div>

          {/* Product Carousel */}
          <div className="w-full md:w-[65%]">
            <Carousel heading="WEEKLY TOP PURCHASES" />
          </div>
        </div>
      </section>

     

      {/* Our Popular Picks Section */}
      <section className="py-16 bg-[#FDBA4F] rounded-4xl mx-4 md:mx-20">
        <div className="max-w-[1440px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 uppercase tracking-wide">
            OUR POPULAR PICKS
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-16">
            {products.picks.map((item) => (
              <div key={item.id} className="flex flex-col items-center max-w-[290px] text-center">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-auto shadow-lg object-cover mb-4 rounded-tr-[80px] rounded-bl-[80px]"
                />
                <span className="text-lg font-semibold text-gray-800">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">NEW ARRIVALS</h2>
          <BestSellersCarousel />
        </div>
      </section>

      {/* FECTURED PRODUCTS*/}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">FECTURED PRODUCTS</h2>
          <BestSellersCarousel />
        </div>
      </section>

      {/* OFFERS AVAILABLE*/}
      <section className="py-16 bg-white mx-4 md:mx-20">
        <div className="max-w-[1440px] mx-auto px-4">
          {/* Top Row with Images and Text */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-20 mb-12">
            {/* Left Image */}
            <img
              src={products.bananaChips[2].image || "/placeholder.svg"}
              alt="Offer 1"
              className="w-[360px] h-[240px]  object-cover rounded-lg"
            />

            {/* Center Text */}
            <div className="text-center">
              <h2 className="text-5xl font-medium text-black leading-tight">OFFERS</h2>
              <h2 className="text-5xl font-medium text-black leading-tight">AVAILABLE</h2>
            </div>

            {/* Right Image */}
            <img
              src={products.pickles[2].image || "/placeholder.svg"}
              alt="Offer 2"
              className="w-[360px] h-[240px] object-cover rounded-lg"
            />
          </div>

          {/* Bottom Card with Center Logo */}
          <div className="border border-orange-500 rounded-xl py-8 px-4 flex justify-center items-center w-full max-w-5/6 mx-auto h-40 md:h-48"></div>
        </div>
      </section>

      {/* BEST SELLERS */}

      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-stretch gap-6 px-0 md:px-0">
          {/* Product Carousel */}
          <div className="w-full md:w-[65%]">
            <Carousel heading="WEEKLY TOP PURCHASES" />
          </div>
          {/* Left Heading Panel */}
          <div className="w-full md:w-[45%] min-w-[220px] h-[500px] bg-[#f9a23d] flex flex-col justify-center items-center text-center text-black font-extrabold text-3xl md:text-4xl py-10 rounded-tl-[100px] rounded-bl-[100px]">
            <span>HIGHEST</span>
            <span>SOLD</span>
          </div>

          
        </div>
      </section>


<h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-8 tracking-wide pt-8 relative z-10">
    HEALTH BENEFITS
  </h2>
    <section className="relative overflow-hidden bg-white py-4">
  {/* Section Heading */}
  

  {/* Curvy Background Image */}
  <div className="absolute inset-0 z-0">
    <img src={curveBg} alt="Curvy background" className="w-full h-full object-cover"
     />
  </div>

  {/* Circles with Icons & Text */}
  <div className="relative z-10 max-w-[1200px] mx-auto px-4 py-12">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 place-items-center">
      {/* 1. Hygienically Handmade */}
      <div className="flex flex-col items-center text-center">
        <img src={groupPickles} className="w-20 md:w-24 mb-2" alt="Hygienic" />
        <p className="text-sm md:text-base font-semibold text-black">
          Hygienically<br />Handmade
        </p>
      </div>

      {/* 2. Premium Ingredients */}
      <div className="flex flex-col items-center text-center">
        <img src={groupPickles} className="w-20 md:w-24 mb-2" alt="Premium Ingredients" />
        <p className="text-sm md:text-base font-semibold text-black">
          Premium<br />Ingredients<br />Balanced Spicing
        </p>
      </div>

      {/* 3. Sun-dried & Stored */}
      <div className="flex flex-col items-center text-center">
        <img src={groupPickles} className="w-20 md:w-24 mb-2" alt="Sun-dried" />
        <p className="text-sm md:text-base font-semibold text-black">
          Sun-dried<br />& Stored in Barnis
        </p>
      </div>

      {/* 4. No Chemicals */}
      <div className="flex flex-col items-center text-center">
        <img src={groupPickles} className="w-20 md:w-24 mb-2" alt="No Preservatives" />
        <p className="text-sm md:text-base font-semibold text-black">
          No<br />Chemicals/<br />Preservatives
        </p>
      </div>
    </div>

    {/* Pickle Group Image */}
    <div className="flex justify-center pt-16">
      <img
        src={groupPickles}
        alt="Pickles Group"
        className="h-40 md:h-48 object-contain"
      />
    </div>
  </div>
</section>



{/*Testimonial  */}

     <section className="py-16 bg-white">
  <div className="max-w-[1140px] mx-auto px-4">
    <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16 tracking-wide">
      TESTIMONIALS
    </h2>

    <div className="flex flex-col lg:flex-row gap-16 lg:gap-28 items-start">
      {/* Left Side - Main Testimonial */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-20">
        <div className="relative bg-gray-200 rounded-3xl p-6 sm:p-8 h-72 sm:h-80">
          {/* Profile Circle */}
          <div className="absolute -top-6 sm:-top-14 left-8 sm:left-10 w-28 h-28 sm:w-28 sm:h-28 bg-gray-600 rounded-full" />
        </div>
      </div>

      {/* Right Side - Testimonial Grid */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-3 sm:gap-4">
              {products.Testimonial.slice(0, 9).map((product, index) => (
                <div
                  key={product.id}
                  className="aspect-square bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center"
                >
                  {index === 4 ? (
                    <div className="text-center p-2">
                      <p className="font-bold text-sl sm:text-sl leading-tight">WHAT OUR</p>
                      <p className="font-bold text-sl sm:text-sl leading-tight">CLIENT SAY</p>
                    </div>
                  ) : (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

              </div>
            </div>
          </section>

    </div>
  )
}
