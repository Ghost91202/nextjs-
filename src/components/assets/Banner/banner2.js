import Image from "next/image"
import Link from "next/link"
import { IoIosArrowRoundForward } from "react-icons/io";


export default function banner2( { icons, title, desc,title2 , link, img } ) {
    const isValidLink = link && typeof link === "string";

    return (
        <div className=" h-auto overflow-hidden ">
            <Image src={img} alt="" className=" absolute h-96 -z-10" />
            <div className="text-white flex flex-col gap-5 lg:w-3/4 p-4 lg:p-20">
                <h1 className="lg:text-5xl text-2xl ">{title}

                </h1>
                <p className="lg:text-xl">{title2}</p>

                {isValidLink ? (
                    <div className="  flex text-white items-center lg:text-xl font-semibold ">
                        <Link href={link} className="border p-2">ENQUIRE NOW</Link><IoIosArrowRoundForward />
                    </div>
                ) : (
                    <span className="text-xl">ENQUIRE NOW</span>
                )}
            </div>
        </div>
    )
}
