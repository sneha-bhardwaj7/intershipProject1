"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, Star, ShoppingCart } from "lucide-react"
import { useCart } from "../contexts/cart-context"
import { useWishlist } from "../contexts/wishlist-context"

export default function ProductCard({ product, onProductClick }) {
  const { dispatch: cartDispatch } = useCart()
  const { state: wishlistState, dispatch: wishlistDispatch } = useWishlist()
  const [isAddingToCart, setIsAddingToCart] = useState(false)

  const isInWishlist = wishlistState.items.some((item) => item.id === product.id)

  const handleAddToCart = (e) => {
    e.stopPropagation()
    setIsAddingToCart(true)
    cartDispatch({
      type: "ADD_TO_CART",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      },
    })
    setTimeout(() => setIsAddingToCart(false), 1000)
  }

  const handleWishlistToggle = (e) => {
    e.stopPropagation()
    if (isInWishlist) {
      wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: product.id })
    } else {
      wishlistDispatch({
        type: "ADD_TO_WISHLIST",
        payload: {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
        },
      })
    }
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
      />
    ))
  }

  return (
    <div
      className="w-full max-w-[280px] h-[420px] cursor-pointer hover:shadow-lg transition-shadow duration-200 border border-orange-200 rounded-xl overflow-hidden bg-white"
      onClick={() => onProductClick(product)}
    >
      <div className="p-0 h-full flex flex-col">
        {/* Image Container */}
        <div className="relative h-48 bg-gray-50">
          <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          {/* Wishlist Button */}
          <button
            className={`absolute top-2 right-2 h-8 w-8 rounded-full flex items-center justify-center transition-colors ${
              isInWishlist
                ? "bg-red-50 text-red-500 hover:bg-red-100"
                : "bg-white/80 text-gray-400 hover:bg-white hover:text-red-500"
            }`}
            onClick={handleWishlistToggle}
          >
            <Heart className={`h-4 w-4 ${isInWishlist ? "fill-current" : ""}`} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg text-gray-900 line-clamp-1">{product.name}</h3>
            <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>

            {/* Rating */}
            <div className="flex items-center gap-1">
              <div className="flex">{renderStars(product.rating)}</div>
              <span className="text-sm text-gray-500 ml-1">
                {product.rating}.0 {product.reviews} Reviews
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-900">
                {product.weight} = ₹{product.price}
              </span>
              <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 mt-4 rounded-md flex items-center justify-center transition-colors disabled:opacity-50"
            onClick={handleAddToCart}
            disabled={isAddingToCart}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {isAddingToCart ? "Added!" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  )
}
