import webCover from '../../assets/img/services/webCover.png';
import designCover from '../../assets/img/services/designCover.png';
import graphicsCover from '../../assets/img/services/graphicsCover.png';
import resumeCover from '../../assets/img/services/resumeCover.png';
import softwareCover from '../../assets/img/services/softwareCover.png';
import linkedInCover from '../../assets/img/services/linkedInCover.png';

import webDevImg from '../../assets/img/services/webDev.png';
import designImg from '../../assets/img/services/design.png';
import graphicsImg from '../../assets/img/services/graphics.png';
import resumeImg from '../../assets/img/services/resume.png';
import sofwareImg from '../../assets/img/services/software.png';
import linkedInImg from '../../assets/img/services/linkedIn.png';

interface Category {
    cover: {
        mainHeading: string;
        subHeading: string;
        description: string;
        list: string[];
        image: string;
        color: string;
    };
    body: {
        heading: string;
        description: string;
        buttonText: string;
        image: string;
    };
    servicesDescription: {
        heading: string;
        services: { subheading: string; description: string }[];
    };
}

const categories: { [key: string]: Category } = {
    "website": {
        cover: {
            mainHeading: "Website Development",
            subHeading: "What is web development?",
            description: "Web Development refers to the process of building and maintaining websites. It involves a combination of coding, design, and technical skills to create websites that are functional, user-friendly, and visually appealing. Web development typically includes two main areas:",
            list: [
                "Front-End Development: This focuses on the part of the website that users interact with, including the design, layout, and navigation. Front-end developers use languages like HTML, CSS, and JavaScript to create responsive and engaging websites.",
                "Back-End Development: This handles the server-side of a website, ensuring it functions smoothly behind the scenes. It involves managing databases, servers, and applications using languages such as PHP, Python, and Ruby."
            ],
            image: webCover,
            color: "#8613bc"
        },
        body: {
            heading: "Website Development",
            description: "We offer professional web development services to bring your ideas to life with a custom-built website. Whether you need a simple landing page, a dynamic business site, or a fully integrated e-commerce platform, we tailor our solutions to meet your specific goals.",
            buttonText: "Request An Estimation",
            image: webDevImg
        },
        servicesDescription: {
            heading: "Our Services Include:",
            services: [
                {
                    subheading: "Custom Website Design & Development",
                    description: "We create unique, user-friendly websites tailored to your brand, ensuring a seamless experience across all devices."
                },
                {
                    subheading: "Responsive Design",
                    description: "All our websites are designed to be fully responsive, ensuring they look and perform perfectly on any device."
                },
                {
                    subheading: "E-Commerce Solutions",
                    description: "From product pages to secure payment gateways, we build online stores that boost your business and streamline customer experience."
                },
                {
                    subheading: "SEO Optimization",
                    description: "We develop websites with SEO in mind, helping your site rank higher in search results and reach a broader audience."
                },
                {
                    subheading: "Maintenance & Support",
                    description: "We provide ongoing support to ensure your website is always up to date, secure, and running smoothly."
                }
            ]
        }
    },
    "design": {
        cover: {
            mainHeading: "UI/UX Design",
            subHeading: "What is UI/UX Design?",
            description: "UI/UX Design refers to the process of creating user-friendly, engaging, and visually appealing digital interfaces for websites, applications, or software. It combines two distinct but related fields:",
            list: [
                "UI (User Interface) Design: This focuses on the visual elements of a product, such as layout, buttons, icons, and typography. UI designers ensure that the interface is aesthetically pleasing, intuitive, and easy to navigate. The goal is to create a seamless interaction between users and the product.",
                "UX (User Experience) Design: UX design is about how a user feels when interacting with a product. It involves researching and understanding user behavior, creating user flows, and ensuring that the product is both functional and enjoyable to use. UX designers aim to provide meaningful and relevant experiences by enhancing usability and accessibility."
            ],
            image: designCover,
            color: "#3b0e69"
        },
        body: {
            heading: "UI/UX Design",
            description: "We specialize in designing intuitive and visually compelling user interfaces that significantly enhance user experiences. Our focus is on creating websites and apps that are not only aesthetically pleasing but also highly functional, ensuring smooth navigation and engagement for users, ultimately driving both user satisfaction and business success.",
            buttonText: "Request An Estimation",
            image: designImg
        },
        servicesDescription: {
            heading: "Our Services Include:",
            services: [
                {
                    subheading: "User-Centered Design",
                    description: "We create designs that prioritize the needs and preferences of your target audience, ensuring a seamless user journey."
                },
                {
                    subheading: "Wireframing & Prototyping",
                    description: "Our process includes developing wireframes and interactive prototypes, allowing you to visualize your product before development."
                },
                {
                    subheading: "Responsive Design",
                    description: "We ensure your UI looks stunning and operates smoothly on any device, providing a consistent user experience across platforms."
                },
                {
                    subheading: "Usability Testing",
                    description: "We conduct in-depth usability tests to refine designs and ensure optimal functionality for your users."
                },
                {
                    subheading: "Brand Integration",
                    description: "Our designs are tailored to align with your brand’s identity, creating a cohesive look and feel across all touchpoints."
                }
            ]
        }
    },
    "graphic": {
        cover: {
            mainHeading: "Graphic & Logo Design",
            subHeading: "What is Graphic & Logo Design?",
            description: "Graphic & Logo Design refers to the process of creating visual content that communicates a message, establishes a brand identity, and enhances the appeal of a product or service. It involves the use of images, typography, colors, and layout to convey information effectively.",
            list: [
                "Graphic Design: This is the broader field that involves designing various visual elements for marketing materials, websites, packaging, advertisements, and more. Graphic designers create visuals that attract attention, convey messages clearly, and enhance brand communication.",
                "Logo Design: A specific subset of graphic design, logo design focuses on creating a unique symbol or emblem that represents a brand or business. A logo is a key part of a company’s visual identity, designed to be memorable, distinctive, and reflective of the brand’s values and mission."
            ],
            image: graphicsCover,
            color: "#9a2078"
        },
        body: {
            heading: "Graphic & Logo Design",
            description: "We offer professional graphic and logo design services that help your brand stand out and make a lasting impression. Whether you're starting from scratch or rebranding, we ensure your visual identity reflects your values and resonates with your target audience.",
            buttonText: "Request An Estimation",
            image: graphicsImg
        },
        servicesDescription: {
            heading: "Our Services Include:",
            services: [
                {
                    subheading: "Custom Logo Design",
                    description: "We create unique logos that capture your brand’s essence and establish a memorable presence."
                },
                {
                    subheading: "Brand Identity",
                    description: "We develop complete brand identities, including color schemes, typography, and visual elements, ensuring consistency across all platforms."
                },
                {
                    subheading: "Marketing Materials",
                    description: "From business cards to brochures, we design compelling graphics that support your marketing efforts and enhance your brand."
                },
                {
                    subheading: "Digital Graphics",
                    description: "Our team produces eye-catching digital graphics for websites, social media, and online campaigns to boost engagement."
                },
                {
                    subheading: "Rebranding",
                    description: "Need a fresh start? We help refresh your brand with modern, relevant designs that reflect your evolving business."
                }
            ]
        }
    },
    "resume": {
        cover: {
            mainHeading: "Resume/CV Writing",
            subHeading: "What is Resume/CV Writing?",
            description: "Graphic & Logo Design refers to the process of creating visual content that communicates a message, establishes a brand identity, and enhances the appeal of a product or service. It involves the use of images, typography, colors, and layout to convey information effectively.",
            list: [
                "Graphic Design: This is the broader field that involves designing various visual elements for marketing materials, websites, packaging, advertisements, and more. Graphic designers create visuals that attract attention, convey messages clearly, and enhance brand communication.",
                "Logo Design: A specific subset of graphic design, logo design focuses on creating a unique symbol or emblem that represents a brand or business. A logo is a key part of a company’s visual identity, designed to be memorable, distinctive, and reflective of the brand’s values and mission."
            ], 
            image: resumeCover,
            color: "#0ca68a"
        },
        body: {
            heading: "Resume/CV Writing",
            description: "We provide expert resume and CV writing services to help you present your skills and experience in the best possible light. Whether you're entering the job market or advancing your career, we create professional, tailored documents that highlight your strengths and make you stand out.",
            buttonText: "Request An Estimation",
            image: resumeImg
        },
        servicesDescription: {
            heading: "Our Services Include:",
            services: [
                {
                    subheading: "Tailored Resumes/CVs",
                    description: "We craft customized resumes and CVs that align with your career goals and target specific industries or positions."
                },
                {
                    subheading: "Keyword Optimization",
                    description: "We optimize your resume/CV with relevant keywords to ensure it passes through Applicant Tracking Systems (ATS) and gets noticed by employers."
                },
                {
                    subheading: "Cover Letters",
                    description: "We write personalized, compelling cover letters that complement your resume and help you make a strong first impression."
                },
                {
                    subheading: "LinkedIn Profile Optimization",
                    description: "We optimize your LinkedIn profile to reflect your professional experience and enhance your online presence."
                },
                {
                    subheading: "Career Consulting",
                    description: "We offer guidance on how to position yourself for success, from job application strategies to interview preparation."
                }
            ]
        }
    },
    "software": {
        cover: {
            mainHeading: "Software Development",
            subHeading: "What is Software Development?",
            description: "Software Development is the process of designing, creating, and maintaining applications or systems that solve specific problems or meet business needs. It involves coding, testing, and deploying software solutions to ensure they are functional, secure, and scalable. Key aspects of software development include:",
            list: [
                "Custom Solutions: We build software tailored to your unique requirements, ensuring it fits your business goals.",
                "Quality and Performance: Our development process focuses on delivering high-performing, reliable, and efficient software that meets the highest standards."
            ],
            image: softwareCover,
            color: "#6620ac"
        },
        body: {
            heading: "Software Development",
            description: "Customized software development includes tailored solutions like CRM, ERP, CMS, AI Chatbots, e-commerce platforms, HRMS, POS systems, BI tools, and custom mobile/web apps to meet unique business needs.",
            buttonText: "Request An Estimation",
            image: sofwareImg
        },
        servicesDescription: {
            heading: "Our Services Include:",
            services: [
                {
                    subheading: "Custom Software Development",
                    description: "Tailored applications designed to meet specific business needs."
                },
                {
                    subheading: "Mobile App Development",
                    description: "Development of user-friendly mobile applications for iOS and Android devices."
                },
                {
                    subheading: "API Development and Integration",
                    description: "Building and integrating APIs for seamless communication between software applications."
                },
                {
                    subheading: "Software Testing and Quality Assurance",
                    description: "Comprehensive testing services to ensure software reliability, performance, and security."
                },
                {
                    subheading: "Cloud Solutions",
                    description: "Development of cloud-based applications for enhanced scalability and accessibility."
                }
            ]
        }
    },
    "linkedIn": {
        cover: {
            mainHeading: "LinkedIn Profile Optimization",
            subHeading: "What is LinkedIn Profile Optimization?",
            description: "LinkedIn Profile Optimization is the process of enhancing your LinkedIn profile to make it more professional, visible, and appealing to recruiters, employers, or potential business connections. The goal is to highlight your skills, experience, and achievements effectively while improving your profile’s searchability on LinkedIn.",
            list: [
                "Keyword Optimization: Using industry-specific keywords to increase your profile's visibility in search results and attract relevant opportunities.",
                "Engaging Content: Crafting a compelling headline, summary, and experience section to clearly communicate your professional value and goals, making a strong impression on viewers."
            ],
            image: linkedInCover,
            color: "#529bdf"
        },
        body: {
            heading: "LinkedIn",
            description: "Enhance your LinkedIn profile with our professional optimization services. We help you craft a compelling profile that showcases your skills, experience, and achievements, making you more visible to recruiters and potential employers.",
            buttonText: "Request An Estimation",
            image: linkedInImg
        },
        servicesDescription: {
            heading: "Our Services Include:",
            services: [
                {
                    subheading: "Profile Enhancement",
                    description: "We refine your profile to highlight your strengths and professional achievements, making it stand out in searches."
                },
                {
                    subheading: "Keyword Integration",
                    description: "We optimize your profile with relevant industry keywords to improve visibility and attract the right opportunities."
                },
                {
                    subheading: "Engaging Summaries",
                    description: "We write impactful summaries that effectively convey your career story and professional goals."
                },
                {
                    subheading: "Professional Endorsements",
                    description: "We guide you on obtaining and showcasing endorsements and recommendations to build credibility."
                },
                {
                    subheading: "Networking Strategy",
                    description: "We provide tips on expanding your network and engaging with relevant industry groups to maximize your LinkedIn presence."
                }
            ]
        }
    }
};

export default categories;
