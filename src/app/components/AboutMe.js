import Image from "next/image";
import Link from "next/link";
 
export default function AboutMe() {
    const pillars = [
        {title: "Personalized Approach", icon: "fa-regular fa-circle-user"},
        {title: "Clarity and Transparency", icon: "fa-solid fa-check"},
        {title: "Success-driven Strategies", icon: "fa-solid fa-bullseye"},
        {title: "Client-Centric Experience", icon: "fa-regular fa-handshake"},
    ];

    return (
        <section className="pt-20 px-8 md:px-32">
            <div className="prose max-w-none">
                <h2 className="text-center mb-8 text-lg lg:text-xl">When you choose BTG Immigration Consulting <span className="whitespace-nowrap">you receive:</span></h2>
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-4">
                {pillars.map(pillar => (
                <div key={pillar.title} className="bg-slate-800 p-5 w-fit">
                    <div className="card card-side w-96 bg-base-100 shadow-xl border border-slate-300">
                        <div className="text-center flex flex-col justify-center ps-10"><i className={`${pillar.icon} text-4xl my-auto`}></i></div>
                        <div className="card-body">
                            <h2 className="card-title my-auto">{pillar.title}</h2>
                        </div>
                    </div> 
                </div>
                ))}
                <div className="flex gap-x-2 justify-center w-full mt-4">
                    <Link href="https://docs.google.com/forms/d/1SQWCEb7qkcg7j4vuKVHRkoKp3IxB8qFu59hDnZ5Htqo/viewform?chromeless=1&edit_requested=true" target="_blank" className="btn btn-info no-underline text-white mt-4">Free accessment</Link>
                    <Link href="https://lnk.bio/btgimmigration?fbclid=IwAR0eL2yxH2wUXqqY_emln9xVRQKd-CJ4_hiDXvRaFk3MhGu2HmP4QmX2TTE" target="_blank" className="btn btn-primary no-underline text-white mt-4">Book now</Link>
                </div>
            </div>
            <div className="prose max-w-none mt-12">
                <article>
                    <h1 className="mb-[-10px]">Who we are:</h1>
                    <p>
                    As a licensed Canadian-owned and operated firm, we take immense pride in offering top-notch, personalized immigration services to individuals, families, and businesses, seeking clear answers to questions about living and immigrating to Canada. BTG Immigration  provides our clients with the best possible chance for a successful Canadian immigration application. We understand that the Canadian immigration system can be complex and overwhelming, that&apos;s why our dedicated team of knowledgeable and friendly experts are here to guide you every step of the way.
                    </p>
                    {/* <h2>Why Choose BTG Immigration Consulting?</h2> */}
                    <p>Whether you&apos;re seeking a new beginning for your family, pursuing educational opportunities, or expanding your business horizons, BTG Immigration Consulting is your reliable partner. We believe in your dreams, and are committed to helping you achieve them in the land of maple leaves and endless possibilities.</p>
                        
                    <p>Let&apos;s embark on this exciting journey together, and unlock the doors to your bright future in Canada. Get in touch with us today, and let&apos;s make your Canadian dreams come true!</p>
                </article>
                
                <article className="mt-8">
                    <h1>About Us:</h1>
                    <div className="relative w-60 h-80 mx-auto sm:w-72 sm:h-96 sm:float-left sm:me-8 sm:mb-8 not-prose">
                        <Image src="/images/aboutme-2.jpeg" fill alt="Profile picture 1"/>
                    </div>
                    <p>
                    Our founder Ama is a dedicated and resourceful Regulated Canadian Immigration Consultant(RCIC) based in beautiful Victoria, British Columbia. With Ama, you&apos;re in good hands as she is in good standing with the <i>College of Immigration and Citizenship Consultants(CICC)</i>, ensuring the highest standard of professional service.
                    </p>
                    <p>
                    As an immigrant herself, Ama understands the challenges of navigating the complex and overwhelming Canadian immigration process. She knows that going through this journey alone can be isolating. That&apos;s why she&apos;s here to be your reliable guide and support system.
                    </p>
                    <p>
                    With a background in Psychology and a great understanding of Canadian immigration laws, policies, and procedures, Ama is well-equipped to help you create  a better future in Canada. Immigration is an integral part of Canadian society, shaping its diverse and vibrant culture.
                    Having spent 14 transformative years in Canada, Ama has had the privilege of meeting individuals from diverse backgrounds, each with their own unique Canadian immigration stories.
                    </p>
                    <p>
                    Hearing and witnessing the struggles some individuals face with their Immigration journeys not meeting their expectations, Ama recognized the need for a professional and dedicated service to help others settle down comfortably in Canada. Ama&apos;s true passion lies in helping individuals, families, and businesses achieve their Canadian immigration dreams, providing a secure, engaging, and collaborative experience as you embark on this journey together.
                    </p>
                    <p>
                    Despite the ever-fluid nature of Canada&apos;s Immigration programs and processes, with Ama&apos;s expertise and your dreams, there&apos;s no limit to what we can achieve. Let&apos;s make your Canadian dreams a reality, together! Take your next steps towards a brighter future in Canada with confidence, and let us guide you every step of the way.
                    </p>
                </article>
                <article>
                    <h2 className="mt-[-5px]">Our Values</h2>
                    <div className="w-full max-w-sm sm:w-72 aspect-[16/10] relative md:float-right md:ms-8 mb-8 mt-0 not-prose">
                        <Image src="/images/aboutme-3.jpeg" fill style={{objectFit: 'cover'}} alt="About me pic 1"/>
                    </div>
                    <p>
                    At BTG Immigration Consulting, our core values drive everything we do. We firmly believe in honesty, integrity, and open communication. Whether you&apos;re an individual, a family starting a new chapter in your life or a business seeking to expand your operations internationally, we are committed to providing you with unwavering support and confidence throughout your Canadian Immigration journey.
                    </p>
                    <p>
                    We understand that moving to a new country is a significant life event, and that&apos;s why we have a dedicated team who truly cares about your unique Immigration goals. Be rest assured, we will handle all the intricate details, so you can focus on what truly matters to you and your loved ones as you prepare to embrace your new life here in Canada.
                    </p>
                </article>
                <article>
                    <h2 className="mt-[5px]">Our Mission</h2>
                    <p>
                    At BTG Immigration Consulting, we are dedicated to making your Immigration journey to Canada stress-free and straightforward. Our mission is to provide you with a seamless, transparent, and secure service, one that is easy to understand regardless of your personal or professional goals.
                    </p>
                    <p>
                    With BTG Immigration on your side, you won&apos;t have to be a Canadian immigration expert to achieve your Immigration dreams to Canada. Our team of experts will guide you through every step of the process, ensuring that you receive the best possible experience. Whether you&apos;re an individual, a family, a business seeking concise answers to start your Canadian immigration journey, we are here to help. Join us today and let&apos;s make your Canadian dreams become a reality!
                    </p>
                </article>
            </div>
        </section>
    )
}