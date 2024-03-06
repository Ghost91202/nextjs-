// Navbar.js
"use client";
"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Button from "../../components/assets/Buttons/button2"
import Drawer from "./drawer"
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 500;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="relative">
            <nav
                className={`bg-${scrolled ? "white" : "transparent"} dark:bg-${scrolled ? "white" : "transparent"} fixed w-full z-20 top-0 start-0`}
            >
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link
                        href="/"
                        className="flex items-center space-x-3 rtl:space-x-reverse" >
                        <span className={`self-center text-4xl  whitespace-nowrap ${scrolled ? "text-black" : "dark:text-white"}`}>
                            Pie Bond
                        </span>
                    </Link>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                         <Drawer className="text-blue-600  z-50 relative" />

                    </div>
                    <div
                        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                        id="navbar-sticky" >
                        <ul className="flex flex-col justify-items-center  space-b text-xl p-4 md:p-0 mt-4 font-medium border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                            <li>
                                <Link
                                    href="#"
                                    className={`block py-2 px-3 ${scrolled ? "text-black" : "text-white"} rounded md:bg-transparent  md:p-0`}
                                    aria-current="page" >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Button
                                    title="services"
                                    menu1="App Development"
                                    link1="/services/appdevelopment"
                                    // desc1="Achieve long-term growth in organic traffic, qualified leads, and pipeline with performance content and SEO."
                                    menu2="Bing Ads"
                                    link2="/services/bingads"
                                    // desc2="Achieve long-term growth in organic traffic, qualified leads, and pipeline with performance content and SEO."
                                    menu3="Content Marketing"
                                    link3="/services/contentmarketing"
                                    // desc3="Achieve long-term growth in organic traffic, qualified leads, and pipeline with performance content and SEO."
                                    menu4="Conversion Rate Optimization"
                                    link4="/services/conversionrateoptimization"
                                    // desc4="Achieve long-term growth in organic traffic, qualified leads, and pipeline with performance content and SEO."
                                    menu5="Digital Marketing"
                                    link5="/services/digitalmarketing"
                                    // desc5="Achieve long-term growth in organic traffic, qualified leads, and pipeline with performance content and SEO."
                                    menu6="E-Mail Marketing"
                                    link6="/services/emailmarketing"
                                    // desc6="Achieve long-term growth in organic traffic, qualified leads, and pipeline with performance content and SEO."
                                    menu7="Facebook Ads"
                                    link7="/services/facebookads"
                                    // desc7="Achieve long-term growth in organic traffic, qualified leads, and pipeline with performance content and SEO."
                                    menu8="Google Ads"
                                    link8="/services/googleads"
                                    // desc8="Achieve long-term growth in organic traffic, qualified leads, and pipeline with performance content and SEO."
                                    menu9="Instagram Ads"
                                    link9="/services/instagramads"
                                    // desc9="Achieve long-term growth in organic traffic, qualified leads, and pipeline with performance content and SEO."
                                    menu10="Javascript Development"
                                    link10="/services/javascriptdevelopment"
                                    // desc10="Achieve long-term growth in organic traffic, qualified leads, and pipeline with performance content and SEO."
                                    menu11="Landing Page Optimization"
                                    link11="/services/landingpageoptimization"
                                    // desc11="Achieve long-term growth in organic traffic, qualified leads, and pipeline with performance content and SEO."
                                    menu12="Linkedin Marketing"
                                    link12="/services/linkedinmarketing"
                                    // desc12="Achieve long-term growth in organic traffic, qualified leads, and pipeline with performance content and SEO."
                                    menu13="Marketing Consultation"
                                    link13="/services/marketingconsultation"
                                    // desc13="Achieve long-term growth in organic traffic, qualified leads, and pipeline with performance content and SEO."
                                    menu14="SEO"
                                    link14="/services/seo"
                                    // desc14="Achieve long-term growth in organic traffic, qualified leads, and pipeline with performance content and SEO."
                                    menu15="Social Media Marketing"
                                    link15="/services/socialmediamarketing"
                                    // desc15="Achieve long-term growth in organic traffic, qualified leads, and pipeline with performance content and SEO."
                                    menu16="Web Design"
                                    link16="/services/webdesign"
                                    // desc16="Achieve long-term growth in organic traffic, qualified leads, and pipeline with performance content and SEO."
                                    menu17="Wordpress Development"
                                    link17="/services/wordpressdevelopment"
                                    // desc17="Achieve long-term growth in organic traffic, qualified leads, and pipeline with performance content and SEO."
                                    menu18="Youtube Ads"
                                    link18="/services/youtubeads"
                                    // desc18="Achieve long-term growth in organic traffic, qualified leads, and pipeline with performance content and SEO."
                                    />

                            </li>
                            <li>
                                {/* <Link
                                    href="#"
                                    className={`block py-2 px-3 ${scrolled ? "text-black" : "text-white"} rounded  md:hover:bg-transparent  md:p-0   `}
                                >
                                    Services
                                </Link> */}
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className={`block py-2 px-3 ${scrolled ? "text-black" : "text-white"} rounded md:p-0   `}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
