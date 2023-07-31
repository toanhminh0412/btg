'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function ServiceCard({service, index}) {
    const [open, setOpen] = useState(false);

    return (
        <div className={`card bg-base-100 shadow-xl border border-slate-200 duration-200 ${open ? 'lg:row-span-3 bg-blue-100' : ''}`} onClick={() => (setOpen(!open))}>
            <div className="card-body">
                <div className="prose max-w-none">
                    <h2 className={`relative card-title ${[0, 3, 5, 6, 7, 8, 9, 10, 11] ? 'text-base' : 'text-sm'} lg:text-xl text-center ${index === 0 ? 'whitespace-nowrap' : ''} ${open ? '' : ''}`}><span className="mx-auto" dangerouslySetInnerHTML={{__html: service.title1}}/><i className="absolute fa-solid fa-chevron-right right-[-10px]"></i> </h2>
                    <div className="text-center my-6"><i className={`${service.icon} text-6xl`}></i></div>
                    <h2 className={`card-title text-sm lg:text-xl ${[0, 3, 5, 6, 7, 8, 9, 10, 11] ? 'text-base' : 'text-sm'} ${open ? '' : ''}`}><span dangerouslySetInnerHTML={{__html: service.title2}}/></h2>
                    {open ? 
                    <div>
                        {service.image ? 
                        <div className="w-full max-w-xs sm:w-72 aspect-video relative md:float-right md:ms-8 mb-8 mt-0 not-prose">
                        <Suspense fallback={<p>Loading image...</p>}>
                            <Image src={service.image} fill alt="Service pic" style={{objectFit: 'cover'}}/>
                        </Suspense>
                        </div> : null}
                        <p className="text-base font-light leading-6 " dangerouslySetInnerHTML={{__html: service.description}}/> 
                    </div>: null}
                    <div className="card-actions justify-end">
                    {/* <Link href="https://docs.google.com/forms/d/1SQWCEb7qkcg7j4vuKVHRkoKp3IxB8qFu59hDnZ5Htqo/viewform?chromeless=1&edit_requested=true" target="_blank" className="btn btn-info no-underline text-white mt-4">Free accessment</Link> */}
                    <Link href="https://lnk.bio/btgimmigration?fbclid=IwAR0eL2yxH2wUXqqY_emln9xVRQKd-CJ4_hiDXvRaFk3MhGu2HmP4QmX2TTE" target="_blank" className="btn bg-blue-600 no-underline text-white mt-4">Contact Us</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}