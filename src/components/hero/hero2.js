"use client";

import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [blendModeClass, setBlendModeClass] = useState('');

  useEffect(() => {
    // Apply blend mode after 5 seconds
    const timeout = setTimeout(() => {
      setBlendModeClass('bg-blend-multiply');
    }, 5000);

    // Clear the timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='font-serif'>
      <section className={`bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 ${blendModeClass} transition-all duration-1000`}>
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">We invest in the world&apos;s potential</h1>
          <p className="mb-8 text-sm  font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Here at PieBond we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
