"use client";
import Image from "next/image";
import Img from "../../assets/conference.jpg"
const Hero = () => {



  return (
    <div className='font-serif'>
      <section >
        <Image src={Img} alt="" className=" absolute -z-10 h-full" />
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
