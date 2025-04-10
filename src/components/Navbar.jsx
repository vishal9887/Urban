import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full px-6 py-4 bg-primary text-white fixed top-0 z-50 shadow-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-bold">Urban Orbits</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm">
          <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-400 transition-colors">About</Link></li>
          <li><Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
          <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
          <li><Link to="/Blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
          <li><Link to="/Pricing" className="hover:text-blue-400 transition-colors">Pricing</Link></li>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <X onClick={() => setIsOpen(false)} className="cursor-pointer" />
          ) : (
            <Menu onClick={() => setIsOpen(true)} className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-primary px-6 py-4 rounded-lg shadow-lg">
          <ul className="flex flex-col gap-4 text-sm">
          <li><Link to="/" onClick={() => setIsOpen(false)} className="hover:text-blue-400 transition-colors">Home</Link></li>
<li><Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-blue-400 transition-colors">About</Link></li>
<li><Link to="/services" onClick={() => setIsOpen(false)} className="hover:text-blue-400 transition-colors">Services</Link></li>
<li><Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-blue-400 transition-colors">Contact</Link></li>
<li><Link to="/Blog" onClick={() => setIsOpen(false)} className="hover:text-blue-400 transition-colors">Blog</Link></li>
<li><Link to="/Pricing" onClick={() => setIsOpen(false)} className="hover:text-blue-400 transition-colors">Pricing</Link></li>

          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
