'use client';
import { FaGripLines } from "react-icons/fa";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import "./navbar.css"
function NavBar() {
  const [ navbar, setNavbar ] = useState( false );
  return (
    <>
      <div className="flex w-screen p-4 pt-6 justify-between">
        <div className="">
          <h1>Logo</h1>
        </div>
        <div className="flex  pr-20 g justify-between">
          <div className="grid grid-flow-cols  gap-5 grid-cols-2">
            <div className="grid grid-flow-cols grid-cols-2 gap-5 p-2   items-center rounded-lg text-white bg-black justify-between">
              <h1>
                hello1
              </h1>
              <h1>
                hello2
              </h1>
            </div>
            <div className="rounded-lg flex justify-center items-center text-white bg-cyan-500">
              <h1>
                hello3
              </h1>
            </div>
          </div>
          <div>
            <input type="checkbox" id="active" />
            <label htmlFor="active" className="menu-btn">
              <i className="fas fa-bars"></i>
            </label>
            <div className="wrapper">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Feedback</a></li>
              </ul>
            </div>

          </div>
        </div>

      </div>

    </>
  );
}

export default NavBar;
