import Image from "next/image"
import seoimg2 from "../../../assets/seoimg2.jpg"
export default function section2( {title, desc1, desc2} ) {
    return (
        <div className=" flex gap-10 font-serif p-10">
            <Image src={seoimg2} alt="pie-bond " className="lg:w-96 " />
            <div className=" flex flex-col gap-5 lg:p-10">
                <h1 className="lg:text-4xl text-2xl">{title}</h1>
                <p className="lg:text-xl text-lg">{desc1}</p>
                <p>{desc2}</p>
            </div>
        </div>
    )
}
