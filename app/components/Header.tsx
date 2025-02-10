'use client';

import { useState, useRef } from 'react';

import Link from 'next/link';
import { Menu, X, Moon } from 'lucide-react';
import { usePathname } from 'next/navigation';

import Logo from "@/public/images/logo.png"
import Image from "next/image"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Support', href: '/support' },
  ];

  return (
    <header className="fixed top-0 z-40 w-full px-5">
      <div className={`mx-auto container px-10 sm:px-6 lg:px-8 bg-black/90 backdrop-blur text-white lg:rounded-full  my-5 ${isMenuOpen ? "rounded-2xl" : "rounded-2xl"} `}>
        <div className="flex justify-between items-center  h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-black">
              <Image
                src={Logo}
                alt="Jerika Inc Logo"
                width={120} 
                height={40} 
                priority 
                className="object-contain" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-base tracking-wider font-semibold transition-colors hover:text-primary
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
              className="text-white hover:text-primary mt-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div
          className={`
        md:hidden 
        transition-all 
        duration-300 
        ease-in-out
        overflow-hidden
        ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
      `}
        >
          <div
            ref={menuRef}
            className={`
          px-2 pt-2 pb-3 space-y-1
          transform transition-transform duration-300
          ${isMenuOpen ? 'translate-y-0' : '-translate-y-4'}
        `}
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={` block px-3 py-2 rounded-md text-xl font-bold transition-all duration-200
                   ${pathname === item.href
                    ? 'text-primary bg-secondary'
                    : 'text-white hover:text-primary hover:bg-secondary'
                  }
            `}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        {/* {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-xl font-bold
                    ${pathname === item.href
                      ? 'text-primary bg-secondary'
                      : 'text-white hover:text-primary hover:bg-secondary'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )} */}
      </div>
    </header>
  );
};

export default Header;