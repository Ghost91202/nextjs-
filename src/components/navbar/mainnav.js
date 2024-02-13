// Navbar.js
"use client";
// Navbar.js

import { useState } from 'react';
import Link from 'next/link';
import "./main.css"
const Navbar = () => {
  const [ isMenuOpen, setIsMenuOpen ] = useState( false );

  const toggleMenu = () => {
    setIsMenuOpen( !isMenuOpen );
  };

  return (
    <nav className="  relative z-50">
      <div className={`menu-toggle ${ isMenuOpen ? 'open' : '' }`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`menu ${ isMenuOpen ? 'open' : '' }`}>
        <div className="flex gap-20 bg-transparent justify-between  text-black p-6">
          <div>
            <h1 className="lg:text-4xl"><span className="text-cyan-500">Pie</span><span className=" text-yellow-400">-</span>Bond</h1>
          </div>
          <div className="flex gap-4 bg-transparent justify-center items-center text-black">
            <li>
              <Link href="/" className=" hover:border-l-2 hover:text-blue-600 pl-2  border-blue-700 ">HOME</Link>
            </li>
            <li className="dropdown">
              <Link href="/about" className=" hover:border-l-2 hover:text-blue-600 pl-2  border-blue-700 ">ABOUT</Link>
              {/* <div className="dropdown-content ">
                <div className="flex gap-10">
                  <div className="flex gap-2 flex-col">
                    <Link href="/company/vision&mission" className=" hover:border-l-2 hover:text-blue-600 pl-2  border-blue-700 ">Vision & mission</Link>

                    <Link href="/company/Team" className=" hover:border-l-2 hover:text-blue-600 pl-2  border-blue-700 ">Team </Link>
                    <Link href="/company/CAREERS" className=" hover:border-l-2 hover:text-blue-600 pl-2  border-blue-700 ">CAREERS</Link>
                    <Link href="/company/Blogs" className=" hover:border-l-2 hover:text-blue-600 pl-2  border-blue-700 ">BLOGS</Link>
                  </div>

                </div>
              </div> */}
            </li>
            <li className="dropdown">
              <a href="#" className=" hover:border-l-2 hover:text-blue-600 pl-2  border-blue-700 ">SERVICES</a>
              <div className="dropdown-content w-72">
                <div className="flex gap-10">
                  <div className="flex gap-2 flex-col">
                    <Link href="/services" className=" hover:border-l-2 hover:text-blue-600 pl-2  border-blue-700 ">DIGITAL MARKETING </Link>

                    {/* <Link href="/company/Team">WEB DEVELOPMENT </Link>
                    <Link href="/company/CAREERS"></Link>
                    <Link href="/company/Blogs">BLOGS</Link> */}
                  </div>

                </div>
              </div>
            </li>
            <li className="dropdown">
              <a href="#" className=" hover:border-l-2 hover:text-blue-600 pl-2  border-blue-700 ">INDUSTRIES</a>
              <div className="dropdown-content ">
                <div className="flex gap-10">
                  <div className="flex gap-2 flex-col">
                    <Link href="/INDUSTRIES/BFSI" className=" hover:border-l-2 hover:text-blue-600 pl-2  border-blue-700 ">BFSI</Link>
                    <Link href="/INDUSTRIES/B2B" className=" hover:border-l-2 hover:text-blue-600 pl-2  border-blue-700 ">B2B</Link>
                    <Link href="/INDUSTRIES/HEALTHCARE" className=" hover:border-l-2 hover:text-blue-600 pl-2  border-blue-700 ">HEALTHCARE  </Link>
                    <Link href="/INDUSTRIES/EDUCATION" className=" hover:border-l-2 hover:text-blue-600 pl-2  border-blue-700 ">EDUCATION   </Link>
                  </div>
                </div>
              </div>
            </li>
            <Link href="/BLOGS" className=" hover:border-l-2 hover:text-blue-600 pl-2  border-blue-700 ">BLOGS</Link>
          </div>
           <Link href="/CONTACT" className=" hover:border-l-2  pl-2  border-blue-700 border p-2 hover:bg-blue-700 hover:text-white">CONTACT</Link>

        </div>
      </ul>
      {/* <ul className={`menu ${ isMenuOpen ? 'open' : '' }`}>
        <div className="flex gap-20 bg-white justify-center text-black p-4">
          <div className="flex gap-4 bg-white text-black">
            <li className="dropdown">
              <a href="#">SEO</a>
              <div className="dropdown-content ">
                <div className="flex gap-10">
                  <div className="flex gap-2 flex-col">
                    <Link href="/services/SEO/seoservices">SEO SERVICES</Link>
                    <Link href="/services/SEO/ENTERPRISE-SEO">ENTERPRISE SEO  </Link>
                    <Link href="/services/SEO/E-COMMERCE-SEO">E-COMMERCE SEO</Link>
                    <Link href="/services/SEO/LOCAL-SEO">LOCAL SEO</Link>
                    <Link href="/services/SEO/SEO-RESELLER-SERVICES">SEO RESELLER SERVICES</Link>
                  </div>
                </div>
              </div>
            </li>

            <li className="dropdown">
              <a href="#">CONTENT MARKETING </a>
              <div className="dropdown-content ">
                <div className="flex gap-10">
                  <div className="flex gap-2 flex-col">
                    <Link href="/services/CONTENT-MARKETING/END_TO_END_CONTENT_MARKETING">END TO END CONTENT MARKETING </Link>

                    <Link href="/services/CONTENT-MARKETING/GUEST_POSTING">GUEST POSTING </Link>
                    <Link href="/services/CONTENT-MARKETING/QUORA_MARKETING">QUORA MARKETING  </Link>
                    <Link href="/services/CONTENT-MARKETING/DIGITAL_MARKETING">DIGITAL MARKETING   </Link>
                  </div>

                </div>
              </div>
            </li>
            <li className="dropdown">
              <a href="#">PAID MARKETING </a>
              <div className="dropdown-content ">
                <div className="flex gap-10">
                  <div className="flex gap-2 flex-col">
                    <Link href="/services/PAID-MARKETING/PPC-SERVICES">PPC SERVICES</Link>

                    <Link href="/services/PAID-MARKETING/RE-MARKETING -SERVICES">RE-MARKETING  SERVICES </Link>
                    <Link href="/services/PAID-MARKETING/MOBILE-ADVERTISEMENT">MOBILE ADVERTISEMENT  </Link>
                    <Link href="/services/PAID-MARKETING/AMAZON-ADS">AMAZON ADS   </Link>
                    <Link href="/services/PAID-MARKETING/PPX-RESELLER-SERVICES">PPX RESELLER SERVICES   </Link>
                  </div>

                </div>
              </div>
            </li>
            <li className="dropdown">
              <a href="#">DESIGN & DEVELOPMENT  </a>
              <div className="dropdown-content ">
                <div className="flex gap-10">
                  <div className="flex gap-2 flex-col">
                    <Link href="/services/DESIGN-&-DEVELOPMENT/WEBSITE_DESIGN_SERVICES">WEBSITE DESIGN SERVICES</Link>

                    <Link href="/services/DESIGN-&-DEVELOPMENT/MOBILE_WEBSITE_DESIGN">MOBILE WEBSITE DESIGN  </Link>
                    <Link href="/services/DESIGN-&-DEVELOPMENT/E-COMMERCE_WEBSITE_DESIGN">E-COMMERCE WEBSITE DESIGN   </Link>
                    <Link href="/services/DESIGN-&-DEVELOPMENT/WORDPRESS_WEBSITE_DEVELOPMENT">WORDPRESS WEBSITE DEVELOPMENT  </Link>
                  </div>

                </div>
              </div>
            </li>
          </div>
        </div>
      </ul> */}

    </nav>
  );
};

export default Navbar;
