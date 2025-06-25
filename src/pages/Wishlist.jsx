"use client"

import { Link } from "react-router-dom"
import { Heart, ShoppingCart, ArrowLeft, Trash2 } from "lucide-react"
import { useWishlist } from "../components/contexts/WishlistContext"
import { useCart } from "../components/contexts/CartContext"

export default function Wishlist() {
  const { state: wishlistState, removeFromWishlist, clearWishlist } = useWishlist()
  const { addToCart } = useCart()

  const handleAddToCart = (item) => {
    addToCart(item)
    removeFromWishlist(item.id)
  }

  if (wishlistState.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <Link to="/" className="flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors">
                <ArrowLeft className="w-5 h-5" />
                Continue Shopping
              </Link>
            </div>

            {/* Empty Wishlist */}
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your wishlist is empty</h2>
              <p className="text-gray-600 mb-6">Save your favorite items for later!</p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
              >
                <Heart className="w-5 h-5" />
                Start Browsing
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors">
                <ArrowLeft className="w-5 h-5" />
                Continue Shopping
              </Link>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">My Wishlist ({wishlistState.totalItems} items)</h1>
          </div>

          {/* Wishlist Items */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Saved Items</h2>
                <button
                  onClick={clearWishlist}
                  className="text-red-600 hover:text-red-700 text-sm font-medium transition-colors"
                >
                  Clear Wishlist
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
              {wishlistState.items.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  {/* Product Image */}
                  <div className="relative">
                    <Link to={`/product/${item.id}`}>
                      <div className="w-full h-48 p-4">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </Link>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </div>

                  {/* Product Details */}
                  <div className="p-4">
                    <Link to={`/product/${item.id}`}>
                      <h3 className="font-semibold text-gray-900 mb-1 hover:text-orange-600 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2 line-clamp-2">{item.description}</p>
                    </Link>

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-bold text-orange-600">₹{item.price}</span>
                      {item.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">₹{item.originalPrice}</span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="flex-1 bg-orange-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Add to Cart
                      </button>
                      <button
                        onClick={() => removeFromWishlist(item.id)}
                        className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
