"use client"

import { Search, User, ShoppingCart } from "lucide-react"

export default function Header({ onHomeClick }) {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <button onClick={onHomeClick} className="text-lg font-medium text-gray-900 hover:text-gray-700">
              Home
            </button>
            <button className="text-lg font-medium text-gray-600 hover:text-gray-900">Category</button>
            <button className="text-lg font-medium text-gray-600 hover:text-gray-900">Blog</button>
          </div>
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900" />
            <User className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900" />
            <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900" />
          </div>
        </div>
      </div>
    </header>
  )
}
