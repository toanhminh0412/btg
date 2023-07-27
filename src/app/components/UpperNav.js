import Link from "next/link"
import Image from "next/image"

export default function UpperNav() {
    return (
        <div className="fixed top-0 left-0 z-40 shadow-lg w-screen">
            <div className="navbar bg-base-100 border-slate-300">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about-me">About Us</Link></li>
                        <li><Link href="/services">Our Services</Link></li>
                    </ul>
                    </div>
                    <Image src="/images/logo-new.png" width={40} height={40} className="p-0" style={{objectFit: "contain"}} alt="Logo pic"/>
                    <Link href="/" className="btn btn-ghost normal-case text-xl">BTG</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about-me">About Us</Link></li>
                        <li><Link href="/services">Our Services</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link href="https://lnk.bio/btgimmigration?fbclid=IwAR0eL2yxH2wUXqqY_emln9xVRQKd-CJ4_hiDXvRaFk3MhGu2HmP4QmX2TTE" target="_blank" className="btn">Book now</Link>
                </div>
            </div>
            <div className="p-2 font-light bg-neutral-800 flex text-white">
                <div><i className="fa-solid fa-envelope me-2 text-green-300"></i> <Link href="mailto:info@btgimmigrationconsulting.ca" className="text-xs sm:text-lg">info@btgimmigrationconsulting.ca</Link></div>
                <span className="mx-8"> | </span>
                <div><i className="fa-solid fa-phone me-2 text-green-300"></i><span className="text-xs sm:text-lg">778-760-0209</span></div>
            </div>
        </div>
    )
}