import Link from "next/link";
import Image from "next/image";
import ServiceCard from "./ServiceCard";

export default function Services() {
    const services = [
        {
            title1: "Visitor Visas & Supervisa:", 
            icon: 'fa-solid fa-plane-departure',
            title2: 'Explore, Visit, and Experience Canada and spend quality time with family',
            image: '/images/service13.jpeg',
            description: "<p>A Visitor Visa allows foreign nationals and their loved ones to visit Canada for a short period, usually for tourism, family visits, or business purposes. Visitor visa is typically valid for 6 months( extension is possible). While the Super visa is designed for parents and grandparents of Canadian citizens or permanent residents, allowing them to visit for up to 5 years without the need for visa renewals. Applicants must meet specific financial requirements and obtain private Canadian health insurance. Experience Canada's beauty, reunite with loved ones, and embrace Canada's vibrant culture through our Visitor Visas & Super Visa services.</p>"
        },
        {
            title1: "Study Permit & Postgraduate work permit(PGWP):",
            icon: 'fa-solid fa-graduation-cap',
            title2: 'Your path to great academic success with a study permit and career growth with a PGWP',
            image: '/images/service14.jpeg',
            description: "A study permit is a document which grants international students the opportunity to study and pursue their academic dreams at renowned designated Canadian learning institutions. As an international student, the PGWP allows graduates to work in Canada after completing their studies. The duration of your pgwp depends on the length of your studies."
        },
        {
            title1: "Work Permit & Labor Market Impact Assessment (LMIA):",
            icon: 'fa-solid fa-briefcase',
            title2: 'Gain valuable international work experience, thrive, and earn a living in Canada',
            image: '/images/service15.jpeg',
            description: `
            <p>Open doors to a world of possibilities with a Work Permit. The Work Permit allows foreign nationals to work in Canada temporarily. Canadian employers seeking international talents, need to apply for an LMIA from the government of Canada to hire foreign workers to the Canadian labor market.<p/> 
            <p>Certain workers, such as those under international trade agreements, intra-company transferees, and international students graduating from Canadian institutions, are LMIA-exempt. This allows them to obtain Work Permits without requiring the traditional LMIA process. Whether you're a skilled worker, a professional, or a foreign worker, we'll guide you through the process.</p>`
        },
        {
            title1: "BOWP & SOWP:",
            icon: 'fa-solid fa-check-double',
            title2: 'Seamlessly transition to permanent residency or unite with your loved ones',
            image: '/images/service11.jpeg',
            description: `
            <p>The Bridging Open Work Permit (BOWP) allows you to maintain your work status while waiting for your permanent residence application to be processed. To enjoy the benefit of continued work status, you must submit your application before your existing status expires.</p>
            <p>The Spousal Open Work Permit (SOWP) allows spouses and common-law partners of permanent residents, citizens, and international students  to work in Canada while your permanent residence immigration status is in progress. Our BOWP and SOWP services keep your dreams on track and ensure you stay together on this beautiful Canadian journey.</p>
            `
        },
        {
            title1: "Express Entry & Provincial Nominee Programs (PNP):",
            icon: 'fa-solid fa-clipboard',
            title2: 'Unleash your skills that open doors! Your pathway to Canadian PR awaits you',
            image: '/images/service12.jpeg',
            description: `
            <p>Express Entry is a point-based system managing applications for three federal immigration programs: Federal Skilled Worker Program (FSWP), Canadian Experience Class (CEC), and Federal Skilled Trades Program (FSTP). As an express entry candidate, you are evaluated based on factors like: age, education, work experience, language proficiency, and adaptability factors.</p> 
            <p>PNP allows provinces and territories to nominate candidates for permanent residence based on their specific labor market needs.The requirements vary by province or territory. For applicants with specific skills or connections to a particular province, PNPs offer an excellent pathway to permanent residency.</p>
            
            `
        },
        {
            title1: "Family and Spousal Sponsorship:",
            icon: 'fa-solid fa-people-group',
            title2: 'Build your future together and create lasting memories in Canada',
            image: '/images/service16.jpeg',
            description: "<p>Family is at the heart of Canadian immigration! Canadian citizens or permanent residents can sponsor their eligible family members, including spouses, common-law partners, dependent children, adopted children and parents/grandparents. The sponsor must meet specific financial and sponsorship eligibility criteria, and the sponsored individuals must meet relationship and admissibility requirements.</p>"
        },
        {
            title1: "Canadian Citizenship:",
            icon: 'fa-brands fa-canadian-maple-leaf',
            title2: 'The Canadian dream awaits you! Enjoy all the privileges of being a Canadian citizen',
            image: '/images/service6.jpeg',
            description: `Once you've established your roots in Canada as a permanent resident, you can eventually become a Canadian citizen. Canadian citizenship offers numerous rights and benefits, including the ability to vote, obtain a Canadian passport, live in Canada indefinitely, and access full government services and programs.<br/>
            To be eligible for Canadian citizenship, you must meet the following criteria:
            <ul>
                <li>You must be a permanent resident of Canada.</li>
                <li>You must have been physically present in Canada for at least 1,095 days within the five years before applying.</li>
                <li>You must have filed your income taxes for at least three years within the five-year period.</li>
                <li>You must demonstrate language proficiency in English or French.</li>
                <li>You must pass a test on Canadian history, values, institutions, and symbols.</li>
            </ul>
            `
        },
        {
            title1: "Parent and Grandparents Program:",
            icon: 'fa-solid fa-person-walking-with-cane',
            title2: 'Reuniting generations and embracing your Canadian journey together',
            image: '/images/service5.jpeg',
            description: "<p>The Parent and Grandparents Program allows Canadian citizens and permanent residents to sponsor their parents and grandparents to become permanent residents. You as the sponsor must meet specific income requirements and sign a sponsorship agreement committing to support the sponsored individuals financially. Our PGP service will guide you through the application process, ensuring your family is united in Canada.</p>"
        },
        {
            title1: "Caregivers Program:",
            icon: 'fa-solid fa-hands-holding-child',
            title2: 'Compassionate and dedicated individuals making a difference one life at a time',
            image: '/images/service17.jpeg',
            description: "<p>Make a difference in the lives of those in need while building a future in Canada. The Caregivers Program provides opportunities for foreign caregivers to work in Canada as a child caregiver or a home support worker and apply for permanent residence after fulfilling specific work requirements and meeting the language proficiency requirements. This pathway allows caregivers to make a meaningful difference in the lives of those they assist, while building a stable future for themselves and their family.</p>"
        },
        {
            title1: "Passports & Travel Document:",
            icon: 'fa-solid fa-passport',
            title2: 'Your gateway to boundless adventures! Seamlessly travel the world',
            image: '/images/service8.jpeg',
            description: "<p>Canadian passports are issued to Canadian citizens for international travel. Travel documents are issued to protected persons, stateless individuals, and others who are not eligible for a passport but need to travel internationally. Need to renew your Canadian passport or travel document? Our team is here to make the process swift and straightforward, ensuring you can travel with confidence.</p>"
        },
        {
            title1: "PNP Net Worth Verification:",
            icon: 'fa-solid fa-money-check-dollar',
            title2: 'Undergo a net worth verification and secure your path to Provincial Nominee Programs',
            image: '/images/service9.jpeg',
            description: "<p>The Provincial Nominee Program (PNP) Net Worth Verification is a process where applicants must prove their financial standing, showcasing sufficient personal net worth to successfully settle in the province to which they are applying. This verification helps provinces ensure that potential immigrants can support themselves and their families upon arrival. Our Net Worth Verification service ensures you meet the financial requirements for Provincial Nominee Programs (PNPs). Let us pave the way for your dream life in Canada with a clear and confident path to permanent residency.</p>"
        },
        {
            title1: "GCMS Request and Review:",
            icon: 'fa-solid fa-file-pen',
            title2: 'Gain valuable insights of your immigration application with the Global Case Management System (GCMS)',
            image: '/images/service10.jpeg',
            description: "<p>Applicants can request access to their file through the Access to Information and privacy(ATIP) online request, allowing them to review the contents of their application, identify potential issues, and take appropriate action to improve their chances of success. Wondering about the status of your application or need more information on the decision made? Our GCMS Request and Review service allows you to access your immigration file notes through the Global Case Management System (GCMS). Our team will help you interpret the notes and address any concerns regarding your application.</p>"
        },
    ]

    return (
        <section className="pt-20 px-8 md:px-32">
            <div className="prose max-w-none text-center">
                <h1>Our Services</h1>
                <div className="w-full max-w-lg mx-auto my-12 aspect-video relative not-prose">
                    <Image src="/images/service18.jpg" fill alt="Service pic" style={{objectFit: 'cover'}}/>
                </div>
                <p>
                Are you dreaming of a new chapter in your life, filled with exciting opportunities, breathtaking landscapes, and a warm, welcoming community?  We at BTG Immigration Consulting, are here to make your immigration journey seamless and successful. Whether you&apos;re looking to visit, study, work, or make Canada your permanent home, we&apos;ve got you covered.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-y-4 mt-8">
                {services.map((service, index) => (
                <ServiceCard key={index} service={service} index={index}/>
                ))}
            </div>

            <div className="text-center mt-12">
                <Link href="https://www.tiktok.com/@btg.immigration?lang=en" target="_blank" className="mx-2"><i className="fa-brands fa-tiktok text-4xl lg:text-6xl text-slate-300 hover:text-slate-600 duration-300"></i></Link>
                <Link href="https://www.linkedin.com/in/amarachi-btgimmigration/" target="_blank" className="mx-2"><i className="fa-brands fa-linkedin text-4xl lg:text-6xl text-slate-300 hover:text-slate-600 duration-300"></i></Link>
                <Link href="https://www.instagram.com/" target="_blank" className="mx-2"><i className="fa-brands fa-instagram text-4xl lg:text-6xl text-slate-300 hover:text-slate-600 duration-300"></i></Link>
                <Link href="https://www.facebook.com/btgimmigration/?paipv=0&eav=AfY5lfPUCGKVkNKl8YKRyATt8WvElCD0byW2LWEJ7UQinoJusfp4BUqeHYvGcnJDa04" target="_blank" className="mx-2"><i className="fa-brands fa-facebook text-4xl lg:text-6xl text-slate-300 hover:text-slate-600 duration-300"></i></Link>
            </div>
        </section>
    );
}