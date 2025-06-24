import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-orange-600 text-white py-3 px-4 flex items-center justify-between">
        <div className="bg-gray-200 text-black font-semibold px-3 py-1 rounded">LOGO</div>
        <div className="flex items-center gap-4 text-xl">
          <FaSearch className="cursor-pointer" />
          <FaUser className="cursor-pointer" />
          <FaShoppingCart className="cursor-pointer" />
        </div>
      </header>

      {/* Profile Content */}
      <div className="max-w-md mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gray-300 rounded-full" />
          <div>
            <p className="font-semibold">Hey, <span className="font-bold">Name</span></p>
            <p className="text-sm text-gray-600">companyname@gamil.com</p>
          </div>
        </div>

        <hr className="mb-4" />

        {/* Menu Items */}
        <div className="space-y-4 text-sm text-gray-800">
          <div className="cursor-pointer hover:underline">Wishlist</div>
          <div className="cursor-pointer hover:underline">Order History</div>
          <div className="cursor-pointer hover:underline">Address Book</div>
          <div className="cursor-pointer hover:underline">Change Password</div>
          <div className="cursor-pointer hover:underline">Return And Refund policy</div>
          <div className="cursor-pointer hover:underline">Privacy Policy</div>
          <div className="cursor-pointer hover:underline">Terms and Conditions</div>
          <div className="cursor-pointer hover:underline">Help Centre</div>
        </div>

        {/* Sign Out */}
        <div className="mt-6">
          <button className="w-full border border-black text-black py-2 rounded hover:bg-gray-100">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
