import Image from "next/image";

export default function section5() {
    return (
        <div className="flex  p-10 gap-44  h-screen">
            <div className="flex flex-col gap-5">
                <h1 className="flex text-7xl font-extrabold text-slate-950 flex-col">
                    OUR
                    <span>PROCESS</span>
                </h1>
                <p className="w-96 text-2xl font-bold         ">
                  Our Digital Marketing campaigns drive Awareness, Traffic, and boost Cross-Channel sales.
                </p>
            </div>
            <div className="flex gap-10">
                <div>
                    <Image src="https://images.unsplash.com/photo-1610135241972-2086ecaf65d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHR1cmlzbXxlbnwwfHwwfHx8MA%3D%3D" alt="vistaCraze" className=" h-96 rounded-lg" />
                    <div className=" flex flex-col font-extrabold pl-2 mb-20 absolute z-10 text-white lg:text-6xl justify-end ">
                <div className="absolute">
                    <h1>T </h1>
                    <h1>A</h1>
                    <h1>R</h1>
                    <h1>G</h1>
                    <h1>E</h1>
                     <h1 className="flex ">T <span className="text-sm flex w-52 -mt-5">                    We create winning brand strategies and craft culture-driven stories and content.
</span></h1>

                </div>
            </div>
                </div>
                <div>
                    <Image src="https://images.unsplash.com/photo-1578825056472-abefb9de989f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="vistaCraze" className=" h-3/4 w-72 rounded-lg" />
                    <div className=" flex flex-col font-extrabold pl-2 mb-20 absolute z-10 text-white lg:text-6xl justify-end ">
                <div className="absolute">
                    <h1>L </h1>
                    <h1>A</h1>
                    <h1>U</h1>
                    <h1>N</h1>
                    <h1>C</h1>
                     <h1 className="flex ">H <span className=" text-base flex w-52 -mt-10">High Performance Marketing across Social, Search, Display, Video, Mail, and more.</span></h1>

                </div>
            </div>
                </div>
                <div>
                    <Image src="https://images.unsplash.com/photo-1615147990135-2c4ccb0876e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" alt="vistaCraze" className=" h-full w-72 rounded-lg" />
                    <div className=" flex flex-col font-extrabold pl-2 mb-20 absolute z-10 text-white lg:text-6xl justify-end ">
                <div className="absolute">
                    <h1>G </h1>
                    <h1>R</h1>
                    <h1>O</h1>
                     <h1 className="flex ">W <span className="text-xl flex w-52 -mt-6"> Measure and optimize LCV, CPA, and ROAS.</span></h1>

                </div>
            </div>
                </div>
            </div>
        </div>
    )
}
