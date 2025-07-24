import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-amber-500 border-4 shadow-sm rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* PageDone Branding */}
        <div className="flex items-center space-x-2">   
          <span className="text-3xl font-bold text-blue-600">ProductStore</span>
        </div>

        {/* Navigation */}
        <nav className="space-x-6 text-gray-700 font-medium">
          <Link to="/Home" className="hover:text-blue-500 transition bor">Home</Link>
           <Link to="/Product" className="hover:text-blue-500 transition">Product</Link>
          <Link to="/Blog" className="hover:text-blue-500 transition">About</Link>
          <Link to="/Cart" className="hover:text-blue-500 transition">Cart</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
