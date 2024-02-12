import Image from "next/image";
import hero from "../../assets/hero.jpg"

export default function hero1 ()  {
    return (
        <div className="p-2">
            <Image src={hero} alt="pie bond  digital marketing agency" className="w-screen h-screen rounded-2xl" />
            <div className=" flex flex-col font-extrabold pl-10 mb-20 absolute z-10 text-white lg:text-8xl justify-end ">
                <div className="absolute">
                    <h1>POWERFUL DIGITAL </h1>
                    <h1>BRANDING AGENCY</h1>
                </div>
            </div>
        </div>
    )
}
