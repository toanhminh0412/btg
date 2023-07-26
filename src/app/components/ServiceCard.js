'use client';

import { useState } from "react";
import Image from "next/image";

export default function ServiceCard({service}) {
    const [open, setOpen] = useState(false);

    return (
        <div className={`card bg-base-100 shadow-xl border border-slate-200 ${open ? 'lg:row-span-3' : ''}`}>
            <div className="card-body">
                <div className="prose max-w-none">
                    <h2 className="card-title"><span dangerouslySetInnerHTML={{__html: service.title}}/> <span className="ms-auto text-base font-light float-right cursor-default hover:font-semibold duration-300 whitespace-nowrap ps-4" onClick={() => (setOpen(!open))}>{open ? <span className="text-xl">&uarr;</span> : <span className="text-2xl">&darr;</span>}</span></h2>
                    {open ? 
                    <div>
                        {service.image ? 
                        <div className="w-72 aspect-video relative md:float-right md:ms-8 mb-8 mt-0 not-prose">
                        <Image src={service.image} fill alt="Service pic"/>
                        </div> : null}
                        <p dangerouslySetInnerHTML={{__html: service.description}}/> 
                    </div>: null}
                    {/* <div className="card-actions justify-end">
                    <Link href="https://docs.google.com/forms/d/1SQWCEb7qkcg7j4vuKVHRkoKp3IxB8qFu59hDnZ5Htqo/viewform?chromeless=1&edit_requested=true" target="_blank" className="btn btn-info no-underline text-white mt-4">Free accessment</Link>
                    <Link href="https://lnk.bio/btgimmigration?fbclid=IwAR0eL2yxH2wUXqqY_emln9xVRQKd-CJ4_hiDXvRaFk3MhGu2HmP4QmX2TTE" target="_blank" className="btn btn-primary no-underline text-white mt-4">Book now</Link>
                    </div> */}
                </div>
            </div>
        </div>
    )
}