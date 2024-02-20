"use client";
// HoverButton.js
// HoverButton.js
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

import Image from "next/image";
import { useState } from "react";
import styles from "./HoverButton.module.css"; // You can create a CSS module for styling
import Nav1 from "../../../assets/nav1.jpg";

const HoverButton = ( { title, menu1, link1, link2, link3, link4, link5, link6, menu2, menu3, menu4, menu5, menu6, desc1, desc2, desc3, desc4, desc5, desc6 } ) => {
    const [ isHovered, setIsHovered ] = useState( false );
    const isValidLink1 = link1 && typeof link1 === "string";
    const isValidLink2 = link2 && typeof link2 === "string";
    const isValidLink3 = link3 && typeof link3 === "string";
    const isValidLink4 = link4 && typeof link4 === "string";
    const isValidLink5 = link5 && typeof link5 === "string";
    const isValidLink6 = link6 && typeof link6 === "string";

    const handleHover = () => {
        setIsHovered( true );
    };

    const handleMouseLeave = () => {
        setIsHovered( false );
    };

    return (
        <div className="">
            <div
                className={styles.container}
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
            >
                <button className={styles.button}>{title}</button>
                {isHovered && (
                    <div className={styles.drawer}>
                        <div className="flex  h-auto w-screen overflow-hidden p-10 bg-black text-white grid-flow-row ">

                            <div className=" grid grid-cols-3 grid-flow-row p-10">
                                 <div className=" flex flex-col gap-4">
                                {/* Use Link only if link is a valid string */}
                                {isValidLink1 ? (
                                    <div className=" text-blue-600 border-b pb-3 w-fit flex items-center lg:text-xl font-semibold ">
                                        <Link href={link1}>{menu1}</Link><IoIosArrowRoundForward />
                                    </div>
                                ) : (
                                    <span className="text-2xl font-bold">{menu1}</span>
                                )}
                                <p>{desc1}</p>
                            </div>
                            <div>
                                {isValidLink2 ? (
                                    <div className=" text-blue-600 border-b pb-3 w-fit flex items-center lg:text-xl font-semibold ">
                                        <Link href={link2}>{menu2}</Link><IoIosArrowRoundForward />
                                    </div>
                                ) : (
                                    <span className="text-2xl font-bold">{menu2}</span>
                                )}
                                <p>{desc2}</p>
                            </div>
                            <div>
                                {isValidLink3 ? (
                                    <div className=" text-blue-600 border-b pb-3 w-fit flex items-center lg:text-xl font-semibold ">
                                        <Link href={link3}>{menu3}</Link><IoIosArrowRoundForward />
                                    </div>
                                ) : (
                                    <span className="text-2xl font-bold">{menu3}</span>
                                )}
                                <p>{desc3}</p>
                            </div>
                            <div>
                                {isValidLink4 ? (
                                    <div className=" text-blue-600 border-b pb-3 w-fit flex items-center lg:text-xl font-semibold ">
                                        <Link href={link4}>{menu4}</Link><IoIosArrowRoundForward />
                                    </div>
                                ) : (
                                    <span className="text-2xl font-bold">{menu4}</span>
                                )}
                                <p>{desc4}</p>
                            </div>
                            <div>
                                {isValidLink5 ? (
                                    <div className=" text-blue-600 border-b pb-3 w-fit flex items-center lg:text-xl font-semibold ">
                                        <Link href={link5}>{menu5}</Link><IoIosArrowRoundForward />
                                    </div>
                                ) : (
                                    <span className="text-2xl font-bold">{menu5}</span>
                                )}
                                <p>{desc5}</p>
                            </div>
                            <div>
                                {isValidLink6 ? (
                                    <div className=" text-blue-600 border-b pb-3 w-fit flex items-center lg:text-xl font-semibold ">
                                        <Link href={link6}>{menu6}</Link><IoIosArrowRoundForward />
                                    </div>
                                ) : (
                                    <span className="text-2xl font-bold">{menu6}</span>
                                )}
                                <p>{desc6}</p>
                            </div>
                           </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HoverButton;
