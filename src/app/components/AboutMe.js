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
            <div className="flex flex-row flex-wrap justify-center gap-4">
                {pillars.map(pillar => (
                <div key={pillar.title} className="card card-side w-96 bg-base-100 shadow-xl border border-slate-300">
                    <div className="text-center flex flex-col justify-center ps-10"><i className={`${pillar.icon} text-4xl my-auto`}></i></div>
                    <div className="card-body">
                        <h2 className="card-title my-auto">{pillar.title}</h2>
                    </div>
                </div> 
                ))}
            </div>
            <div className="prose max-w-none mt-20">
                <article>
                    <h1>Who are we?</h1>
                    <p>
                    As a licensed Canadian-owned and operated firm, we take immense pride in offering top-notch, personalized immigration services to individuals, families, and businesses. seeking clear answers to questions about living and immigrating to Canada. We provide our clients with the best possible chance for a successful Canadian immigration application. 
                    </p>
                    <p>
                    At BTG Immigration Consulting, we understand that the Canadian immigration system can be complex and overwhelming. That&apos;s why our dedicated team of knowledgeable and friendly experts is here to guide you every step of the way. We believe in your dreams, and we are committed to helping you achieve them in the land of maple leaves and endless possibilities.
                    </p>
                    <h2>Why Choose BTG Immigration Consulting?</h2>
                    <p>Whether you&apos;re seeking a new beginning for your family, pursuing educational opportunities, or expanding your business horizons, BTG Immigration Consulting is your reliable partner. Let&apos;s embark on this exciting journey together, and unlock the doors to your bright future in Canada. Get in touch with us today, and let&apos;s make your Canadian dreams come true!</p>
                    <div className="text-center mt-8">
                        <Link href="https://www.facebook.com/btgimmigration/?paipv=0&eav=AfY5lfPUCGKVkNKl8YKRyATt8WvElCD0byW2LWEJ7UQinoJusfp4BUqeHYvGcnJDa04" target="_blank" className="mx-2"><i className="fa-brands fa-facebook text-4xl text-slate-300 hover:text-slate-600 duration-300"></i></Link>
                        <Link href="https://www.linkedin.com/in/amarachi-btgimmigration/" target="_blank" className="mx-2"><i className="fa-brands fa-linkedin text-4xl text-slate-300 hover:text-slate-600 duration-300"></i></Link>
                    </div>
                </article>
                
                <article className="mt-12">
                    <h1>About Us</h1>
                    <div className="relative w-80 aspect-square sm:float-left me-8 mb-8 not-prose">
                        <Image src="/images/pic-2.jpg" fill style={{objectFit: "contain"}} alt="Profile picture 1"/>
                    </div>
                    <p>
                    Our founder Ama is a Regulated Canadian Immigration Consultant(RCIC) based in beautiful Victoria, British Columbia. As an immigrant herself who has gone through the process, she understands the challenges of navigating the complex, isolating, and overwhelming Canadian immigration process alone.<br/>
                    Over the past 14 years in Canada, Ama has been lucky enough to meet people from diverse backgrounds, each with their own unique Canadian immigration stories.
                    </p>
                    <p>
                    Hearing and witnessing the struggles some faced with their Immigration journeys not meeting their expectations,  Ama recognized the need for a professional service to assist others in settling  down in Canada. Her passion lies in helping individuals, families, and businesses achieve their Canadian immigration dreams, providing a secure, engaging, and collaborative experience
                    </p>
                    <p>
                    Ama is passionate about helping individuals, families, and businesses, achieve their Canadian immigration dreams. She knows how difficult it can sometimes be to sort through all of the information out there, especially when you&apos;re feeling overwhelmed by the ever fluid Immigration programs and process.
                    </p>
                </article>
                <article>
                    <h2>Our Values and Our Mission</h2>
                    <div className="relative w-[30rem] aspect-video lg:float-right mt-8 lg:mt-0 ms-[-40px] lg:ms-8 mb-8 not-prose ">
                        <Image src="/images/aboutme-3.jpg" fill style={{objectFit: "contain"}} alt="Profile picture 2"/>
                    </div>
                    <p>
                    At BTG Immigration Consulting, our core values drive everything we do. We firmly believe in honesty, integrity, and open communication. Whether you&apos;re an individual, a family starting a new chapter in your life or a business seeking to expand your operations internationally, we are committed to providing you with unwavering support and confidence throughout your Canadian Immigration journey.
                    </p>
                    <p>
                    We understand that moving to a new country is a significant life event, and that&apos;s why we have a dedicated team who truly cares about your unique Immigration goals. Be rest assured, we will handle all the intricate details, so you can focus on what truly matters to you and your loved ones as you prepare to embrace your new life here in Canada.
                    </p>
                    <p>
                    At BTG Immigration Consulting, we are dedicated to making your Immigration journey to Canada stress-free and straightforward.Our mission is to provide you with a seamless, transparent, and secure service, one that is easy to understand  regardless of your personal or professional goals
                    </p>
                    <p>
                    With BTG Immigration on your side, you won&apos;t have to be a Canadian immigration expert to achieve your Immigration dreams to Canada. Our team of experts will guide you through every step of the process, ensuring that you receive the best possible experience.
                    </p>
                    <p>
                    Whether you&apos;re an individual, a family, a business seeking concise answers to start your Canadian immigration journey, we are here to help. Join us today and let&apos;s make your Canadian dreams become a reality!
                    </p>
                </article>
                {/* <article>
                    <h2>Our Mission</h2>
                    <Image src="/images/pic-3.jpg" width={300} height={300} style={{objectFit: "contain"}} alt="Profile picture 3" className="sm:float-left me-8 mb-8"/>
                    <p>
                    When you work with BTG Immigration Consulting, you will be assigned an expert who will guide you through every step of the immigration process. No matter what your goals are whether they&apos;re personal or professional, we&apos;re here for you at BTG.
                    Our mission is to provide our clients with a secure, transparent, and seamless service; one that is easy to understand and stress-free. We strive to give our clients the best possible experience by working together collaboratively.
                    </p>
                    <p>
                    BTG Immigration Consulting operates with one goal: to provide a seamless, secure, and transparent service; one that is easy to understand for families, businesses,  individuals, seeking concise answers to begin their immigration journey to Canada and looking for an expert partner in navigating the Canadian immigration process. 
                    You shouldn&apos;t have to be an expert just to get your foot in the door. With BTG on your side, you won&apos;t have to be.
                    </p>
                </article> */}
                {/* <div className="text-center mt-8">
                    <Link href="https://www.facebook.com/btgimmigration/?paipv=0&eav=AfY5lfPUCGKVkNKl8YKRyATt8WvElCD0byW2LWEJ7UQinoJusfp4BUqeHYvGcnJDa04" target="_blank" className="mx-2"><i className="fa-brands fa-facebook text-4xl text-slate-300 hover:text-slate-600 duration-300"></i></Link>
                    <Link href="https://www.linkedin.com/in/amarachi-btgimmigration/" target="_blank" className="mx-2"><i className="fa-brands fa-linkedin text-4xl text-slate-300 hover:text-slate-600 duration-300"></i></Link>
                </div> */}
            </div>
        </section>
    )
}