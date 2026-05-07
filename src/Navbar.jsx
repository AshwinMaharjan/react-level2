import React from 'react'

function Navbar() {
  return (
    <nav className="w-full h-16 bg-zinc-800 text-white flex items-center justify-between px-6 shadow-md">

      {/* Logo */}
      <div className="text-xl font-bold">
        Ashwin
      </div>

      {/* Menu */}
      <ul className="hidden md:flex gap-8 text-sm font-medium">
        <li className="hover:text-green-400 cursor-pointer">Home</li>
        <li className="hover:text-green-400 cursor-pointer">Shop</li>
        <li className="hover:text-green-400 cursor-pointer">Categories</li>
        <li className="hover:text-green-400 cursor-pointer">Deals</li>
        <li className="hover:text-green-400 cursor-pointer">Cart</li>
      </ul>

      {/* Button */}
      <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-sm font-semibold transition">
        Login
      </button>

    </nav>
  )
}

export default Navbar