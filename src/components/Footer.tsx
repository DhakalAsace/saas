import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Linkedin, Instagram, Cpu } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Cpu className="mr-2 text-teal-400" />
              InnovateTech
            </h3>
            <p className="text-sm">Empowering businesses with innovative AI solutions.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-teal-400">Home</Link></li>
              <li><Link to="/about" className="text-sm hover:text-teal-400">About</Link></li>
              <li><Link to="/pricing" className="text-sm hover:text-teal-400">Pricing</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-teal-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-teal-400"><Facebook size={20} /></a>
              <a href="#" className="text-white hover:text-teal-400"><Twitter size={20} /></a>
              <a href="#" className="text-white hover:text-teal-400"><Linkedin size={20} /></a>
              <a href="#" className="text-white hover:text-teal-400"><Instagram size={20} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <form className="flex">
              <input type="email" placeholder="Your email" className="px-4 py-2 w-full text-gray-800 rounded-l-md focus:outline-none" />
              <button type="submit" className="bg-teal-400 text-gray-900 px-4 py-2 rounded-r-md hover:bg-teal-300 transition duration-300">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; 2024 InnovateTech Solutions. All rights reserved.</p>
          <p className="mt-2">
            Crafted with care by <a href="https://fiverr.com/asaced" className="text-teal-400 hover:underline">asace</a>
          </p>
          <p className="mt-2">
            InnovateTech: A showcase of React, Vite, TypeScript, Tailwind CSS, and Lucide React skills
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer