import Link from "next/link";

export default function Services() {
    const services = [
        {title: 'Temporary resident services', description: 'Donec rutrum aliquet lectus, sed lobortis elit eleifend fermentum. Nunc a rhoncus sapien. Nunc pharetra interdum erat, sed imperdiet enim molestie non. Cras venenatis tincidunt erat feugiat rutrum. Nunc tempus consectetur tristique. Cras egestas pulvinar turpis id aliquam. Suspendisse id purus vel mauris eleifend accumsan. Aenean hendrerit odio quis dolor accumsan, et gravida lectus finibus.'},
        {title: 'Vistor Visas', description: 'Donec rutrum aliquet lectus, sed lobortis elit eleifend fermentum. Nunc a rhoncus sapien. Nunc pharetra interdum erat, sed imperdiet enim molestie non. Cras venenatis tincidunt erat feugiat rutrum. Nunc tempus consectetur tristique. Cras egestas pulvinar turpis id aliquam. Suspendisse id purus vel mauris eleifend accumsan. Aenean hendrerit odio quis dolor accumsan, et gravida lectus finibus.'},
        {title: 'Study Permit & PGWP', description: 'Donec rutrum aliquet lectus, sed lobortis elit eleifend fermentum. Nunc a rhoncus sapien. Nunc pharetra interdum erat, sed imperdiet enim molestie non. Cras venenatis tincidunt erat feugiat rutrum. Nunc tempus consectetur tristique. Cras egestas pulvinar turpis id aliquam. Suspendisse id purus vel mauris eleifend accumsan. Aenean hendrerit odio quis dolor accumsan, et gravida lectus finibus.'},
        {title: 'Work Permit', description: 'Donec rutrum aliquet lectus, sed lobortis elit eleifend fermentum. Nunc a rhoncus sapien. Nunc pharetra interdum erat, sed imperdiet enim molestie non. Cras venenatis tincidunt erat feugiat rutrum. Nunc tempus consectetur tristique. Cras egestas pulvinar turpis id aliquam. Suspendisse id purus vel mauris eleifend accumsan. Aenean hendrerit odio quis dolor accumsan, et gravida lectus finibus.'},
        {title: 'Supervisa (Parents & Grandparents)', description: 'Donec rutrum aliquet lectus, sed lobortis elit eleifend fermentum. Nunc a rhoncus sapien. Nunc pharetra interdum erat, sed imperdiet enim molestie non. Cras venenatis tincidunt erat feugiat rutrum. Nunc tempus consectetur tristique. Cras egestas pulvinar turpis id aliquam. Suspendisse id purus vel mauris eleifend accumsan. Aenean hendrerit odio quis dolor accumsan, et gravida lectus finibus.'},
        {title: 'BOWP', description: 'Donec rutrum aliquet lectus, sed lobortis elit eleifend fermentum. Nunc a rhoncus sapien. Nunc pharetra interdum erat, sed imperdiet enim molestie non. Cras venenatis tincidunt erat feugiat rutrum. Nunc tempus consectetur tristique. Cras egestas pulvinar turpis id aliquam. Suspendisse id purus vel mauris eleifend accumsan. Aenean hendrerit odio quis dolor accumsan, et gravida lectus finibus.'},
        {title: 'SOWP', description: 'Donec rutrum aliquet lectus, sed lobortis elit eleifend fermentum. Nunc a rhoncus sapien. Nunc pharetra interdum erat, sed imperdiet enim molestie non. Cras venenatis tincidunt erat feugiat rutrum. Nunc tempus consectetur tristique. Cras egestas pulvinar turpis id aliquam. Suspendisse id purus vel mauris eleifend accumsan. Aenean hendrerit odio quis dolor accumsan, et gravida lectus finibus.'},
        {title: 'Permanent residence services', description: 'Donec rutrum aliquet lectus, sed lobortis elit eleifend fermentum. Nunc a rhoncus sapien. Nunc pharetra interdum erat, sed imperdiet enim molestie non. Cras venenatis tincidunt erat feugiat rutrum. Nunc tempus consectetur tristique. Cras egestas pulvinar turpis id aliquam. Suspendisse id purus vel mauris eleifend accumsan. Aenean hendrerit odio quis dolor accumsan, et gravida lectus finibus.'},
        {title: 'Express Entry', description: 'Donec rutrum aliquet lectus, sed lobortis elit eleifend fermentum. Nunc a rhoncus sapien. Nunc pharetra interdum erat, sed imperdiet enim molestie non. Cras venenatis tincidunt erat feugiat rutrum. Nunc tempus consectetur tristique. Cras egestas pulvinar turpis id aliquam. Suspendisse id purus vel mauris eleifend accumsan. Aenean hendrerit odio quis dolor accumsan, et gravida lectus finibus.'},
        {title: 'Provincial Nominee Programs', description: 'Donec rutrum aliquet lectus, sed lobortis elit eleifend fermentum. Nunc a rhoncus sapien. Nunc pharetra interdum erat, sed imperdiet enim molestie non. Cras venenatis tincidunt erat feugiat rutrum. Nunc tempus consectetur tristique. Cras egestas pulvinar turpis id aliquam. Suspendisse id purus vel mauris eleifend accumsan. Aenean hendrerit odio quis dolor accumsan, et gravida lectus finibus.'},
        {title: 'Family and Spousal Sponsorship', description: 'Donec rutrum aliquet lectus, sed lobortis elit eleifend fermentum. Nunc a rhoncus sapien. Nunc pharetra interdum erat, sed imperdiet enim molestie non. Cras venenatis tincidunt erat feugiat rutrum. Nunc tempus consectetur tristique. Cras egestas pulvinar turpis id aliquam. Suspendisse id purus vel mauris eleifend accumsan. Aenean hendrerit odio quis dolor accumsan, et gravida lectus finibus.'},
        {title: 'Parent and Grandparents program', description: 'Donec rutrum aliquet lectus, sed lobortis elit eleifend fermentum. Nunc a rhoncus sapien. Nunc pharetra interdum erat, sed imperdiet enim molestie non. Cras venenatis tincidunt erat feugiat rutrum. Nunc tempus consectetur tristique. Cras egestas pulvinar turpis id aliquam. Suspendisse id purus vel mauris eleifend accumsan. Aenean hendrerit odio quis dolor accumsan, et gravida lectus finibus.'},
    ]

    const otherServices = [
        {title: 'Canadian Citizenship', description: 'Donec rutrum aliquet lectus, sed lobortis elit eleifend fermentum. Nunc a rhoncus sapien. Nunc pharetra interdum erat, sed imperdiet enim molestie non. Cras venenatis tincidunt erat feugiat rutrum. Nunc tempus consectetur tristique. Cras egestas pulvinar turpis id aliquam. Suspendisse id purus vel mauris eleifend accumsan. Aenean hendrerit odio quis dolor accumsan, et gravida lectus finibus.'},
        {title: 'DIY Application Package', description: 'Donec rutrum aliquet lectus, sed lobortis elit eleifend fermentum. Nunc a rhoncus sapien. Nunc pharetra interdum erat, sed imperdiet enim molestie non. Cras venenatis tincidunt erat feugiat rutrum. Nunc tempus consectetur tristique. Cras egestas pulvinar turpis id aliquam. Suspendisse id purus vel mauris eleifend accumsan. Aenean hendrerit odio quis dolor accumsan, et gravida lectus finibus.'},
        {title: 'Passports & Travel document', description: 'Donec rutrum aliquet lectus, sed lobortis elit eleifend fermentum. Nunc a rhoncus sapien. Nunc pharetra interdum erat, sed imperdiet enim molestie non. Cras venenatis tincidunt erat feugiat rutrum. Nunc tempus consectetur tristique. Cras egestas pulvinar turpis id aliquam. Suspendisse id purus vel mauris eleifend accumsan. Aenean hendrerit odio quis dolor accumsan, et gravida lectus finibus.'},
        {title: 'PNP net worth verification', description: 'Donec rutrum aliquet lectus, sed lobortis elit eleifend fermentum. Nunc a rhoncus sapien. Nunc pharetra interdum erat, sed imperdiet enim molestie non. Cras venenatis tincidunt erat feugiat rutrum. Nunc tempus consectetur tristique. Cras egestas pulvinar turpis id aliquam. Suspendisse id purus vel mauris eleifend accumsan. Aenean hendrerit odio quis dolor accumsan, et gravida lectus finibus.'},
        {title: 'GCMS request and review', description: 'Donec rutrum aliquet lectus, sed lobortis elit eleifend fermentum. Nunc a rhoncus sapien. Nunc pharetra interdum erat, sed imperdiet enim molestie non. Cras venenatis tincidunt erat feugiat rutrum. Nunc tempus consectetur tristique. Cras egestas pulvinar turpis id aliquam. Suspendisse id purus vel mauris eleifend accumsan. Aenean hendrerit odio quis dolor accumsan, et gravida lectus finibus.'},
        {title: 'How to use the RCIC insignia', description: 'Donec rutrum aliquet lectus, sed lobortis elit eleifend fermentum. Nunc a rhoncus sapien. Nunc pharetra interdum erat, sed imperdiet enim molestie non. Cras venenatis tincidunt erat feugiat rutrum. Nunc tempus consectetur tristique. Cras egestas pulvinar turpis id aliquam. Suspendisse id purus vel mauris eleifend accumsan. Aenean hendrerit odio quis dolor accumsan, et gravida lectus finibus.'},
    ]

    return (
        <section className="pt-20 px-8 md:px-32">
            <div className="prose max-w-none text-center">
                <h1>Services</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-y-4 lg:gap-x-4 mt-8">
                {services.map((service, index) => (
                <div key={index} className="card bg-base-100 shadow-xl border border-slate-200">
                    <div className="card-body">
                        <div className="prose">
                            <h2 className="card-title">{service.title}</h2>
                            <p>{service.description}</p>
                            <div className="card-actions justify-end">
                            <Link href="https://docs.google.com/forms/d/1SQWCEb7qkcg7j4vuKVHRkoKp3IxB8qFu59hDnZ5Htqo/viewform?chromeless=1&edit_requested=true" target="_blank" className="btn btn-info no-underline text-white mt-4">Free accessment</Link>
                            <Link href="https://lnk.bio/btgimmigration?fbclid=IwAR0eL2yxH2wUXqqY_emln9xVRQKd-CJ4_hiDXvRaFk3MhGu2HmP4QmX2TTE" target="_blank" className="btn btn-primary no-underline text-white mt-4">Book now</Link>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>

            <div className="prose max-w-none text-center mt-20">
                <h1>Other services</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-2 lg:gap-4 mt-8">
                {otherServices.map((service, index) => (
                <div key={index} className="card bg-base-100 shadow-xl border border-slate-200">
                    <div className="card-body">
                        <div className="prose">
                            <h2 className="card-title">{service.title}</h2>
                            <p>{service.description}</p>
                            <div className="card-actions justify-end">
                            <Link href="https://docs.google.com/forms/d/1SQWCEb7qkcg7j4vuKVHRkoKp3IxB8qFu59hDnZ5Htqo/viewform?chromeless=1&edit_requested=true" target="_blank" className="btn btn-info no-underline text-white mt-4">Free accessment</Link>
                            <Link href="https://lnk.bio/btgimmigration?fbclid=IwAR0eL2yxH2wUXqqY_emln9xVRQKd-CJ4_hiDXvRaFk3MhGu2HmP4QmX2TTE" target="_blank" className="btn btn-primary no-underline text-white mt-4">Book now</Link>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </section>
    );
}