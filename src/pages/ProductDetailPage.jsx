import { useParams, Link } from "react-router-dom"
import { Star, Heart, ShoppingCart, Plus, Minus, ArrowLeft } from 'lucide-react'
import { useState, useEffect } from "react"
import { products } from "../data/products"
import ProductCard from "../components/common/ProductCard"
import Footer from "../components/common/Footer"

export default function ProductDetailPage() {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const [product, setProduct] = useState(null)
  const [similarProducts, setSimilarProducts] = useState([])
  const [recentlyBought, setRecentlyBought] = useState([])

  useEffect(() => {
    // Find the product from all categories
    let foundProduct = null
    let allProducts = []

    Object.values(products).forEach((categoryProducts) => {
      allProducts = [...allProducts, ...categoryProducts]
      const found = categoryProducts.find((p) => p.id === id)
      if (found) foundProduct = found
    })

    if (foundProduct) {
      setProduct(foundProduct)
      
      // Get similar products from the same category
      const similar = allProducts
        .filter((p) => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 3)
      setSimilarProducts(similar)

      // Get recently bought together (random products for demo)
      const recent = allProducts
        .filter((p) => p.id !== foundProduct.id)
        .slice(0, 3)
      setRecentlyBought(recent)
    }
  }, [id])

  const handleQuantityChange = (action) => {
    if (action === "increase") {
      setQuantity((prev) => prev + 1)
    } else if (action === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} className={`w-4 h-4 ${index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
          <Link to="/banana-chips" className="text-orange-500 hover:text-orange-600">
            Back to Banana Chips
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Back Button */}
      <div className="bg-orange-500 text-white py-4">
        <div className="container mx-auto px-4 flex items-center gap-4">
          <Link to="/banana-chips" className="flex items-center gap-2 hover:text-orange-200">
            <ArrowLeft className="w-5 h-5" />
            Back
          </Link>
          <div className="flex-1 text-center">
            <span className="text-lg font-medium">Product Details</span>
          </div>
        </div>
      </div>

      {/* Product Detail Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnail images */}
            <div className="flex gap-2">
              <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden border-2 border-orange-500">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
              <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">{renderStars(product.rating)}</div>
                <span className="text-gray-600">({product.rating}.0)</span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-gray-900">₹{product.price}</span>
                <span className="text-lg text-gray-500 line-through">₹{product.originalPrice}</span>
              </div>
              <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
              </span>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="font-medium">Qty:</span>
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => handleQuantityChange("decrease")}
                  className="p-2 hover:bg-gray-100"
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 font-medium">{quantity}</span>
                <button onClick={() => handleQuantityChange("increase")} className="p-2 hover:bg-gray-100">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-600 flex items-center justify-center gap-2">
                Buy Online
              </button>
              <button className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 flex items-center justify-center gap-2">
                <Heart className="w-5 h-5" />
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4">DESCRIPTION</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed mb-4">
              {product.description}. Our premium quality {product.name.toLowerCase()} are made from the finest ingredients, 
              ensuring maximum flavor and nutritional value. Each batch is carefully prepared to maintain the authentic 
              taste and texture that our customers love.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Perfect as a healthy snack option, these can be enjoyed at any time of the day. Rich in natural flavors 
              and free from artificial preservatives, making them a wholesome choice for the entire family.
            </p>
          </div>
        </div>

        {/* Key Ingredients */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4">KEY INGREDIENT</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 bg-gray-50 p-6 rounded-lg">
            <li>Premium quality raw materials</li>
            <li>Natural spices and seasonings</li>
            <li>No artificial colors or preservatives</li>
            <li>Traditional preparation methods</li>
          </ul>
        </div>

        {/* Similar Products */}
                {similarProducts.length > 0 && (
            <div className="mb-12">
                <h2 className="text-xl font-bold mb-6">Similar Products</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {similarProducts.map((similarProduct) => (
                    <div
                    key={similarProduct.id}
                    className="w-60 h-[400px] bg-white border-2 border-orange-500 rounded-2xl p-4 flex flex-col justify-between shadow-sm"
                    >
                    <img
                        src={similarProduct.image || "/placeholder.svg"}
                        alt={similarProduct.name}
                        className="w-36 h-42 object-cover rounded-xl mb-3 mx-auto"
                    />
                    <h3 className="font-medium text-sm mb-2">{similarProduct.name}</h3>
                    <p className="text-xs text-gray-600 mb-2">{similarProduct.description}</p>
                    <div className="flex items-center justify-between mb-3">
                        <span className="font-bold text-sm">₹{similarProduct.price}</span>
                        <div className="flex items-center">{renderStars(similarProduct.rating)}</div>
                    </div>
                    <button className="w-full bg-orange-500 text-white py-2 px-3 rounded text-sm hover:bg-orange-600">
                        Add to cart
                    </button>
                    </div>
                ))}
                </div>
            </div>
            )}

           {/* Recently Bought Together */}
                {recentlyBought.length > 0 && (
                <div className="mb-12">
                    <h2 className="text-xl font-bold mb-6">Recently Bought Together</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recentlyBought.map((recentProduct) => (
                        <div
                        key={recentProduct.id}
                        className="w-60 h-[400px] bg-white border-2 border-orange-500 rounded-2xl p-4 flex flex-col justify-between shadow-sm"
                        >
                        <img
                            src={recentProduct.image || "/placeholder.svg"}
                            alt={recentProduct.name}
                            className="w-36 h-42 object-cover rounded-xl mb-3 mx-auto"
                        />
                        <h3 className="font-medium text-sm mb-2">{recentProduct.name}</h3>
                        <p className="text-xs text-gray-600 mb-2">{recentProduct.description}</p>
                        <div className="flex items-center justify-between mb-3">
                            <span className="font-bold text-sm">₹{recentProduct.price}</span>
                            <div className="flex items-center">{renderStars(recentProduct.rating)}</div>
                        </div>
                        <button className="w-full bg-orange-500 text-white py-2 px-3 rounded text-sm hover:bg-orange-600">
                            Add to cart
                        </button>
                        </div>
                    ))}
                    </div>
                </div>
                )}


        {/* Ratings and Reviews */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-6">Rating and Reviews</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center gap-8 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">{product.rating}.0</div>
                <div className="flex items-center justify-center mt-1">{renderStars(product.rating)}</div>
                <div className="text-sm text-gray-600 mt-1">150 reviews</div>
              </div>
              <div className="flex-1">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="flex items-center gap-2 mb-1">
                    <span className="w-2 text-sm">{star}</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{
                          width: star === product.rating ? "80%" : star === product.rating - 1 ? "15%" : "5%",
                        }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 w-8">
                      {star === product.rating ? "120" : star === product.rating - 1 ? "23" : "7"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sample Reviews */}
            <div className="space-y-4">
              <div className="border-t pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">{renderStars(5)}</div>
                  <span className="font-medium text-sm">John Doe</span>
                </div>
                <p className="text-gray-700 text-sm">
                  Excellent quality! The taste is amazing and the packaging is perfect. Will definitely order again.
                </p>
              </div>
              <div className="border-t pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">{renderStars(4)}</div>
                  <span className="font-medium text-sm">Sarah Smith</span>
                </div>
                <p className="text-gray-700 text-sm">Good product overall. Fresh and tasty. Delivery was quick too.</p>
              </div>
              <div className="border-t pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">{renderStars(5)}</div>
                  <span className="font-medium text-sm">Mike Johnson</span>
                </div>
                <p className="text-gray-700 text-sm">Love the crunchiness and flavor. Perfect snack for any time!</p>
              </div>
            </div>

            <button className="mt-6 text-orange-500 font-medium hover:text-orange-600 text-sm">
              View all reviews
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
