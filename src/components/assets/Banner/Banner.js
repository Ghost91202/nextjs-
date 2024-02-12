import Image from "next/image"
import Button from "../Buttons/Button"
import Banner1 from "../../../assets/Banner1.avif"
export default function Banner( params ) {
    return (
        <div className="lg:h-screen lg:overflow-hidden w-screen mb-10 p-5">
            <div className=" bg-cyan-500 rounded-xl grid grid-flow h-auto lg:h-screen grid-cols-1 lg:grid-cols-2 ">
                <div className="p-5 lg:p-10  flex gap-5 flex-col">
                    <h1 className="text-white text-2xl sm:text-6xl mt-5 font-bold">Digital Marketing For Banking, Financial Services and Insurance (BFSI) Industry
                    </h1>
                    <p className=" lg:text-xl text-white">A trusted digital marketing partner for leading (BFSI) companies. Get seen, win trust and build your brand online with our expertise.
                    </p>
                    <Button Button1="Get Quote"/>

                </div>
                <div className="p-10">
                    <Image src={Banner1} alt="pie-bond digital marketing agency" className="lg:h-full  rounded-xl" />
                </div>
            </div>
        </div>
    )
}
