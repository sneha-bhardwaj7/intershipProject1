import { Button } from "../../components/ui/button"
import Header from "../HeroComponents/common/header"
import ProductCard from "../HeroComponents/common/product-card"
import { PicklesHeroImage } from "../images/hero-images"
import { getProductsByCategory } from "../../data/products"
import { getCategoryById } from "../../data/categories"

export default function PicklesPage({ onHomeClick, onAddToCart }) {
  const products = getProductsByCategory("pickles")
  const category = getCategoryById("pickles")

  if (!category) return null

  return (
    <div className="min-h-screen bg-white">
      <Header onHomeClick={onHomeClick} />
      <main>
        {/* Hero Section */}
        <section className={category.bgGradient}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-4 whitespace-pre-line">{category.heroTitle}</h1>
                <p className="text-lg text-gray-700 mb-8 whitespace-pre-line">{category.heroSubtitle}</p>
                <Button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3">Shop Now</Button>
              </div>
              <div className="flex justify-center">
                <PicklesHeroImage alt="Pickle jar" />
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{category.displayName}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
