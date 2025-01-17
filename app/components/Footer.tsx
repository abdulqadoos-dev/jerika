// src/components/layout/footer/index.js
import Link from 'next/link';
import { Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    menu: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' },
      { name: 'Reviews', href: '/reviews' },
      { name: 'Careers', href: '/careers' },
      { name: 'Refferals', href: '/refferals' },
    ],
    industries: [
      { name: 'Health & Pharmaceutics', href: '/industries/health' },
      { name: 'Banking & Finance', href: '/industries/banking' },
      { name: 'E- Commerce', href: '/industries/ecommerce' },
      { name: 'Hospitality', href: '/industries/hospitality' },
      { name: 'Software Houses', href: '/industries/software' },
      { name: 'Game Studios', href: '/industries/gaming' },
      { name: 'Public Sector', href: '/industries/public' },
    ],
    services: [
      { name: 'IT Services', href: '/services/it' },
      { name: 'IT Security', href: '/services/security' },
      { name: 'IT Helpdesk', href: '/services/helpdesk' },
      { name: 'Microsoft Office 365', href: '/services/office365' },
      { name: 'Network Monitoring', href: '/services/network' },
      { name: 'Managed IT Services', href: '/services/managed' },
    ],
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-primary">
              JERIKA Inc
            </Link>
            <div className="space-y-2 text-gray-300">
              <p>1 King Street West,</p>
              <p>Toronto, ON M5H 1A1</p>
              <p>Canada</p>
              <a href="mailto:info@jerika.ca" className="block hover:text-primary">
                info@jerika.ca
              </a>
              <a href="tel:+16472706400" className="block hover:text-primary">
                (647) 270-6400
              </a>
              <a href="tel:+15197889917" className="block hover:text-primary">
                (519) 788-9917
              </a>
            </div>
          </div>

          {/* Menu */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Menu</h3>
            <ul className="space-y-2">
              {footerLinks.menu.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries We Serve */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Industries We Serve</h3>
            <ul className="space-y-2">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Solutions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services & Solutions</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Toll Free & Social */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">Toll Free</h3>
              <a href="tel:+18444537452" className="text-primary hover:text-primary text-lg">
                1 844 4JERIKA
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary" aria-label="Instagram">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;