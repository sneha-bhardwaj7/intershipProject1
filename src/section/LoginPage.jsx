import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-sm w-full space-y-6">
        <h2 className="text-2xl font-bold text-black text-center">Sign in your account</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="text"
              placeholder="ex: 0123456789"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">OTP</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <button className="w-full bg-orange-600 text-white font-semibold py-3 rounded-lg hover:bg-orange-700 transition">
            SIGN IN
          </button>
        </div>

        <div className="text-center text-sm text-gray-500">or sign in with</div>

        <div className="flex justify-center gap-4">
          <button className="w-12 h-12 flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200">
            <FcGoogle className="text-xl" />
          </button>
          <button className="w-12 h-12 flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200">
            <FaFacebookF className="text-blue-600 text-xl" />
          </button>
          <button className="w-12 h-12 flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200">
            <FaTwitter className="text-sky-500 text-xl" />
          </button>
        </div>

        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <a href="#" className="font-medium text-black hover:underline">
            SIGN UP
          </a>
        </p>
      </div>
    </div>
  );
}
