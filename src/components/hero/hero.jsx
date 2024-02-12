import Image from "next/image";


export default function hero ()  {
    return (
        <div className="p-2 ">
            <Image src="https://images.unsplash.com/photo-1640955014216-75201056c829?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcHBlciUyMGZvciUyMHBjJTIwMTYlM0E5fGVufDB8fDB8fHww" alt="vistacarze digital marketing agency" className="w-screen h-screen rounded-2xl" />
            <div className=" flex flex-col font-extrabold pl-10 mb-20 absolute z-10 text-white lg:text-8xl justify-end ">
                <div className="absolute">
                    <h1>POWERFUL DIGITAL </h1>
                    <h1>BRANDING AGENCY</h1>
                </div>
            </div>
        </div>
    )
}
