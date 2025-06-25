import Header from "../components/common/Header"
import Footer from "../components/common/Footer"
import ProductCard from "../components/common/ProductCard"
import { products } from "../data/products"

export default function CategoryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Products</h1>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Banana Chips</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {products.bananaChips.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
