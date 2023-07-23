import Link from "next/link";
import ServiceCard from "./ServiceCard";

export default function Services() {
    const services = [
        {title: 'Vistor Visas', description: 'Donec rutrum aliquet lectus, sed lobortis elit eleifend fermentum. Nunc a rhoncus sapien. Nunc pharetra interdum erat, sed imperdiet enim molestie non. Cras venenatis tincidunt erat feugiat rutrum. Nunc tempus consectetur tristique. Cras egestas pulvinar turpis id aliquam. Suspendisse id purus vel mauris eleifend accumsan. Aenean hendrerit odio quis dolor accumsan, et gravida lectus finibus.'},
        {title: 'Study Permit & PGWP', description: 'Donec rutrum aliquet lectus, sed lobortis elit eleifend fermentum. Nunc a rhoncus sapien. Nunc pharetra interdum erat, sed imperdiet enim molestie non. Cras venenatis tincidunt erat feugiat rutrum. Nunc tempus consectetur tristique. Cras egestas pulvinar turpis id aliquam. Suspendisse id purus vel mauris eleifend accumsan. Aenean hendrerit odio quis dolor accumsan, et gravida lectus finibus.'},
        {title: 'Work Permit', description: 'Donec rutrum aliquet lectus, sed lobortis elit eleifend fermentum. Nunc a rhoncus sapien. Nunc pharetra interdum erat, sed imperdiet enim molestie non. Cras venenatis tincidunt erat feugiat rutrum. Nunc tempus consectetur tristique. Cras egestas pulvinar turpis id aliquam. Suspendisse id purus vel mauris eleifend accumsan. Aenean hendrerit odio quis dolor accumsan, et gravida lectus finibus.'},
        {title: 'Supervisa (Parents & Grandparents)', description: 'Donec rutrum aliquet lectus, sed lobortis elit eleifend fermentum. Nunc a rhoncus sapien. Nunc pharetra interdum erat, sed imperdiet enim molestie non. Cras venenatis tincidunt erat feugiat rutrum. Nunc tempus consectetur tristique. Cras egestas pulvinar turpis id aliquam. Suspendisse id purus vel mauris eleifend accumsan. Aenean hendrerit odio quis dolor accumsan, et gravida lectus finibus.'},
        {title: 'BOWP', description: 'Donec rutrum aliquet lectus, sed lobortis elit eleifend fermentum. Nunc a rhoncus sapien. Nunc pharetra interdum erat, sed imperdiet enim molestie non. Cras venenatis tincidunt erat feugiat rutrum. Nunc tempus consectetur tristique. Cras egestas pulvinar turpis id aliquam. Suspendisse id purus vel mauris eleifend accumsan. Aenean hendrerit odio quis dolor accumsan, et gravida lectus finibus.'},
        {title: 'SOWP', description: 'Donec rutrum aliquet lectus, sed lobortis elit eleifend fermentum. Nunc a rhoncus sapien. Nunc pharetra interdum erat, sed imperdiet enim molestie non. Cras venenatis tincidunt erat feugiat rutrum. Nunc tempus consectetur tristique. Cras egestas pulvinar turpis id aliquam. Suspendisse id purus vel mauris eleifend accumsan. Aenean hendrerit odio quis dolor accumsan, et gravida lectus finibus.'},
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
    ]

    return (
        <section className="pt-20 px-8 md:px-32">
            <div className="prose max-w-none text-center">
                <h1>Our Services</h1>
                <p className="text-xl">Here are the services that we offer</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-x-4 mt-8">
                {services.map((service, index) => (
                <ServiceCard key={index} service={service} />
                ))}
            </div>

            <div className="prose max-w-none text-center mt-20">
                <h1>Other services</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-x-4 mt-8">
                {otherServices.map((service, index) => (
                <ServiceCard key={index} service={service} />
                ))}
            </div>
        </section>
    );
}