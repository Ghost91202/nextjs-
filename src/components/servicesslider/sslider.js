"use client";
import Draggable from 'react-draggable';
import Slider from './Swiperslide.js';


export default function Sliders() {
  // Set the left and right bounds to restrict dragging
  const bounds = { left: -2000, right: 400 };

  return (
    <div className='2xl:px-40 bg-blue-800 text-white flex flex-col font-serif gap-20  p-10 lg:p-20'>
      <div>
                <div className=" flex flex-col gap-5">
                    <div className=" flex gap-2 ">
                        <h1 className=" flex gap-2">Home <span>/</span> </h1>
                        <h1 className=" flex gap-2">Digital Marketing Services <span>/</span></h1>
                        <h1>SEO</h1>
                    </div>
                    <div className=" flex flex-col gap-10">
                        <h1 className=" lg:text-4xl  text-lg">Professional SEO Agency in India</h1>
                        <p className=" lg:w-3/4 text-sm sm:text-lg ">At Pi-bond Digital, we understand the power of SEO in transforming your digital footprint. Our experienced team offers bespoke SEO services, ensuring your website not only engages but converts your audience into loyal customers. Our holistic approach to SEO encompasses technical finesse, content mastery and authoritative link-building, all tailored to your unique business needs.</p>

                        <button>
                            Schedule a call
                         </button>
                    </div>
                </div>
            </div>
     <Slider />

    </div>
  );
}
