import Link from "next/link";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Map from "../../assets/map.png"
import Image from "next/image";
import { CgArrowTopRight } from "react-icons/cg";

export default function footer( params ) {
    return (
        <div className="p-4 ">
            <div className="bg-slate-950 p-16 rounded-xl">
                <div className="lg:grid lg:grid-flow-col h-96 gap-6 lg:grid-cols-3">
                    <div className=" bg-blue-100 flex flex-col gap-10 rounded-lg p-5">
                        <h1 className="lg:text-4xl font-extrabold text-balance">
                            HAVE ANY QUESTIONS?
                            CONTACT US</h1>
                        <div>
                            <h1 className="text-xs text-black font-bold opacity-30">FOR DIGITAL MARKETING INQUIRIES</h1>
                            <Link href="" className=" font-bold"> +91 9517156038</Link>
                            <h1 className="text-xs text-black font-bold opacity-30">FOR WEB & APP DEVELOPMENT INQUIRIES</h1>
                            <Link href="" className=" font-bold"> +91 8543810264</Link>
                        </div>
                        <Link className="bg-slate-950 p-4 lg:w-44 flex justify-center items-center rounded-lg text-white" href="" >CONTACT US</Link>
                    </div>
                    <div className=" bg-indigo-300 flex flex-col justify-between rounded-lg  p-5">
                        <div className="lg:text-4xl font-extrabold text-balance">
                            CONNECT WITH VISTACRAZE
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-white p-3 rounded-lg">

                                <FaFacebookF className=" rounded-lg text-black text-2xl " />
                            </div>
                            <div className="bg-white p-3 rounded-lg">

                                <GrInstagram className=" rounded-lg text-black text-2xl " />
                            </div>
                            <div className="bg-white p-3 rounded-lg">

                                <FaLinkedinIn className=" rounded-lg text-black text-2xl " />
                            </div>

                            <div className="bg-white p-3 rounded-lg">

                                <FaTwitter className=" rounded-lg text-black text-2xl " />
                            </div>
                        </div>
                    </div>
                    <div className=" bg-blue-100 rounded-lg">
                        <Image src={Map} alt="vistaCraze digital marketing agency" className=" lg:h-96" />
                        <div className=" flex flex-col font-extrabold pl-10 mb-20 absolute z-10  justify-end ">
                            <div className="absolute bg-white flex h-40 rounded-lg p-2 gap-20">
                                <div  className=" flex flex-col justify-between">
                                    <h1 className="lg:text-4xl">KANPUR</h1>
                                    <Link href="" className="lg:text-2xl flex ">8543810264
                                    <CgArrowTopRight/></Link>
                                </div>
                                <div className=" bg-cyan-500 text-white lg:text-2xl rounded-lg flex justify-center items-center p-8">
                                    <h1 className="-rotate-90">GO</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
