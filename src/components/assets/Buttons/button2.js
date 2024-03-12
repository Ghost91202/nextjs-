"use client";
// HoverButton.js
// HoverButton.js
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

import Image from "next/image";
import { useState } from "react";
import styles from "./HoverButton.module.css"; // You can create a CSS module for styling
import Nav1 from "../../../assets/nav1.jpg";

const HoverButton = ({
  title,
  link1,
  link2,
  link3,
  link4,
  link5,
  link6,
  link7,
  link8,
  link9,
  link10,
  link11,
  link12,
  link13,
  link14,
  link15,
  link16,
  link17,
  link18,
  menu1,
  menu2,
  menu3,
  menu4,
  menu5,
  menu6,
  menu7,
  menu8,
  menu9,
  menu10,
  menu11,
  menu12,
  menu13,
  menu14,
  menu15,
  menu16,
  menu17,
  menu18,
  desc1,
  desc2,
  desc3,
  desc4,
  desc5,
  desc6,
  desc7,
  desc8,
  desc9,
  desc10,
  desc11,
  desc12,
  desc13,
  desc14,
  desc15,
  desc16,
  desc17,
  desc18,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isValidLink1 = link1 && typeof link1 === "string";
  const isValidLink2 = link2 && typeof link2 === "string";
  const isValidLink3 = link3 && typeof link3 === "string";
  const isValidLink4 = link4 && typeof link4 === "string";
  const isValidLink5 = link5 && typeof link5 === "string";
  const isValidLink6 = link6 && typeof link6 === "string";
  const isValidLink7 = link7 && typeof link7 === "string";
  const isValidLink8 = link8 && typeof link8 === "string";
  const isValidLink9 = link9 && typeof link9 === "string";
  const isValidLink10 = link10 && typeof link10 === "string";
  const isValidLink11 = link11 && typeof link11 === "string";
  const isValidLink12 = link12 && typeof link12 === "string";
  const isValidLink13 = link13 && typeof link13 === "string";
  const isValidLink14 = link14 && typeof link14 === "string";
  const isValidLink15 = link15 && typeof link15 === "string";
  const isValidLink16 = link16 && typeof link16 === "string";
  const isValidLink17 = link17 && typeof link17 === "string";
  const isValidLink18 = link18 && typeof link18 === "string";

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
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
              <div className=" grid grid-cols-3 grid-flow-row p-20">
                <div className=" flex flex-col gap-4">
                  {/* Use Link only if link is a valid string */}
                  {isValidLink1 ? (
                    <div className=" text-blue-600  pb-3  w-fit flex items-center lg:text-xl font-semibold relative group px-2 ">
                      <Link href={link1}>{menu1}</Link>
                      <IoIosArrowRoundForward />{" "}
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-cyan-500 group-hover:w-full transition-all duration-300"></div>
                    </div>
                  ) : (
                    <span className="text-2xl font-bold">{menu1}</span>
                  )}
                  <p>{desc1}</p>
                </div>
                <div>
                  {isValidLink2 ? (
                    <div className=" text-blue-600  pb-3 w-fit flex items-center lg:text-xl font-semibold relative group px-2 ">
                      <Link href={link2}>{menu2}</Link>
                      <IoIosArrowRoundForward />{" "}
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-cyan-500 group-hover:w-full transition-all duration-300"></div>
                    </div>
                  ) : (
                    <span className="text-2xl font-bold">{menu2}</span>
                  )}
                  <p>{desc2}</p>
                </div>
                <div>
                  {isValidLink3 ? (
                    <div className=" text-blue-600  pb-3 w-fit flex items-center lg:text-xl font-semibold relative group px-2 ">
                      <Link href={link3}>{menu3}</Link>
                      <IoIosArrowRoundForward />{" "}
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-cyan-500 group-hover:w-full transition-all duration-300"></div>
                    </div>
                  ) : (
                    <span className="text-2xl font-bold">{menu3}</span>
                  )}
                  <p>{desc3}</p>
                </div>
                <div>
                  {isValidLink4 ? (
                    <div className=" text-blue-600  pb-3 w-fit flex items-center lg:text-xl font-semibold relative group px-2 ">
                      <Link href={link4}>{menu4}</Link>
                      <IoIosArrowRoundForward />{" "}
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-cyan-500 group-hover:w-full transition-all duration-300"></div>
                    </div>
                  ) : (
                    <span className="text-2xl font-bold">{menu4}</span>
                  )}
                  <p>{desc4}</p>
                </div>
                <div>
                  {isValidLink5 ? (
                    <div className=" text-blue-600  pb-3 w-fit flex items-center lg:text-xl font-semibold relative group px-2 ">
                      <Link href={link5}>{menu5}</Link>
                      <IoIosArrowRoundForward />{" "}
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-cyan-500 group-hover:w-full transition-all duration-300"></div>
                    </div>
                  ) : (
                    <span className="text-2xl font-bold">{menu5}</span>
                  )}
                  <p>{desc5}</p>
                </div>
                <div>
                  {isValidLink6 ? (
                    <div className=" text-blue-600  pb-3 w-fit flex items-center lg:text-xl font-semibold relative group px-2 ">
                      <Link href={link6}>{menu6}</Link>
                      <IoIosArrowRoundForward />{" "}
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-cyan-500 group-hover:w-full transition-all duration-300"></div>
                    </div>
                  ) : (
                    <span className="text-2xl font-bold">{menu6}</span>
                  )}
                  <p>{desc6}</p>
                </div>
                <div>
                  {isValidLink7 ? (
                    <div className=" text-blue-600  pb-3 w-fit flex items-center lg:text-xl font-semibold relative group px-2 ">
                      <Link href={link7}>{menu7}</Link>
                      <IoIosArrowRoundForward />{" "}
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-cyan-500 group-hover:w-full transition-all duration-300"></div>
                    </div>
                  ) : (
                    <span className="text-2xl font-bold">{menu7}</span>
                  )}
                  <p>{desc7}</p>
                </div>
                <div>
                  {isValidLink8 ? (
                    <div className=" text-blue-600  pb-3 w-fit flex items-center lg:text-xl font-semibold relative group px-2 ">
                      <Link href={link8}>{menu8}</Link>
                      <IoIosArrowRoundForward />{" "}
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-cyan-500 group-hover:w-full transition-all duration-300"></div>
                    </div>
                  ) : (
                    <span className="text-2xl font-bold">{menu8}</span>
                  )}
                  <p>{desc8}</p>
                </div>
                <div>
                  {isValidLink9 ? (
                    <div className=" text-blue-600  pb-3 w-fit flex items-center lg:text-xl font-semibold relative group px-2 ">
                      <Link href={link9}>{menu9}</Link>
                      <IoIosArrowRoundForward />{" "}
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-cyan-500 group-hover:w-full transition-all duration-300"></div>
                    </div>
                  ) : (
                    <span className="text-2xl font-bold">{menu9}</span>
                  )}
                  <p>{desc9}</p>
                </div>
                <div>
                  {isValidLink10 ? (
                    <div className=" text-blue-600  pb-3 w-fit flex items-center lg:text-xl font-semibold relative group px-2 ">
                      <Link href={link10}>{menu10}</Link>
                      <IoIosArrowRoundForward />{" "}
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-cyan-500 group-hover:w-full transition-all duration-300"></div>
                    </div>
                  ) : (
                    <span className="text-2xl font-bold">{menu10}</span>
                  )}
                  <p>{desc10}</p>
                </div>
                <div>
                  {isValidLink11 ? (
                    <div className=" text-blue-600  pb-3 w-fit flex items-center lg:text-xl font-semibold relative group px-2 ">
                      <Link href={link11}>{menu11}</Link>
                      <IoIosArrowRoundForward />{" "}
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-cyan-500 group-hover:w-full transition-all duration-300"></div>
                    </div>
                  ) : (
                    <span className="text-2xl font-bold">{menu11}</span>
                  )}
                  <p>{desc11}</p>
                </div>
                <div>
                  {isValidLink12 ? (
                    <div className=" text-blue-600  pb-3 w-fit flex items-center lg:text-xl font-semibold relative group px-2 ">
                      <Link href={link12}>{menu12}</Link>
                      <IoIosArrowRoundForward />{" "}
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-cyan-500 group-hover:w-full transition-all duration-300"></div>
                    </div>
                  ) : (
                    <span className="text-2xl font-bold">{menu12}</span>
                  )}
                  <p>{desc12}</p>
                </div>
                <div>
                  {isValidLink13 ? (
                    <div className=" text-blue-600  pb-3 w-fit flex items-center lg:text-xl font-semibold relative group px-2 ">
                      <Link href={link13}>{menu13}</Link>
                      <IoIosArrowRoundForward />{" "}
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-cyan-500 group-hover:w-full transition-all duration-300"></div>
                    </div>
                  ) : (
                    <span className="text-2xl font-bold">{menu13}</span>
                  )}
                  <p>{desc13}</p>
                </div>
                <div>
                  {isValidLink14 ? (
                    <div className=" text-blue-600  pb-3 w-fit flex items-center lg:text-xl font-semibold relative group px-2 ">
                      <Link href={link14}>{menu14}</Link>
                      <IoIosArrowRoundForward />{" "}
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-cyan-500 group-hover:w-full transition-all duration-300"></div>
                    </div>
                  ) : (
                    <span className="text-2xl font-bold">{menu14}</span>
                  )}
                  <p>{desc14}</p>
                </div>
                <div>
                  {isValidLink15 ? (
                    <div className=" text-blue-600  pb-3 w-fit flex items-center lg:text-xl font-semibold relative group px-2 ">
                      <Link href={link15}>{menu15}</Link>
                      <IoIosArrowRoundForward />{" "}
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-cyan-500 group-hover:w-full transition-all duration-300"></div>
                    </div>
                  ) : (
                    <span className="text-2xl font-bold">{menu15}</span>
                  )}
                  <p>{desc15}</p>
                </div>
                <div>
                  {isValidLink16 ? (
                    <div className=" text-blue-600  pb-3 w-fit flex items-center lg:text-xl font-semibold relative group px-2 ">
                      <Link href={link16}>{menu16}</Link>
                      <IoIosArrowRoundForward />{" "}
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-cyan-500 group-hover:w-full transition-all duration-300"></div>
                    </div>
                  ) : (
                    <span className="text-2xl font-bold">{menu16}</span>
                  )}
                  <p>{desc16}</p>
                </div>
                <div>
                  {isValidLink17 ? (
                    <div className=" text-blue-600  pb-3 w-fit flex items-center lg:text-xl font-semibold relative group px-2 ">
                      <Link href={link17}>{menu17}</Link>
                      <IoIosArrowRoundForward />{" "}
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-cyan-500 group-hover:w-full transition-all duration-300"></div>
                    </div>
                  ) : (
                    <span className="text-2xl font-bold">{menu17}</span>
                  )}
                  <p>{desc17}</p>
                </div>
                <div>
                  {isValidLink18 ? (
                    <div className=" text-blue-600  pb-3 w-fit flex items-center lg:text-xl font-semibold relative group px-2 ">
                      <Link href={link18}>{menu18}</Link>
                      <IoIosArrowRoundForward />{" "}
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-cyan-500 group-hover:w-full transition-all duration-300"></div>
                    </div>
                  ) : (
                    <span className="text-2xl font-bold">{menu18}</span>
                  )}
                  <p>{desc18}</p>
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
