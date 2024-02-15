import Image from "next/image";
import hero from "../../assets/hero.jpg"

export default function hero1 ()  {
    return (
        <div className="p-2 w-screen overflow-x-hidden">
            <div className="h-xl">
            <Image src={hero} alt="pie bond  digital marketing agency" className="w-full h-screen  rounded-2xl" />
            </div>
            <div className=" flex flex-col font-extrabold pl-10  absolute z-10 text-white lg:text-8xl text-4xl justify-end -mt-20 ">
                <div className="absolute">
                    <h1>POWERFUL DIGITAL </h1>
                    <h1>BRANDING AGENCY</h1>
                </div>
            </div>
        </div>
    )
}
