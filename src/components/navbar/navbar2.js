/* @jsxImportSource react */
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { IoMdArrowDropdown } from 'react-icons/io';

const MenuItem = ({ label, submenus, isOpen, toggleMenu }) => (
  <div className="relative inline-block p-3 text-center">
    <button
      className="bg-white text-black items-center ring-0 flex ring-transparent"
      onClick={toggleMenu}
    >
      {label} <IoMdArrowDropdown />
    </button>

    {isOpen && (
      <div className="absolute mt-2 bg-white border text-black border-gray-300 rounded shadow">
        <ul>
          {submenus.map((submenu, index) => (
            <li key={index} className="p-2">
              <Link
                href={`/services/${label.replace(/\s+/g, '').toLowerCase() }/${submenu.replace(
                  /\s+/g,
                  ''
                )}`}
                passHref
              >
                <div>{submenu}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

const Menu = () => {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const toggleMenu = (index) => {
    setOpenMenuIndex((prevIndex) =>
      prevIndex === index ? null : index
    );
  };

  const menus = [
    {
      label: 'SEO',
      submenus: [
        'Seo Services',
        'Seo Reseller Services',
        'Local SEO',
        'Enter prise services',
        'ECommerce Seo',
      ],
    },
    {
      label: 'CONTENT MARKETING ',
      submenus: [
        'End to End Content Marketing',
        'Guest Posting',
        'Quora Marketing',
      ],
    },
    {
      label: 'PAID MARKETING',
      submenus: [
        'Remarking Services',
        'Amazon Ads',
        'Mobile AdvertiseMent',
        'PPC Reseller Services',
      ],
    },
    {
      label: 'DESIGN & DEVELOPMENT',
      submenus: [
        'Content Management',
        'Mobile Web Design',
        ' Web flow Development ',
        'Website Development',
        'WordPress Development',
      ],
    },
  ];

  return (
    <div className="z-50 hidden lg:flex w-full border-t-2 justify-center items-center">
      {menus.map((menu, index) => (
        <MenuItem
          key={index}
          label={menu.label}
          submenus={menu.submenus}
          isOpen={openMenuIndex === index}
          toggleMenu={() => toggleMenu(index)}
        />
      ))}
    </div>
  );
};

export default Menu;
