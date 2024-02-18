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
        <div className="p-4  h-auto">
            <div className="bg-slate-950 flex flex-col gap-10 p-10 lg:p-16 rounded-xl">
                
                <div className=" text-white flex flex-col gap-5">
                    <h1 className="lg:text-3xl"><span className="text-cyan-500 ">Pie</span>-Bond                </h1>
                    <div className=" w-full justify-between grid grid-cols-2 lg:grid-cols-4  gap-10">
                        <div >
                            <h1 className="lg:text-xl text-cyan-400">Service</h1>
                            <ul className="flex flex-col">
                                <Link href="#">SEO</Link>
                                <Link href="#">App Marketing</Link>
                                <Link href="#">Digital Marketing Services</Link>
                                <Link href="#">Content Marketing</Link>
                                <Link href="#">App Marketing</Link>
                            </ul>
                        </div>
                        <div >
                            <h1 className="lg:text-xl text-cyan-400">Service</h1>
                            <ul className="flex flex-col">
                                <Link href="#">SEO</Link>
                                <Link href="#">App Marketing</Link>
                                <Link href="#">Digital Marketing Services</Link>
                                <Link href="#">Content Marketing</Link>
                                <Link href="#">App Marketing</Link>
                            </ul>
                        </div>
                        <div >
                            <h1 className="lg:text-xl text-cyan-400">Service</h1>
                            <ul className="flex flex-col">
                                <Link href="#">SEO</Link>
                                <Link href="#">App Marketing</Link>
                                <Link href="#">Digital Marketing Services</Link>
                                <Link href="#">Content Marketing</Link>
                                <Link href="#">App Marketing</Link>
                            </ul>
                        </div>
                        <div >
                            <h1 className="lg:text-xl text-cyan-400">Service</h1>
                            <ul className="flex flex-col">
                                <Link href="#">SEO</Link>
                                <Link href="#">App Marketing</Link>
                                <Link href="#">Digital Marketing Services</Link>
                                <Link href="#">Content Marketing</Link>
                                <Link href="#">App Marketing</Link>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
