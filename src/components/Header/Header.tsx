'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { RootState } from '@/store/store';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const navigation = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
  ];

  const isActive = (path: string) => {
    if (!pathname) return false;
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            EShop
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 px-1 text-gray-600 hover:text-blue-600 transition-all duration-200 ${
                  isActive(link.href) 
                    ? 'text-blue-600 font-medium' 
                    : 'hover:font-medium'
                }`}
              >
                {link.label}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform transition-all duration-200 ${
                    isActive(link.href)
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-6">
            <Link
              href="/cart"
              className="text-gray-600 hover:text-blue-600 transition-colors relative"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link
              href="/account"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <User className="h-6 w-6" />
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navigation.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-2 px-1 text-gray-600 hover:text-blue-600 transition-all duration-200 ${
                    isActive(link.href) 
                      ? 'text-blue-600 font-medium' 
                      : 'hover:font-medium'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600" />
                  )}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 