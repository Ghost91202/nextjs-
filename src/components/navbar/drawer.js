"use client";
import React, { useState } from "react";
import { TfiAlignRight } from "react-icons/tfi";
import Link from "next/link";
// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
    setShowServices(false); // Close the services dropdown when closing the drawer
  };

  const toggleServices = () => {
    setShowServices((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={toggleDrawer} className="text-white sm:hidden block">
        <TfiAlignRight />
      </button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
      >
        <div className="p-10 bg-gray-800 text-white h-full">
          <div className="text-3xl pb-8 ">
            Menu
          </div>
          <div className="text-xl">
            <Link href="/">Home</Link>
          </div>
          <div onClick={toggleServices} className="cursor-pointer  py-4">
            <span className="text-xl">Services</span>
            <span className="ml-2">{showServices ? '▲' : '▼'}</span>
            {showServices && (
              <div>
                <div>
          <Link href="/services/appdevelopment" className=""> App Development </Link>
        </div>
        <div>
          <Link href="/services/bingads"> Bing Ads </Link>
        </div>
        <div>
          <Link href="/services/contentmarketing">Content Marketing </Link>
        </div>
        <div>
          <Link href="/services/conversionrateoptimization">
            
            Conversion Rate Optimization
          </Link>
        </div>
        <div>
          <Link href="/services/digitalmarketing"> Digital Marketing </Link>
        </div>
        <div>
          <Link href="/services/emailmarketing"> E-Mail Marketing </Link>
        </div>
        <div>
          <Link href="/services/facebookads"> Facebook Ads </Link>
        </div>
        <div>
          <Link href="/services/googleads"> Google Ads </Link>
        </div>
        <div>
          <Link href="/services/instagramads"> Instagram Ads </Link>
        </div>
        <div>
          <Link href="/services/javascriptdevelopment">
            {" "}
            Javascript Development{" "}
          </Link>
        </div>
        <div>
          <Link href="/services/landingpageoptimization">
            {" "}
            Landing Page Optimization{" "}
          </Link>
        </div>
        <div>
          <Link href="/services/linkedinmarketing"> Linkedin Marketing </Link>
        </div>
        <div>
          <Link href="/services/marketingconsultation">
            {" "}
            Marketing Consultation{" "}
          </Link>
        </div>
        <div>
          <Link href="/services/seo"> SEO </Link>
        </div>
        <div>
          <Link href="/services/socialmediamarketing">
            {" "}
            Social Media Marketing{" "}
          </Link>
        </div>
        <div>
          <Link href="/services/webdesign"> Web Design </Link>
        </div>
        <div>
          <Link href="/services/wordpressdevelopment">
            {" "}
            Wordpress Development{" "}
          </Link>
        </div>
        <div>
          <Link href="/services/youtubeads"> Youtube Ads </Link>
        </div>
              </div>
            )}
          </div>
          <div className="text-xl ">
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default App;
