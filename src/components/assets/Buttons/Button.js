import Link from "next/link";




export default function Button( { Button1 } ) {
    return (
        <div>
            <Link  href="#">
                <button href="#" className="bg-white w-auto p-5 lg:text-xl font-bold text-slate-900 rounded-xl">{Button1}</button>
            </Link>
        </div>
    )
}
