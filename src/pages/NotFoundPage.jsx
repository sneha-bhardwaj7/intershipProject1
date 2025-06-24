import { Link } from "react-router-dom"
import { Home } from "lucide-react"

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-orange-600">404</h1>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md transition-colors font-medium"
          >
            <Home className="w-4 h-4 mr-2" />
            Go Back Home
          </Link>
          <div className="text-sm text-gray-500">
            <Link to="/category" className="text-orange-600 hover:text-orange-700 mx-2">
              Browse Categories
            </Link>
            |
            <Link to="/blog" className="text-orange-600 hover:text-orange-700 mx-2">
              Visit Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
