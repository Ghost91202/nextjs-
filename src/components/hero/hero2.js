"use client";
import Image from "next/image";
import Img from "../../assets/conference.jpg"
const Hero = (props) => {



  return (
    <div className='font-serif '>
      <section >
        <Image src={Img} alt="" className=" absolute -z-10 h-full" />
        <div className="px-6 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"><span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-white to-green-600">India&apos;s </span>{props.mainhead}</h1>
          <p className="mb-8 text-sm  font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">{props.maindesc}</p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">

          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
