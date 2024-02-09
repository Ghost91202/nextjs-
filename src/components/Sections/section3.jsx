
import Image from "next/image"

import { BsArrowUpRight } from "react-icons/bs";



export default function section3() {
    return (
        <div className="p-3 relative">
             <div className=" p-5 relative z-10 ">
                <div className=" absolute rounded-xl mt-10 flex flex-col gap-5 bg-teal-500 p-5 w-1/2   text-white h-auto  z-5">
                    <div className="lg:text-6xl flex  font-extrabold ">
                        <h1 ClassName=" flex flex-row  text-xl">FOR STARTUPS<BsArrowUpRight className="text-white hidden"/>
                        </h1>
                    </div>
                    <div className="text-3xl font-extrabold text-balance pr-10">
                        <h1>
                            YOUR IDEAS, OUR EXPERTISE, INFINITE POSSIBILITIES.

                        </h1>
                    </div>
                    <div className="text-lg font-thin text-balance pr-10">
                        <h1>

                            WELCOME TO VISTA CRAZE, WHERE CREATIVITY MEETS EXPERTISE IN THE WORLD OF DIGITAL SERVICES. AS A DYNAMIC AND INNOVATIVE FREELANCING AGENCY, WE TAKE PRIDE IN DELIVERING TOP-NOTCH SOLUTIONS TAILORED TO MEET THE UNIQUE NEEDS OF OUR CLIENTS.
                        </h1>
                    </div>
                    <div className="bg-white text-slate-950 w-36 flex justify-center items-center rounded-lg font-semibold p-4 ">
                        <button>GET A QUOTE</button>
                    </div>
                </div>
            </div>

            <img src="https://images.unsplash.com/photo-1480796927426-f609979314bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D" alt=
                "VistaCraze digital marketing agency" className=" w-screen mr-20 rounded-2xl h-screen relative -z-2 " />

        </div>

    )
}
