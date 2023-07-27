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
                <h2 className="text-center mb-8">When you choose BTG Immigration Consulting you receive</h2>
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-4">
                {pillars.map(pillar => (
                <div key={pillar.title} className="card card-side w-96 bg-base-100 shadow-xl border border-slate-300">
                    <div className="text-center flex flex-col justify-center ps-10"><i className={`${pillar.icon} text-4xl my-auto`}></i></div>
                    <div className="card-body">
                        <h2 className="card-title my-auto">{pillar.title}</h2>
                    </div>
                </div> 
                ))}
                <div className="flex gap-x-2 justify-center w-full mt-4">
                    <Link href="https://docs.google.com/forms/d/1SQWCEb7qkcg7j4vuKVHRkoKp3IxB8qFu59hDnZ5Htqo/viewform?chromeless=1&edit_requested=true" target="_blank" className="btn btn-info no-underline text-white mt-4">Free accessment</Link>
                    <Link href="https://lnk.bio/btgimmigration?fbclid=IwAR0eL2yxH2wUXqqY_emln9xVRQKd-CJ4_hiDXvRaFk3MhGu2HmP4QmX2TTE" target="_blank" className="btn btn-primary no-underline text-white mt-4">Book now</Link>
                </div>
            </div>
            <div className="prose max-w-none mt-20">
                <article>
                    <h1>Who we are</h1>
                    <p>
                    As a licensed Canadian-owned and operated firm, we take immense pride in offering top-notch, personalized immigration services to individuals, families, and businesses. seeking clear answers to questions about living and immigrating to Canada. BTG Immigration  provides our clients with the best possible chance for a successful Canadian immigration application. We understand that the Canadian immigration system can be complex and overwhelming. That&apos;s why our dedicated team of knowledgeable and friendly experts is here to guide you every step of the way. We believe in your dreams, and are committed to helping you achieve them in the land of maple leaves and endless possibilities.
                    </p>
                    <p>
                    At BTG Immigration Consulting, we understand that the Canadian immigration system can be complex and overwhelming. That&apos;s why our dedicated team of knowledgeable and friendly experts is here to guide you every step of the way. We believe in your dreams, and we are committed to helping you achieve them in the land of maple leaves and endless possibilities.
                    </p>
                    {/* <h2>Why Choose BTG Immigration Consulting?</h2> */}
                    <p>Whether you&apos;re seeking a new beginning for your family, pursuing educational opportunities, or expanding your business horizons, BTG Immigration Consulting is your reliable partner. Let&apos;s embark on this exciting journey together, and unlock the doors to your bright future in Canada. Get in touch with us today, and let&apos;s make your Canadian dreams come true!</p>
                </article>
                
                <article className="mt-12">
                    <h1>About Us</h1>
                    <div className="relative w-60 h-80 mx-auto sm:w-72 sm:h-96 sm:float-left sm:me-8 sm:mb-8 not-prose">
                        <Image src="/images/aboutme-2.jpeg" fill alt="Profile picture 1"/>
                    </div>
                    <p>
                    Our founder Ama is a dedicated and resourceful Regulated Canadian Immigration Consultant(RCIC) based in beautiful Victoria, British Columbia. With Ama, you&apos;re in good hands as she is in good standing with the <i>College of Immigration and Citizenship Consultants(CICC)</i>, ensuring the highest standard of professional service.
                    </p>
                    <p>
                    Hearing and witnessing the struggles some faced with their Immigration journeys not meeting their expectations,  Ama recognized the need for a professional service to assist others in settling  down in Canada. Her passion lies in helping individuals, families, and businesses achieve their Canadian immigration dreams, providing a secure, engaging, and collaborative experience
                    </p>
                    <p>
                    Ama is passionate about helping individuals, families, and businesses, achieve their Canadian immigration dreams. She knows how difficult it can sometimes be to sort through all of the information out there, especially when you&apos;re feeling overwhelmed by the ever fluid Immigration programs and process.
                    </p>
                </article>
                <article>
                    <h2>Our Values</h2>
                    <div className="relative mx-auto w-60 h-40 sm:w-96 sm:h-72 lg:w-[30rem] lg:h-80 lg:float-right mt-8 lg:mt-0 lg:ms-8 mb-8 not-prose ">
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
                    <h2>Our Mission</h2>
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