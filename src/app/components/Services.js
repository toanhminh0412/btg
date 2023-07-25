import Link from "next/link";
import ServiceCard from "./ServiceCard";

export default function Services() {
    const services = [
        {
            title: "Visitor Visas & Supervisa:<br/> Explore Canada's stunning landscapes, visit and spend quality time with family, attend business meetings, and experience its vibrant culture", 
            description: "<p><strong>A Visitor Visa</strong> allows foreign nationals and their loved ones to visit Canada for a short period, usually for tourism, family visits, or business purposes. Visitor visa is typically valid for 6 months( extension is possible).  Enjoy unforgettable family moments against Canada's majestic landscapes.</p><p><strong>While the super visa</strong> is designed for parents and grandparents of Canadian citizens or permanent residents, allowing them to visit for up to 5 years without the need for visa renewals. Applicants must meet specific financial requirements and obtain private Canadian health insurance.</p>"
        },
        {
            title: "Study Permit & Postgraduate work permit(PGWP):<br/> Embark on an enriching educational journey with a study permit and gain valuable work experience in Canada",
            description: "<p><strong>A study permit</strong> is a document which grants international students the opportunity to study and pursue their academic dreams at renowned designated Canadian learning institutions. As an international student, the PGWP allows graduates to work in Canada after completing their studies. The duration of your pgwp depends on the length of your studies.</p>"
        },
        {
            title: "Work Permit & Labor Market Impact Assessment (LMIA):<br/> Earn a living in Canada, gain international work experience, and contribute to the local economy with a work permit",
            description: "<p>Open doors to a world of possibilities with a Work Permit. The Work Permit allows foreign nationals to work in Canada temporarily.  Canadian employers seeking international talents, need to apply for an LMIA from the government of Canada to hire foreign workers to the Canadian labor market.</p><p>Certain workers, such as those under international trade agreements, intra-company transferees, and international students graduating from Canadian institutions, are LMIA-exempt. This allows them to obtain Work Permits without requiring the traditional LMIA process. Whether you're a skilled worker, a professional, or a foreign worker, we'll guide you through the process.</p>"
        },
        {
            title: "Bridging Open Work Permit (BOWP) & Spousal Open Work Permit (SOWP):<br/> Transitioning between temporary residence status and permanent residence or Are you a spouse of someone studying or working in Canada?",
            description: "<p>The BOWP allows you to maintain your work status while waiting for your permanent residence application to be processed. To enjoy the benefit of continued work status, you must submit your application before your existing status expires.The SOWP allows spouses and common-law partners of permanent residents, citizens, and international students  to work in Canada while your permanent residence immigration status is in progress.</p>"
        },
        {
            title: "Express Entry & Provincial Nominee Programs (PNP):<br/> Skill-based applicants with work experience, language proficiency, and educational qualifications have the chance to receive an invitation to apply for PR",
            description: "<p>Express Entry is a point-based system managing applications for three federal immigration programs: Federal Skilled Worker Program (FSWP), Canadian Experience Class (CEC), and Federal Skilled Trades Program (FSTP). As an express entry candidate, you are evaluated based on factors like: age, education, work experience, language proficiency, and adaptability factors. PNP allows provinces and territories to nominate candidates for permanent residence based on their specific labor market needs. The requirements vary by province or territory. For applicants with specific skills or connections to a particular province, PNPs offer an excellent pathway to permanent residency.</p>"
        },
        {
            title: "Family and Spousal Sponsorship:<br/> Family reunification is an important pillar in Canadian immigration. Create lasting memories and build a new life together in Canada",
            description: "<p>Canadian citizens or permanent residents can sponsor their eligible family members, including spouses, common-law partners, dependent children, adopted children and parents/grandparents. The sponsor must meet specific financial and sponsorship eligibility criteria, and the sponsored individuals must meet relationship and admissibility requirements.</p>"
        },
        {
            title: "Parent and Grandparents Program:<br/> Reunite with your parents and grandparents in Canada through this program, and support your loved ones as they become part of your Canadian journey",
            description: "<p>The Parent and Grandparents Program allows Canadian citizens and permanent residents to sponsor their parents and grandparents to become permanent residents. You as the sponsor must meet specific income requirements and sign a sponsorship agreement committing to support the sponsored individuals financially. Our PGP service will guide you through the application process, ensuring your family is united in Canada.</p>"
        },
        {
            title: "Canadian Citizenship:<br/> Settle down permanently in Canada and enjoy all the privileges of being a Canadian citizen!",
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
            title: "Caregivers Program:<br/> Compassionate and dedicated individuals seeking to provide care for Canadians in need can find opportunities through the Caregivers Program",
            description: "<p>The Caregivers Program provides opportunities for foreign caregivers to work in Canada as a child caregiver or a home support worker and apply for permanent residence after fulfilling specific work requirements and meeting the language proficiency requirements. This pathway allows caregivers to make a meaningful difference in the lives of those they assist, while building a stable future for yourself and your family.</p>"
        },
        {
            title: "Passports & Travel Document:<br/> Obtain your Canadian passport or travel document, ensuring a smooth international travel and access to consular services when abroad",
            description: "<p>Canadian passports are issued to Canadian citizens for international travel. Travel documents are issued to protected persons, stateless individuals, and others who are not eligible for a passport but need to travel internationally. Need to renew your Canadian passport or travel document? Our team is here to make the process swift and straightforward, ensuring you can travel with confidence.</p>"
        },
        {
            title: "PNP Net Worth Verification:<br/> Certain Provincial Nominee Programs may require applicants to undergo net worth verification",
            description: "<p>The Provincial Nominee Program (PNP) Net Worth Verification is a process where applicants must prove their financial standing, showcasing sufficient personal net worth to successfully settle in the province to which they are applying. This verification helps provinces ensure that potential immigrants can support themselves and their families upon arrival.We assist you in gathering the necessary documents and presenting your net worth accurately.</p>"
        },
        {
            title: "GCMS Request and Review:<br/> The Global Case Management System (GCMS) is a government database used to store immigration application information.",
            description: "<p>Applicants can request access to their file through the Access to Information and privacy(ATIP) online request, allowing them to review the contents of their application, identify potential issues, and take appropriate action to improve their chances of success. Wondering about the status of your application or need more information on the decision made? Our GCMS Request and Review service allows you to access your immigration file notes through the Global Case Management System (GCMS). Our team will help you interpret the notes and address any concerns regarding your application.</p>"
        },
    ]

    // const otherServices = [
    //     {title: "Canadian Citizenship", description: "Donec rutrum aliquet lectus, sed lobortis elit eleifend fermentum. Nunc a rhoncus sapien. Nunc pharetra interdum erat, sed imperdiet enim molestie non. Cras venenatis tincidunt erat feugiat rutrum. Nunc tempus consectetur tristique. Cras egestas pulvinar turpis id aliquam. Suspendisse id purus vel mauris eleifend accumsan. Aenean hendrerit odio quis dolor accumsan, et gravida lectus finibus."},
    //     {title: "DIY Application Package", description: "Donec rutrum aliquet lectus, sed lobortis elit eleifend fermentum. Nunc a rhoncus sapien. Nunc pharetra interdum erat, sed imperdiet enim molestie non. Cras venenatis tincidunt erat feugiat rutrum. Nunc tempus consectetur tristique. Cras egestas pulvinar turpis id aliquam. Suspendisse id purus vel mauris eleifend accumsan. Aenean hendrerit odio quis dolor accumsan, et gravida lectus finibus."},
    //     {title: "Passports & Travel document", description: "Donec rutrum aliquet lectus, sed lobortis elit eleifend fermentum. Nunc a rhoncus sapien. Nunc pharetra interdum erat, sed imperdiet enim molestie non. Cras venenatis tincidunt erat feugiat rutrum. Nunc tempus consectetur tristique. Cras egestas pulvinar turpis id aliquam. Suspendisse id purus vel mauris eleifend accumsan. Aenean hendrerit odio quis dolor accumsan, et gravida lectus finibus."},
    //     {title: "PNP net worth verification", description: "Donec rutrum aliquet lectus, sed lobortis elit eleifend fermentum. Nunc a rhoncus sapien. Nunc pharetra interdum erat, sed imperdiet enim molestie non. Cras venenatis tincidunt erat feugiat rutrum. Nunc tempus consectetur tristique. Cras egestas pulvinar turpis id aliquam. Suspendisse id purus vel mauris eleifend accumsan. Aenean hendrerit odio quis dolor accumsan, et gravida lectus finibus."},
    //     {title: "GCMS request and review", description: "Donec rutrum aliquet lectus, sed lobortis elit eleifend fermentum. Nunc a rhoncus sapien. Nunc pharetra interdum erat, sed imperdiet enim molestie non. Cras venenatis tincidunt erat feugiat rutrum. Nunc tempus consectetur tristique. Cras egestas pulvinar turpis id aliquam. Suspendisse id purus vel mauris eleifend accumsan. Aenean hendrerit odio quis dolor accumsan, et gravida lectus finibus."},
    // ]

    return (
        <section className="pt-20 px-8 md:px-32">
            <div className="prose max-w-none text-center">
                <h1>Our Services</h1>
                <p>
                Are you dreaming of a new chapter in your life, filled with exciting opportunities, breathtaking landscapes, and a warm, welcoming community?  We, at BTG Immigration Consulting, are here to make your immigration journey seamless and successful. Whether you&apos;re looking to visit, study, work, or make Canada your permanent home, we&apos;ve got you covered.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-y-4 mt-8">
                {services.map((service, index) => (
                <ServiceCard key={index} service={service} />
                ))}
            </div>

            {/* <div className="prose max-w-none text-center mt-20">
                <h1>Other services</h1>
            </div>
            <div className="grid grid-cols-1 gap-y-4 mt-8">
                {otherServices.map((service, index) => (
                <ServiceCard key={index} service={service} />
                ))}
            </div> */}
        </section>
    );
}