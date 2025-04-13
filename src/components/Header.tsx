import React, { useState } from "react";
import { FaBars, FaShoppingCart, FaSearch } from "react-icons/fa";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  return (
    <>
        <div className="bg-sky-600 h-10 text-center flex items-center text-white font-bold justify-center">
          hugs are more worthy than the handshakes!
        </div>
      <header className="bg-gray-900 text-white py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="hidden lg:flex justify-between items-center">
            <div className="text-2xl font-bold">Shaghoul</div>

            <nav className="flex items-center space-x-6">
              <div
                className="relative"
                onMouseEnter={() => setIsProductDropdownOpen(true)}
                onMouseLeave={() => setIsProductDropdownOpen(false)}
              >
                <button className="hover:text-gray-300 transition-colors">
                  Products
                </button>
                {isProductDropdownOpen && (
                  <div className="absolute bg-gray-800 py-2 mt-2 rounded-md shadow-lg">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                      Product 1
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                      Product 2
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                      Product 3
                    </a>
                  </div>
                )}
              </div>
              <a href="/faq" className="hover:text-gray-300 transition-colors">
                FAQ
              </a>
              <a
                href="/contact"
                className="hover:text-gray-300 transition-colors"
              >
                Contact
              </a>
              <a
                href="/about"
                className="hover:text-gray-300 transition-colors"
              >
                About
              </a>
              <a href="/" className="hover:text-gray-300 transition-colors">
                Home
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-gray-800 text-white px-3 py-1 rounded-md focus:outline-none"
                />
              </div>
              <button className="hover:text-gray-300">
                <FaShoppingCart size={20} />
              </button>
              <button className="bg-blue-600 px-4 py-1 rounded-md hover:bg-blue-700">
                Login
              </button>
              <button className="bg-green-600 px-4 py-1 rounded-md hover:bg-green-700">
                Sign Up
              </button>
            </div>
          </div>

          <div className="lg:hidden flex justify-between items-center">
            <div className="flex space-x-4">
              <button className="hover:text-gray-300">
                <FaShoppingCart size={20} />
              </button>
              <button className="hover:text-gray-300">
                <FaSearch size={20} />
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-xl font-bold">Shaghoul</div>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="hover:text-gray-300"
              >
                <FaBars size={24} />
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="lg:hidden bg-gray-800 py-2">
              <nav className="flex flex-col space-y-2 px-4">
                <a href="/" className="hover:text-gray-300 py-1">
                  Home
                </a>
                <a href="/about" className="hover:text-gray-300 py-1">
                  About
                </a>
                <a href="/contact" className="hover:text-gray-300 py-1">
                  Contact
                </a>
                <a href="/faq" className="hover:text-gray-300 py-1">
                  FAQ
                </a>
                <div>
                  <button className="hover:text-gray-300 py-1 w-full text-left">
                    Products
                  </button>
                  <div className="pl-4 flex flex-col space-y-1">
                    <a href="#" className="hover:text-gray-300 py-1">
                      Product 1
                    </a>
                    <a href="#" className="hover:text-gray-300 py-1">
                      Product 2
                    </a>
                    <a href="#" className="hover:text-gray-300 py-1">
                      Product 3
                    </a>
                  </div>
                </div>
                <button className="bg-blue-600 px-4 py-1 rounded-md hover:bg-blue-700 text-left">
                  Login
                </button>
                <button className="bg-green-600 px-4 py-1 rounded-md hover:bg-green-700 text-left">
                  Sign Up
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
