import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import HomePage from './components/HomePage/HomePage'

function App() {
  // const [count, setCount] = useState(0)
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
        return <HomePage onCategoryClick={handleCategoryClick} onHomeClick={handleHomeClick} />
      case "banana-chips":
        return <BananaChipsPage onHomeClick={handleHomeClick} onAddToCart={handleAddToCart} />
      case "pickles":
        return <PicklesPage onHomeClick={handleHomeClick} onAddToCart={handleAddToCart} />
      default:
        return <HomePage onCategoryClick={handleCategoryClick} onHomeClick={handleHomeClick} />
    }
  }

  return (
    <>
      {/* <Navbar></Navbar>
      <HomePage></HomePage> */}
      {renderCurrentView()}
      {/* Cart count for debugging */}
      {cart.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-orange-600 text-white px-4 py-2 rounded-lg shadow-lg">
          Cart: {cart.length} items
        </div>
      )}
    </>
  )
}

export default App
