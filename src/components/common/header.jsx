"use client"

import { Link } from "react-router-dom"
import { useLocation, useNavigate } from "react-router-dom"
import { Search, User, ShoppingCart, Menu, Heart } from "lucide-react"
import { useState } from "react"
import { useCart } from "../contexts/CartContext"
import { useWishlist } from "../contexts/WishlistContext"

export default function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { state: cartState } = useCart()
  const { state: wishlistState } = useWishlist()

  const isActive = (path) => {
    return location.pathname === path
  }

  const handleCartClick = () => {
    navigate("/cart")
  }

  const handleWishlistClick = () => {
    navigate("/wishlist")
  }

  return (
    <header className="bg-white border-b border-orange-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors">
              Delicious Treats
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isActive("/")
                  ? "text-orange-600 border-b-2 border-orange-600 pb-1"
                  : "text-gray-800 hover:text-orange-600"
              }`}
            >
              Home
            </Link>
            <Link
              to="/category"
              className={`font-medium transition-colors ${
                isActive("/category")
                  ? "text-orange-600 border-b-2 border-orange-600 pb-1"
                  : "text-gray-800 hover:text-orange-600"
              }`}
            >
              Category
            </Link>
            <Link
              to="/blog"
              className={`font-medium transition-colors ${
                isActive("/blog")
                  ? "text-orange-600 border-b-2 border-orange-600 pb-1"
                  : "text-gray-800 hover:text-orange-600"
              }`}
            >
              Blog
            </Link>
          </nav>

          {/* Search and Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative hidden lg:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="search"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Mobile Search Icon */}
            <button className="lg:hidden p-2 text-gray-600 hover:text-orange-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>

            {/* User Icon */}
            <button className="p-2 text-gray-600 hover:text-orange-600 transition-colors">
              <User className="w-5 h-5" />
            </button>

            {/* Wishlist Icon */}
            <button
              onClick={handleWishlistClick}
              className="p-2 text-gray-600 hover:text-orange-600 transition-colors relative"
            >
              <Heart className="w-5 h-5" />
              {/* Wishlist Badge */}
              {wishlistState.totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistState.totalItems}
                </span>
              )}
            </button>

            {/* Cart Icon */}
            <button
              onClick={handleCartClick}
              className="p-2 text-gray-600 hover:text-orange-600 transition-colors relative"
            >
              <ShoppingCart className="w-5 h-5" />
              {/* Cart Badge */}
              {cartState.totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartState.totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-orange-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-orange-200">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`font-medium transition-colors ${
                  isActive("/") ? "text-orange-600" : "text-gray-800 hover:text-orange-600"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/category"
                className={`font-medium transition-colors ${
                  isActive("/category") ? "text-orange-600" : "text-gray-800 hover:text-orange-600"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Category
              </Link>
              <Link
                to="/blog"
                className={`font-medium transition-colors ${
                  isActive("/blog") ? "text-orange-600" : "text-gray-800 hover:text-orange-600"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/wishlist"
                className={`font-medium transition-colors ${
                  isActive("/wishlist") ? "text-orange-600" : "text-gray-800 hover:text-orange-600"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Wishlist ({wishlistState.totalItems})
              </Link>
              <Link
                to="/cart"
                className={`font-medium transition-colors ${
                  isActive("/cart") ? "text-orange-600" : "text-gray-800 hover:text-orange-600"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Cart ({cartState.totalItems})
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
