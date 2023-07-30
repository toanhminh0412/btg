import Link from "next/link";

export default function Header() {
    return (
        <div>
        <div className="hero min-h-[24rem]">
            <video playsInline autoPlay muted loop id="myVideo" className="h-full object-cover">
                <source src="https://firebasestorage.googleapis.com/v0/b/btg-immigration-consulting.appspot.com/o/header.mp4?alt=media&token=c152860a-b91f-4f4a-af79-a3925cda52ee" type="video/mp4"/>
            </video>
            <div className="hero-overlay bg-opacity-70 bg-black"></div>
            <div className="hero-content text-center">
                <div className="max-w-xl lg:max-w-4xl prose text-white py-10">
                    <h1 className="mb-5 text-xl lg:text-3xl font-bold text-white">Welcome to BTG Immigration Consulting - Your expert partner for Canadian Immigration!</h1>
                    {/* <h2 className="mb-7 text-lg lg:text-2xl font-normal text-white mt-[5px]">We are better together</h2> */}
                    {/* <p className="mb-5 text-xl font-light">We can make the complicated Canadian immigration process simple for you!</p> */}
                    <Link href="https://docs.google.com/forms/d/1SQWCEb7qkcg7j4vuKVHRkoKp3IxB8qFu59hDnZ5Htqo/viewform?chromeless=1&edit_requested=true" target="_blank" className="btn no-underline mb-1 sm:mb-0 me-1">Free assessment</Link>
                    <Link href="https://lnk.bio/btgimmigration?fbclid=IwAR3ih5a4GojG8DizfTqv8yMlz02hyPVThnreZGU_eqS6Zsh7eikeLMIsZXI" target="_blank" className="btn btn-primary no-underline text-white mt-1 sm:mt-0 ms-1">Book a call</Link>
                </div>
            </div>
        </div>
        </div>
    )
}