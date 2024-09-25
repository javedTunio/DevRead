// src/components/Navbar.jsx
import { Book } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo as a link to home */}
        <Link
          to="/"
          className="text-lg font-bold flex items-center">
          <Book />
          <span className="hidden md:block ml-2 leading-none">DevRead</span>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className="hover:bg-gray-700 px-3 py-2 rounded transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:bg-gray-700 px-3 py-2 rounded transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="hover:bg-gray-700 px-3 py-2 rounded transition duration-300">
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="hover:bg-gray-700 px-3 py-2 rounded transition duration-300">
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
