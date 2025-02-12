
import Link from 'next/link';

import Logo from "@/public/images/logo.png"
import Image from "next/image"


const Footer = () => {
  const footerLinks = {
    menu: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Support', href: '/support' },
      { name: 'Services', href: '/services' },
    ]
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div className="col-span-2 space-y-10">
            <Link href="/">
              <Image
                src={Logo}
                alt="Jerika Inc Logo"
                width={120}
                height={40}
                priority
                className="object-contain"
              />
            </Link>

            <p>Simplifying IT, Empowering Business</p>
          </div>

          {/* Menu */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links</h3>
            <ul className="space-y-3">
              {footerLinks.menu.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/70 hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-white">
              Office
            </Link>

            <div className="space-y-5 text-white/70">

              <div className="">
                <p>1 King Street West,</p>
                <p>Toronto, ON M5H 1A1</p>
                <p>Canada</p>
              </div>
              <a href="mailto:info@jerika.ca" className="block hover:text-primary">
                info@jerika.ca
              </a>
              <div>
              <a href="tel:+16472706400" className="block hover:text-primary">
                (647) 270-6400
              </a>
              <a href="tel:+15197889917" className="block hover:text-primary">
                (519) 788-9917
              </a>
              </div>
            </div>
          </div>



        </div>
      </div>
    </footer>
  );
};

export default Footer;