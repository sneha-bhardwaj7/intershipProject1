import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import BananaChipsPage from "./pages/BananaChipsPage"
import BestSellersCarousel from "./pages/BestSellersCarousel"
import BlogPage from "./pages/BlogPage"
import Carousel from "./pages/Carousel"
import CategoryPage from "./pages/CategoryPage"
import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"
import PicklesPage from "./pages/PicklesPage"
import ProductDetailPage from "./pages/ProductDetailPage"
import Cart from "./pages/Cart"
import Wishlist from "./pages/Wishlist"
import Header from "./components/common/Header"
import Footer from "./components/common/Footer"
import { CartProvider } from "./components/contexts/CartContext"
import { WishlistProvider } from "./components/contexts/WishlistContext"

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <div className="App min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/banana-chips" element={<BananaChipsPage />} />
                <Route path="/pickles" element={<PicklesPage />} />
                <Route path="/category" element={<CategoryPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/carousel" element={<Carousel />} />
                <Route path="/bestsellers" element={<BestSellersCarousel />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </WishlistProvider>
    </CartProvider>
  )
}

export default App
