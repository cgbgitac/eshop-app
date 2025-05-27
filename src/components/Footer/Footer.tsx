'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ChevronRight,
  Truck,
  Shield,
  RefreshCw,
  CreditCard
} from 'lucide-react'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter subscription
    console.log('Newsletter subscription for:', email)
    setEmail('')
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 mb-4">
              Your one-stop shop for all your needs. We provide quality products and excellent service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <ChevronRight className="h-4 w-4" />
                  Shop All
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <ChevronRight className="h-4 w-4" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <ChevronRight className="h-4 w-4" />
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <ChevronRight className="h-4 w-4" />
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-500" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-500" />
                <span>support@example.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-500" />
                <span>123 Street, City, Country</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 pt-8 border-t border-gray-800">
          <div className="flex items-center gap-4">
            <Truck className="h-8 w-8 text-blue-500" />
            <div>
              <h4 className="text-white font-medium">Free Shipping</h4>
              <p className="text-sm text-gray-400">On all orders over $50</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Shield className="h-8 w-8 text-blue-500" />
            <div>
              <h4 className="text-white font-medium">Secure Payment</h4>
              <p className="text-sm text-gray-400">100% secure payment</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <RefreshCw className="h-8 w-8 text-blue-500" />
            <div>
              <h4 className="text-white font-medium">Easy Returns</h4>
              <p className="text-sm text-gray-400">30 days return policy</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <CreditCard className="h-8 w-8 text-blue-500" />
            <div>
              <h4 className="text-white font-medium">Multiple Payment</h4>
              <p className="text-sm text-gray-400">All major cards accepted</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Your Store. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link href="/shipping" className="text-gray-400 hover:text-white text-sm">
                Shipping Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 