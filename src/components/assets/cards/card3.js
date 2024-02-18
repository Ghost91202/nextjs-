import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Cards2({ icons, title, desc, title2, link }) {
  // Check if link is defined
  const isValidLink = link && typeof link === "string";

  return (
    <div className="lg:w-auto w-full">

          {/* Use Link only if link is a valid string */}
          {isValidLink ? (
            <div className=" text-orange-500 flex items-center lg:text-xl font-semibold ">
              <Link href={link}>{title2}</Link><IoIosArrowRoundForward/>
            </div>
          ) : (
            <span className="text-2xl font-bold">{title2}</span>
          )}

    </div>
  );
}
