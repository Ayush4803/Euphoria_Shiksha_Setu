import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between py-4">
        {/* Logo */}
      <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-md w-fit">
  <img 
    src="SS_1940.jpg" 
    alt="Profile"
    className="w-16 h-16 object-cover rounded-full border-2 border-green-500"
  />
  <div>
    <div className="font-bold text-lg text-gray-800">Shiksha Setu</div>
    <div className="text-sm text-green-700">
      Affordable books for every child
    </div>
  </div>
</div>


        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "px-3 py-2 rounded bg-green-700 text-white"
                : "px-3 py-2 text-green-800 hover:text-green-600"
            }
          >
            Home
          </NavLink>
          <NavLink to="/donate" className="px-3 py-2 text-green-800 hover:text-green-600">
            Donate
          </NavLink>
          <NavLink to="/about" className="px-3 py-2 text-green-800 hover:text-green-600">
            About
          </NavLink>
          <NavLink to="/request-books" className="px-3 py-2 text-green-800 hover:text-green-600">
            Request Books
          </NavLink>
          <NavLink to="/get-associated" className="px-3 py-2 text-green-800 hover:text-green-600">
            Get Associated
          </NavLink>
          <NavLink to="/contact" className="px-3 py-2 text-green-800 hover:text-green-600">
            Contact Us
          </NavLink>
          <Link
            to="/donate-funds"
            className="px-3 py-2 text-green-800 hover:text-green-600"
          >
            Donate Funds 💰
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-green-800 focus:outline-none"
          >
            {isOpen ? (
              <span className="text-2xl">&times;</span>
            ) : (
              <span className="text-2xl">&#9776;</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md px-4 pb-4 space-y-2">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded text-green-800 hover:bg-green-100"
          >
            Home
          </NavLink>
          <NavLink
            to="/donate"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded text-green-800 hover:bg-green-100"
          >
            Donate
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded text-green-800 hover:bg-green-100"
          >
            About
          </NavLink>
          <NavLink
            to="/request-books"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded text-green-800 hover:bg-green-100"
          >
            Request Books
          </NavLink>
          <NavLink
            to="/get-associated"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded text-green-800 hover:bg-green-100"
          >
            Get Associated
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded text-green-800 hover:bg-green-100"
          >
            Contact Us
          </NavLink>
          <Link
            to="/donate-funds"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded text-green-800 hover:bg-green-100"
          >
            Donate Funds 💰
          </Link>
        </nav>
      )}
    </header>
  );
}
