'use client';

import { useState } from "react";

export default function ServiceCard({service}) {
    const [open, setOpen] = useState(false);

    return (
        <div className={`card bg-base-100 shadow-xl border border-slate-200 ${open ? 'lg:row-span-3' : ''}`}>
            <div className="card-body">
                <div className="prose">
                    <h2 className="card-title">{service.title} <span className="ms-auto text-base font-light float-right cursor-default hover:font-semibold duration-300 whitespace-nowrap" onClick={() => (setOpen(!open))}>{open ? <>Close &uarr;</> : <>Explore &darr;</>}</span></h2>
                    {open ? <p>{service.description}</p> : null}
                    {/* <div className="card-actions justify-end">
                    <Link href="https://docs.google.com/forms/d/1SQWCEb7qkcg7j4vuKVHRkoKp3IxB8qFu59hDnZ5Htqo/viewform?chromeless=1&edit_requested=true" target="_blank" className="btn btn-info no-underline text-white mt-4">Free accessment</Link>
                    <Link href="https://lnk.bio/btgimmigration?fbclid=IwAR0eL2yxH2wUXqqY_emln9xVRQKd-CJ4_hiDXvRaFk3MhGu2HmP4QmX2TTE" target="_blank" className="btn btn-primary no-underline text-white mt-4">Book now</Link>
                    </div> */}
                </div>
            </div>
        </div>
    )
}