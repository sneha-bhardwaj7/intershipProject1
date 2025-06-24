"use client"

import { useState } from "react"
import HomePage from "../components/pages/home-page"
import BananaChipsPage from "../components/pages/banana-chips-page"
import PicklesPage from "../components/pages/pickles-page"

export default function FoodApp() {
  const [currentView, setCurrentView] = useState("home")
  const [cart, setCart] = useState([])

  const handleCategoryClick = (category) => {
    setCurrentView(category)
  }

  const handleHomeClick = () => {
    setCurrentView("home")
  }

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product])
    console.log(`Added ${product.name} to cart`)
    // You can add toast notification here
  }

  const renderCurrentView = () => {
    switch (currentView) {
      case "home":
        return (
          <HomePage onCategoryClick={handleCategoryClick} onHomeClick={handleHomeClick} onAddToCart={handleAddToCart} />
        )
      case "banana-chips":
        return <BananaChipsPage onHomeClick={handleHomeClick} onAddToCart={handleAddToCart} />
      case "pickles":
        return <PicklesPage onHomeClick={handleHomeClick} onAddToCart={handleAddToCart} />
      default:
        return (
          <HomePage onCategoryClick={handleCategoryClick} onHomeClick={handleHomeClick} onAddToCart={handleAddToCart} />
        )
    }
  }

  return (
    <div>
      {renderCurrentView()}
      {/* Cart count for debugging */}
      {cart.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-orange-600 text-white px-4 py-2 rounded-lg shadow-lg">
          Cart: {cart.length} items
        </div>
      )}
    </div>
  )
}
