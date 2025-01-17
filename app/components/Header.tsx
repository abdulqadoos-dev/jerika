// src/components/layout/header/index.js
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Moon } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Support', href: '/support' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border border-transparent backdrop-blur">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8 bg-black text-white lg:rounded-full rounded-lg my-5 ">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-black text-primary">
              Jerika Inc
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary
                  ${pathname === item.href ? 'text-primary' : 'text-white'}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Dark Mode Toggle - Desktop */}
          <div className="hidden md:flex items-center">
            <button
              aria-label="Toggle dark mode"
              className="p-2 text-primary rounded-full hover:bg-gray-800"
            >
              <Moon size={20} />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white hover:text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium
                    ${pathname === item.href
                      ? 'text-primary bg-gray-900'
                      : 'text-white hover:text-primary hover:bg-gray-900'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;