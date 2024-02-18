"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Button from "../../components/assets/Buttons/button2"
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
        <div>
            <nav
                className={`bg-${scrolled ? "white" : "transparent"} dark:bg-${scrolled ? "white" : "transparent"} fixed w-full z-20 top-0 start-0`}
            >
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link
                        href="/"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <span className={`self-center text-4xl  whitespace-nowrap ${scrolled ? "text-black" : "dark:text-white"}`}>
                            Pie-Bond
                        </span>
                    </Link>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-sticky"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                        id="navbar-sticky"
                    >
                        <ul className="flex flex-col justify-items-center  space-b text-xl p-4 md:p-0 mt-4 font-medium border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                            <li>
                                <Link
                                    href="#"
                                    className={`block py-2 px-3 ${scrolled ? "text-black" : "text-white"} rounded md:bg-transparent  md:p-0`}
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className={`block py-2 px-3 ${scrolled ? "text-black" : "text-white"} rounded md:p-0   `}
                                >
                                    <Button/>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className={`block py-2 px-3 ${scrolled ? "text-black" : "text-white"} rounded  md:hover:bg-transparent  md:p-0   `}
                                >
                                    Services
                                </Link>
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
