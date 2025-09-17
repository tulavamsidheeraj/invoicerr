import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../index.css'
export const RootLayout = () => {
   const currentYear = new Date().getFullYear();
  return (
    <div className='bg-gradient-to-r from-gray-950 from-10% via-gray-900 via-30% to-slate-950 to-90% text-white'>
      <header className=''>
        <div className=''>
      <div className='flex justify-between font-semibold'>
        <div className='bitcount-grid-double-title text-3xl text-white p-7'>
          Invoicerrr...
        </div>
        <div className='flex justify-end'>
          <Link to="/about" className='p-7 text-xl md:text-2xl bitcount-grid-double-title text-white'>
            About
          </Link>
          <Link to='/' className='p-7 text-xl md:text-2xl bitcount-grid-double-title text-white'>
            Contact me
          </Link>
          <Link to="/" className='p-7 text-xl md:text-2xl bitcount-grid-double-title text-white'>
            Appreciate
          </Link>
        </div>
      </div>
      <div className='px-7 text-white'>
        <hr />
      </div>
    </div>
      </header>
      <main className='flex-grow'>  
        <Outlet />
      </main>
      <footer className="text-white py-10 px-4 mt-auto">
        <div className="container mx-auto flex flex-wrap justify-around">
          {/* About Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h4 className="text-xl font-bold mb-4 border-b-2 border-gray-600 pb-2">About Us</h4>
          <p className="text-sm text-gray-400 leading-relaxed">
            I am an engineer willing to learn anything to bild the solution we need..
          </p>
          </div>

          {/* Quick Links Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h4 className="text-xl font-bold mb-4 border-b-2 border-gray-600 pb-2">Quick Links</h4>
          <ul className="text-sm space-y-2">
            <li><a href="/about" className="hover:text-gray-400 transition-colors">About</a></li>
            <li><a href="/services" className="hover:text-gray-400 transition-colors">Services</a></li>
            <li><a href="/contact" className="hover:text-gray-400 transition-colors">Contact</a></li>
            <li><a href="/privacy-policy" className="hover:text-gray-400 transition-colors">Privacy Policy</a></li>
          </ul>
          </div>

          {/* Social Media Section */}
          <div className="w-full md:w-1/3">
          <h4 className="text-xl font-bold mb-4 border-b-2 border-gray-600 pb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">LinkedIn</a>
          </div>
          </div>
        </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
        <p>&copy; {currentYear} YourCompany. All rights reserved.</p>
      </div>
    </footer>
    </div>
  )
}
