import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-4">
        <Link
          to="/"
          className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-lg text-gray-600 mb-8">Coming Soon!</p>
          <div className="bg-gray-100 rounded-lg p-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Blog is Under Construction</h2>
            <p className="text-gray-600 mb-6">
              We're working hard to bring you amazing content about our products, recipes, and more!
            </p>
            <Link
              to="/"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
