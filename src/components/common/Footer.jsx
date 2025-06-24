import { LiaShippingFastSolid } from "react-icons/lia";
import { PiWalletFill } from "react-icons/pi";
import { MdOutlineVerified } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Free Shipping */}
<div className="flex flex-col items-center text-center p-6 bg-white rounded-lg border border-gray-200 h-50">
  <LiaShippingFastSolid className="text-7xl text-orange-500 mb-4" />
  <h3 className="font-bold text-gray-900 mb-2">FREE</h3>
  <h3 className="font-bold text-gray-900">SHIPPING</h3>
</div>

{/* COD Available */}
<div className="flex flex-col items-center text-center p-6 bg-white rounded-lg border border-gray-200">
  <PiWalletFill className="text-7xl text-orange-500 mb-4" />
  <h3 className="font-bold text-gray-900 mb-2">COD</h3>
  <h3 className="font-bold text-gray-900">AVAILABLE</h3>
</div>

{/* Superior Quality */}
<div className="flex flex-col items-center text-center p-6 bg-white rounded-lg border border-gray-200">
  <MdOutlineVerified className="text-7xl text-orange-500 mb-4" />
  <h3 className="font-bold text-gray-900 mb-2">SUPERIOR</h3>
  <h3 className="font-bold text-gray-900">QUALITY</h3>
</div>

{/* 24/7 Support */}
<div className="flex flex-col items-center text-center p-6 bg-white rounded-lg border border-gray-200">
  <IoMdTime className="text-7xl text-orange-500 mb-4" />
  <h3 className="font-bold text-gray-900 mb-2">24/7</h3>
  <h3 className="font-bold text-gray-900">SUPPORT</h3>
</div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="md:col-span-1">
              <div className="w-20 h-20 bg-gray-600 rounded mb-4"></div>
              <h3 className="text-xl font-bold mb-4">Name</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Exploring the finest copper and brass utensils worldwide, blending tradition with modern excellence.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">QUICK LINKS</h4>
              <ul className="space-y-3">
                <li>
                  <a href="/" className="text-gray-400 hover:text-white transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-400 hover:text-white transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/collection" className="text-gray-400 hover:text-white transition">
                    Collection
                  </a>
                </li>
                <li>
                  <a href="/certificate" className="text-gray-400 hover:text-white transition">
                    Certificate
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-400 hover:text-white transition">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Help */}
            <div>
              <h4 className="text-lg font-bold mb-6">HELP</h4>
              <ul className="space-y-3">
                <li>
                  <a href="/cancellation" className="text-gray-400 hover:text-white transition">
                    Cancellation Policy
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-gray-400 hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-gray-400 hover:text-white transition">
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="text-lg font-bold mb-6">CONTACT US</h4>
              <div className="space-y-3 text-gray-400 text-sm">
                <p>Plot no B-56, Additional Latur MIDC, Latur, Harargul Bk., Maharashtra 413531</p>
                <p>+91 1234567890</p>
                <p>companyname@gmail.com</p>

                {/* Social Media Icons */}
                <div className="flex space-x-4 pt-4">
                  <FaFacebook className="text-xl hover:text-white cursor-pointer transition" />
                  <FaTwitter className="text-xl hover:text-white cursor-pointer transition" />
                  <FaInstagram className="text-xl hover:text-white cursor-pointer transition" />
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-6">
            <p className="text-center text-gray-400 text-sm">
              Copyright © All rights reserved | Company Name | Developed by Swarajya Digital
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
