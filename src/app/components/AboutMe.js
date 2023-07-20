import Image from "next/image";
import Link from "next/link";
 
export default function AboutMe() {
    return (
        <section className="pt-20 px-8 md:px-32">
            <div className="prose max-w-none">
                
                <article>
                    <h1>About Me</h1>
                    <div className="relative w-80 aspect-square sm:float-left me-8 mb-8 not-prose">
                        <Image src="/images/pic-1.jpg" fill style={{objectFit: "contain"}} alt="Profile picture 1"/>
                    </div>
                    <p>
                    Our founder Ama is a Regulated Canadian Immigration Consultant(RCIC) located in beautiful Victoria  British Columbia. As an immigrant herself who came to Canada for a better future, she understands firsthand how overwhelming, confusing, and time-consuming the immigration process can be to navigate-not to mention how isolating it can feel when doing it alone. 
                    Since the past 14 years she has been here, she&apos;s been lucky enough to meet people from all kinds of backgrounds, ethnicities, and cultures-all with their own Canadian immigration stories.
                    And in hearing about their experiences not meeting their expectations, it became clear that there was a need for a professional service that could help other immigrants navigate the complex process of getting settled in Canada.
                    </p>
                    <p>
                    Ama is passionate about helping individuals, families, and businesses, achieve their Canadian immigration dreams. She knows how difficult it can sometimes be to sort through all of the information out there, especially when you&apos;re feeling overwhelmed by the ever fluid Immigration programs and process. 
                    That&apos;s why BTG Immigration Consulting was created to eliminate that sense of isolation and confusion,  and provide a secure,  engaging and collaborative service. Our goal is to make the process as simple, straightforward, and painless as possible.
                    </p>
                </article>
                <article>
                    <h2>Our Values</h2>
                    <div className="relative w-80 aspect-square sm:float-right mt-8 sm:mt-0 sm:ms-8 mb-8 not-prose">
                        <Image src="/images/pic-2.jpg" fill style={{objectFit: "contain"}} alt="Profile picture 2"/>
                    </div>
                    <p>
                    Here at BTG Immigration Consulting, we value honesty, integrity, and open communication.
                    Whether you&apos;re an individual or family looking to start a new chapter in your life or a business looking to expand your operations internationally, she want you to feel supported and confident throughout your immigration journey.
                    </p>
                    <p>
                    You deserve a great involved team who understands your unique goals, and who will carefully take care of all of the details, so that you can actually focus on things that matter to you and your family as your prepare your new life here in Canada.
                    </p>
                </article>
                <article>
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
                </article>
                <div className="text-center mt-8">
                    <Link href="https://www.facebook.com/btgimmigration/?paipv=0&eav=AfY5lfPUCGKVkNKl8YKRyATt8WvElCD0byW2LWEJ7UQinoJusfp4BUqeHYvGcnJDa04" target="_blank" className="me-4"><i className="fa-brands fa-facebook text-8xl text-slate-300 hover:text-slate-600 duration-300"></i></Link>
                    <Link href="https://www.linkedin.com/in/amarachi-btgimmigration/" target="_blank" className="ms-4"><i className="fa-brands fa-linkedin text-8xl text-slate-300 hover:text-slate-600 duration-300"></i></Link>
                </div>
            </div>
        </section>
    )
}