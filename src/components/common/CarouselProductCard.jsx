"use client"

import { Link } from "react-router-dom"
import { Star, ShoppingCart, Heart } from "lucide-react"
import { useCart } from "../contexts/CartContext"
import { useWishlist } from "../contexts/WishlistContext"

export default function CarouselProductCard({ product }) {
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()

  const handleAddToCart = () => {
    const productData = {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      rating: product.rating || 4,
      reviews: 125,
    }
    addToCart(productData)
  }

  const handleWishlistToggle = () => {
    const productData = {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      rating: product.rating || 4,
      reviews: 125,
    }

    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(productData)
    }
  }

  return (
    <div className="w-[230px] min-w-[230px] h-[420px] border border-gray-300 rounded-xl shadow-md m-4 flex flex-col items-center justify-between overflow-hidden relative">
      {/* Wishlist Button */}
      <button
        onClick={handleWishlistToggle}
        className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
      >
        <Heart
          className={`w-4 h-4 ${
            isInWishlist(product.id) ? "fill-red-500 text-red-500" : "text-gray-400 hover:text-red-500"
          }`}
        />
      </button>

      {/* Product Image */}
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-[180px] object-cover cursor-pointer hover:opacity-90 transition-opacity"
        />
      </Link>

      <div className="p-4 w-full text-center flex-1 flex flex-col justify-between">
        <div>
          <Link to={`/product/${product.id}`}>
            <h2 className="font-semibold text-lg text-gray-800 hover:text-orange-600 transition-colors cursor-pointer">
              {product.name}
            </h2>
          </Link>
          <p className="text-sm text-gray-500 mt-1">{product.description}</p>

          <div className="mt-2">
            <span className="text-sm font-semibold">100g = ₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through ml-2">₹{product.originalPrice}</span>
            )}
          </div>

          <div className="flex justify-center items-center mt-1 text-sm text-orange-500">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="ml-1">{product.rating || 4}.0</span>
            <span className="ml-1 text-gray-400">125 Reviews</span>
          </div>
        </div>
      </div>

      <button
        onClick={handleAddToCart}
        className="w-full bg-[#d26c08] hover:bg-[#ad5a07] text-white font-bold py-2 transition-colors"
      >
        <div className="flex items-center justify-center gap-2">
          <ShoppingCart size={18} /> Add to cart
        </div>
      </button>
    </div>
  )
}
