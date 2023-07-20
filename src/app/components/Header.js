import Link from "next/link";

export default function Header() {
    return (
        <div className="hero min-h-[24rem]" style={{backgroundImage: 'url(/images/header-new.jpg)'}}>
            <div className="hero-overlay bg-opacity-70 bg-black"></div>
            <div className="hero-content text-center">
                <div className="max-w-xl lg:max-w-4xl prose text-white py-10">
                    <h1 className="mb-5 text-3xl font-bold text-white">BTG - Immigration consulting</h1>
                    <h2 className="mb-5 text-2xl font-normal text-white mt-[-10px] italic">We are better together</h2>
                    <p className="mb-5 text-xl font-light">We can make the complicated Canadian immigration process simple for you!</p>
                    <Link href="#" className="btn no-underline me-1">Services</Link>
                    <Link href="https://lnk.bio/btgimmigration?fbclid=IwAR3ih5a4GojG8DizfTqv8yMlz02hyPVThnreZGU_eqS6Zsh7eikeLMIsZXI" target="_blank" className="btn btn-primary no-underline text-white ms-1">Book a call</Link>
                </div>
            </div>
        </div>
    )
}