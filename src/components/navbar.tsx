// src/components/Navbar.js
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold cursor-pointer">Land & House Sales</h1>
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-gray-300 transition duration-200">Home</Link>
          <Link to="/properties" className="hover:text-gray-300 transition duration-200">Properties</Link>
          <Link to="/about" className="hover:text-gray-300 transition duration-200">About Us</Link>
          <Link to="/contact" className="hover:text-gray-300 transition duration-200">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition duration-300`}>
        <div className="flex flex-col bg-gray-700 p-4">
          <Link to="/" className="py-2 hover:bg-gray-600 transition duration-200">Home</Link>
          <Link to="/properties" className="py-2 hover:bg-gray-600 transition duration-200">Properties</Link>
          <Link to="/about" className="py-2 hover:bg-gray-600 transition duration-200">About Us</Link>
          <Link to="/contact" className="py-2 hover:bg-gray-600 transition duration-200">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
