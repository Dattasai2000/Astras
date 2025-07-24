import React from "react";

const Header = ({ cart }) => {
  console.log(cart);
  
  return (
    <header className="bg-gray-900 text-white py-4">
      <h1 className="text-4xl p-2 ml-3.5">Astras</h1>
      <div className="container mx-auto px-4 flex justify-end items-center">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#home" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-400">
                Product
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400 relative">
                Cart
                <sup className="ml-1 bg-red-600 rounded-full px-2 text-xs font-bold text-white absolute -top-2 -right-3">
                   {cart.length}
                </sup>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
