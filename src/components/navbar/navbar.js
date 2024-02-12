
import Link from "next/link";
import Navbar2 from "./navbar2"
import Mobilenav from "./mobilenav"
export default function Navbar() {
    return (
        <div className="z-50 sticky  flex flex-col bg-white">

            <div className="flex p-5  justify-between items-center  text-black dark">
                <div>
                    <h1 className="lg:text-4xl"><span className="text-cyan-500">Pie</span><span className=" text-yellow-400">-</span>Bond</h1>
                </div>

                <div className=" justify-between items-center gap-4 hidden lg:flex">


                    <Link href="">COMPANY</Link>
                    <Link href="">INDUSTRIES</Link>

                    <Link href="">BLOGS</Link>
                    <Link href="">CONTACT</Link>

                </div>
                <Mobilenav/>
            </div>
             <Navbar2 />
        </div>
    )
}
