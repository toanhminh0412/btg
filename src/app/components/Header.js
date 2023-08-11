'use client';

import { useEffect } from "react";
import Link from "next/link";

export default function Header() {
    useEffect(() => {
        document.getElementById("myVideo").playbackRate = 2;
    }, []);

    return (
        <div>
        <div className="hero min-h-[24rem]">
            <video playsInline autoPlay muted loop id="myVideo" className="h-full object-cover z-10">
                <source src="https://firebasestorage.googleapis.com/v0/b/btg-immigration-consulting.appspot.com/o/vid-1.mp4?alt=media&token=c40aef89-f575-4e58-acdd-40f568e5f5a2" type="video/mp4"/>
            </video>
            <div className="hero-overlay bg-opacity-50 bg-black z-20"></div>
            <div className="hero-content text-center z-30">
                <div className="max-w-xl lg:max-w-4xl prose text-white py-10">
                    <h1 className="mb-5 text-xl lg:text-3xl font-bold text-white">Welcome to BTG Immigration Consulting - Your expert partner for Canadian Immigration!</h1>
                    {/* <h2 className="mb-7 text-lg lg:text-2xl font-normal text-white mt-[5px]">We are better together</h2> */}
                    {/* <p className="mb-5 text-xl font-light">We can make the complicated Canadian immigration process simple for you!</p> */}
                    <Link href="https://docs.google.com/forms/d/1SQWCEb7qkcg7j4vuKVHRkoKp3IxB8qFu59hDnZ5Htqo/viewform?chromeless=1&edit_requested=true" target="_blank" className="btn no-underline mb-1 sm:mb-0 me-1">Free assessment</Link>
                    <Link href="https://appointments.btgimmigrationconsulting.ca/#/customer/btgimmigrationconsulting" target="_blank" className="btn btn-primary no-underline text-white mt-1 sm:mt-0 ms-1">Book a call</Link>
                </div>
            </div>
        </div>
        </div>
    )
}