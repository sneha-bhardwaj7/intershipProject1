import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import BananaChipsPage from "./pages/BananaChipsPage"
import PicklesPage from "./pages/PicklesPage"
import CategoryPage from "./pages/CategoryPage"
import BlogPage from "./pages/BlogPage"
import ProductDetailPage from "./pages/ProductDetailPage"
import NotFoundPage from "./pages/NotFoundPage"
import Header from "./components/common/Header"
import "./App.css"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/banana-chips" element={<BananaChipsPage />} />
        <Route path="/pickles" element={<PicklesPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App
