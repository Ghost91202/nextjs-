import Link from 'next/link';
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
                    <h1 className="lg:text-4xl"><span className="text-cyan-500 ">Pie</span><span>-Bond</span>
                    <h1 className="lg:text-xl text-cyan-400">SERVICES</h1>                </h1>
                    <div className=" w-full justify-between grid grid-cols-2 lg:grid-cols-4  gap-10">
                        <div >
                            {/* <h1 className="lg:text-xl text-cyan-400">Service</h1> */}
                            <ul className="flex flex-col">
                                <Link className="footer-links group relative w-fit py-1"href="/services/appdevelopment">App Development <div className="absolute left-0 bottom-0 h-1 w-0 bg-white group-hover:w-full transition-all duration-500"></div> </Link>
                                <Link className="footer-links group relative w-fit py-1"href="/services/bingads">Bing Ads<div className="absolute left-0 bottom-0 h-1 w-0 bg-white group-hover:w-full transition-all duration-500"></div> </Link>
                                <Link className="footer-links group relative w-fit py-1"href="/services/contentmarketing">Content Marketing<div className="absolute left-0 bottom-0 h-1 w-0 bg-white group-hover:w-full transition-all duration-500"></div> </Link>
                                <Link className="footer-links group relative w-fit py-1"href="/services/conversionrateoptimization">Conversion Rate Optimization<div className="absolute left-0 bottom-0 h-1 w-0 bg-white group-hover:w-full transition-all duration-500"></div> </Link>
                                <Link className="footer-links group relative w-fit py-1"href="/services/digitalmarketing">Digital Marketing<div className="absolute left-0 bottom-0 h-1 w-0 bg-white group-hover:w-full transition-all duration-500"></div> </Link>
                            </ul>
                        </div>
                        <div >
                            {/* <h1 className="lg:text-xl text-cyan-400">Service</h1> */}
                            <ul className="flex flex-col">
                                <Link className="footer-links group relative w-fit py-1"href="/services/emailmarketing">E-Mail Marketing<div className="absolute left-0 bottom-0 h-1 w-0 bg-white group-hover:w-full transition-all duration-500"></div> </Link>
                                <Link className="footer-links group relative w-fit py-1"href="/services/facebookads">Facebook Ads<div className="absolute left-0 bottom-0 h-1 w-0 bg-white group-hover:w-full transition-all duration-500"></div> </Link>
                                <Link className="footer-links group relative w-fit py-1"href="/services/googleads">Google Ads<div className="absolute left-0 bottom-0 h-1 w-0 bg-white group-hover:w-full transition-all duration-500"></div> </Link>
                                <Link className="footer-links group relative w-fit py-1"href="/services/instagramads">Instagram Ads<div className="absolute left-0 bottom-0 h-1 w-0 bg-white group-hover:w-full transition-all duration-500"></div> </Link>
                                <Link className="footer-links group relative w-fit py-1"href="/services/javascriptdevelopment">Javascript Development<div className="absolute left-0 bottom-0 h-1 w-0 bg-white group-hover:w-full transition-all duration-500"></div> </Link>
                            </ul>
                        </div>
                        <div >
                            {/* <h1 className="lg:text-xl text-cyan-400">Service</h1> */}
                            <ul className="flex flex-col">
                                <Link className="footer-links group relative w-fit py-1"href="/services/landingpageoptimization">Landing Page Optimization<div className="absolute left-0 bottom-0 h-1 w-0 bg-white group-hover:w-full transition-all duration-500"></div> </Link>
                                <Link className="footer-links group relative w-fit py-1"href="/services/linkedinmarketing">Linkedin Marketing<div className="absolute left-0 bottom-0 h-1 w-0 bg-white group-hover:w-full transition-all duration-500"></div> </Link>
                                <Link className="footer-links group relative w-fit py-1"href="/services/marketingconsultation">Marketing Consultation<div className="absolute left-0 bottom-0 h-1 w-0 bg-white group-hover:w-full transition-all duration-500"></div> </Link>
                                <Link className="footer-links group relative w-fit py-1"href="/services/seo">SEO<div className="absolute left-0 bottom-0 h-1 w-0 bg-white group-hover:w-full transition-all duration-500"></div> </Link>
                                <Link className="footer-links group relative w-fit py-1"href="/services/socialmediamarketing">Social Media Marketing<div className="absolute left-0 bottom-0 h-1 w-0 bg-white group-hover:w-full transition-all duration-500"></div> </Link>
                            </ul>
                        </div>
                        <div >
                            {/* <h1 className="lg:text-xl text-cyan-400">Service</h1> */}
                            <ul className="flex flex-col">
                                <Link className="footer-links group relative w-fit py-1"href="/services/webdesign">Web Design<div className="absolute left-0 bottom-0 h-1 w-0 bg-white group-hover:w-full transition-all duration-500"></div> </Link>
                                <Link className="footer-links group relative w-fit py-1"href="/services/wordpressdevelopment">Wordpress Development<div className="absolute left-0 bottom-0 h-1 w-0 bg-white group-hover:w-full transition-all duration-500"></div> </Link>
                                <Link className="footer-links group relative w-fit py-1"href="/services/youtubeads">Youtube Ads<div className="absolute left-0 bottom-0 h-1 w-0 bg-white group-hover:w-full transition-all duration-500"></div> </Link>
                                {/* <Link className="footer-links group relative w-fit py-1"href="#">Content Marketing<div className="absolute left-0 bottom-0 h-1 w-0 bg-white group-hover:w-full transition-all duration-500"></div> </Link>
                                <Link className="footer-links group relative w-fit py-1"href="#">App Marketing<div className="absolute left-0 bottom-0 h-1 w-0 bg-white group-hover:w-full transition-all duration-500"></div> </Link> */}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
