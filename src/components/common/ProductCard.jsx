import { Link } from "react-router-dom"
import { Star, ShoppingCart } from 'lucide-react'

export default function ProductCard({
  id,
  name,
  description,
  price,
  originalPrice,
  image,
  rating = 4,
  reviews = 365,
}) {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ))
  }

  return (
    <div className="bg-white border border-gray-300 rounded-xl overflow-hidden hover:shadow-md transition-all w-[230px] h-[420px] flex flex-col justify-between">
      {/* Product Image */}
      <Link to={`/product/${id}`}>
        <div className="bg-white p-4 h-[160px] flex items-center justify-center">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="h-full object-contain"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="px-4 flex flex-col items-center text-center flex-grow">
        <Link to={`/product/${id}`}>
          <h3 className="font-semibold text-sm text-gray-800 mb-1">{name || "Product Name"}</h3>
          <p className="text-xs text-gray-500 mb-2">{description || "Product Benefits"}</p>
        </Link>

        {/* Weight Dropdown */}
        <select className="text-sm border rounded px-2 py-1 mb-2 w-full">
          <option>100 g - ₹{price}</option>
        </select>

        {/* Rating */}
        <div className="flex items-center justify-center mb-3">
          {renderStars(rating)}
          <span className="text-xs text-gray-500 ml-2">({reviews} Reviews)</span>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm py-2 rounded-b-xl font-semibold flex items-center justify-center gap-2">
        <ShoppingCart className="w-4 h-4" />
        Add to cart
      </button>
    </div>
  )
}
