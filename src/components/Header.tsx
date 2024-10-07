import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-teal-400">InnovateTech</Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-300 hover:text-teal-400">Home</Link>
          <Link to="/about" className="text-gray-300 hover:text-teal-400">About</Link>
          <Link to="/pricing" className="text-gray-300 hover:text-teal-400">Pricing</Link>
          <Link to="/contact" className="text-gray-300 hover:text-teal-400">Contact</Link>
        </nav>
        <button className="md:hidden">
          <Menu className="h-6 w-6 text-gray-300" />
        </button>
      </div>
    </header>
  )
}

export default Header