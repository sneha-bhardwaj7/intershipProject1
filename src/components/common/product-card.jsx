"use client"

import { Button } from "../../components/ui/button"
import { BananaChipsProductImage, PicklesProductImage } from "../images/product-images"

export default function ProductCard({ product, onAddToCart }) {
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product)
    }
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-xs ${i < rating ? "text-yellow-400" : "text-gray-300"}`}>
        ★
      </span>
    ))
  }

  const ProductImage = product.category === "banana-chips" ? BananaChipsProductImage : PicklesProductImage

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-200">
      <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
        <ProductImage alt={product.name} productId={product.id} />
      </div>
      <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
      <p className="text-sm text-gray-600 mb-2">{product.benefits}</p>
      <p className="text-sm text-gray-500 mb-3">{product.weight}</p>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-gray-900">{product.price}</span>
          <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
        </div>
        <div className="flex">{renderStars(product.rating)}</div>
      </div>
      <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white" onClick={handleAddToCart}>
        Add to cart
      </Button>
    </div>
  )
}
