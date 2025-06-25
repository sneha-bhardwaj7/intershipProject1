"use client"

import { Link } from "react-router-dom"
import { Star, ShoppingCart, Heart } from "lucide-react"
import { useCart } from "../contexts/CartContext"
import { useWishlist } from "../contexts/WishlistContext"

export default function ProductCard({ id, name, description, price, originalPrice, image, rating = 4, reviews = 125 }) {
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < Math.round(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ))
  }

  const handleAddToCart = () => {
    const product = {
      id,
      name,
      description,
      price,
      originalPrice,
      image,
      rating,
      reviews,
    }
    addToCart(product)
  }

  const handleWishlistToggle = () => {
    const product = {
      id,
      name,
      description,
      price,
      originalPrice,
      image,
      rating,
      reviews,
    }

    if (isInWishlist(id)) {
      removeFromWishlist(id)
    } else {
      addToWishlist(product)
    }
  }

  return (
    <div
      className="bg-white rounded-xl overflow-hidden border border-orange-500 shadow-sm hover:shadow-md transition-all 
      w-[90%] max-w-[260px] mx-auto sm:w-full flex flex-col relative"
    >
      {/* Wishlist Button */}
      <button
        onClick={handleWishlistToggle}
        className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
      >
        <Heart
          className={`w-5 h-5 ${isInWishlist(id) ? "fill-red-500 text-red-500" : "text-gray-400 hover:text-red-500"}`}
        />
      </button>

      {/* Product Image */}
      <Link to={`/product/${id}`}>
        <div className="w-full h-60 p-7">
          <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover rounded-t-xl" />
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col px-4 py-3 flex-grow text-center">
        <Link to={`/product/${id}`}>
          <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500 mb-2">{description}</p>
        </Link>

        {/* Price */}
        <div className="mb-2">
          <span className="font-bold text-sm">100g = ₹{price}</span>
          {originalPrice && <span className="text-sm text-gray-400 line-through ml-2">₹{originalPrice}</span>}
        </div>

        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mb-3">
          {renderStars(rating)}
          <span className="text-sm text-gray-500 ml-1">
            {rating.toFixed(1)} {reviews} Reviews
          </span>
        </div>
      </div>

      {/* Add to Cart */}
      <button
        onClick={handleAddToCart}
        className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-b-xl font-semibold flex items-center justify-center gap-2 transition-colors"
      >
        <ShoppingCart className="w-5 h-5" />
        Add to cart
      </button>
    </div>
  )
}
