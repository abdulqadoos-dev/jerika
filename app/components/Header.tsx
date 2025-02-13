'use client';

import { useState, useRef } from 'react';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
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
      <div className={`mx-auto container px-10 sm:px-6 lg:px-8 bg-black backdrop-blur text-white lg:rounded-full  my-5 ${isMenuOpen ? "rounded-2xl" : "rounded-2xl"} `}>
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
          <Link href="/contact">
            <div className="hidden md:flex justify-end w-36">

              <button className="group flex items-center transition-all duration-300 rounded-full overflow-hidden bg-primary hover:pr-2">
                {/* Icon Container */}
                <div className="p-2 rounded-full bg-black m-1">
                  <svg
                    width={15}
                    height={16}
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.4296 14.8393L15.0546 12.8706C14.8677 12.7869 14.6599 12.7693 14.4627 12.8203C14.2654 12.8714 14.0893 12.9883 13.9608 13.1536L12.0233 15.6392C8.98248 14.1338 6.53535 11.5643 5.10165 8.37148L7.46888 6.33706C7.62657 6.2024 7.73818 6.01745 7.78681 5.81023C7.83545 5.60301 7.81846 5.38479 7.73842 5.18861L5.86338 0.594775C5.77554 0.383299 5.62016 0.210635 5.42406 0.106557C5.22796 0.0024795 5.00341 -0.0264886 4.78915 0.0246481L0.726575 1.00904C0.519997 1.05913 0.335688 1.18126 0.203728 1.3555C0.0717689 1.52974 -4.75872e-05 1.7458 2.36575e-08 1.96841C2.36575e-08 12.4891 8.12123 21 18.1253 21C18.3374 21.0001 18.5433 20.9248 18.7093 20.7862C18.8753 20.6476 18.9917 20.4541 19.0394 20.2371L19.9769 15.9714C20.0253 15.7453 19.9971 15.5086 19.8972 15.302C19.7973 15.0954 19.632 14.9318 19.4296 14.8393Z"
                      fill="white"
                    />
                  </svg>
                </div>

                {/* Text that expands */}
                <span className="w-0 group-hover:w-36 overflow-hidden transition-all duration-300 text-secondary font-bold whitespace-nowrap">
                  Contact Us
                </span>
              </button>
            </div>
          </Link>

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


      </div>
    </header>
  );
};

export default Header;