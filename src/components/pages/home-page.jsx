"use client"

import Header from "../HeroComponents/common/header"
import { BananaChipsCategoryImage, PicklesCategoryImage } from "../images/hero-images"

export default function HomePage({ onCategoryClick, onHomeClick }) {
  return (
    <div className="min-h-screen bg-white">
      <Header onHomeClick={onHomeClick} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-16">OUR CATEGORIES</h1>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="relative group cursor-pointer" onClick={() => onCategoryClick("banana-chips")}>
            <div className="aspect-[4/3] bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl overflow-hidden">
              <BananaChipsCategoryImage alt="Banana Chips Category" />
            </div>
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-white px-8 py-4 rounded-lg shadow-lg border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 text-center">
                  BANANA
                  <br />
                  CHIPS
                </h2>
              </div>
            </div>
          </div>

          <div className="relative group cursor-pointer" onClick={() => onCategoryClick("pickles")}>
            <div className="aspect-[4/3] bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl overflow-hidden">
              <PicklesCategoryImage alt="Pickles Category" />
            </div>
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-white px-8 py-4 rounded-lg shadow-lg border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 text-center">PICKLES</h2>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
