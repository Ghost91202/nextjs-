"use client";
import Draggable from 'react-draggable';
import Slider from './Swiperslide.js';


export default function Sliders(params) {
  // Set the left and right bounds to restrict dragging Kunal
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
                        <h1 className=" lg:text-4xl  text-lg">{params.title}</h1>
                        <p className=" lg:w-3/4 text-sm sm:text-lg ">{params.desc}</p>

                        <button>
                            Schedule a call
                         </button>
                    </div>
                </div>
            </div>
     <Slider
     cardTitle1={params.cardTitle1}
     desc1 = {params.desc1}

     cardTitle2={params.cardTitle2}
     desc2={params.desc2}

     cardTitle3={params.cardTitle3}
     desc3={params.desc3}

     cardTitle4={params.cardTitle4}
     desc4={params.desc4}


     cardTitle5={params.cardTitle5}

     desc5={params.desc5}

     cardTitle6={params.cardTitle6}
     desc6={params.desc6}
     />

    </div>
  );
}
