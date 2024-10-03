import React from 'react';
import '../../../public/static/css/MacBookAir/Cards.css';

import webDevImg from '../../../public/static/img/services/webDev.png';
import designImg from '../../../public/static/img/services/design.png';
import graphicsImg from '../../../public/static/img/services/graphics.png';
import resumeImg from '../../../public/static/img/services/resume.png';
import sofwareImg from '../../../public/static/img/services/software.png';
import linkedInImg from '../../../public/static/img/services/linkedIn.png';

interface Service {
    image: string;
    category: string;
    description: string;
}

const Services: React.FC = () => {
    const services: Service[] = [
        {
            image: webDevImg,
            category: 'Website Development',
            description: 'We create personalized portfolio and blog websites with clean, responsive designs that showcase your work and ideas effectively.'
        },
        {
            image: designImg,
            category: 'UI/UX Design',
            description: 'We design user-friendly interfaces that are both visually appealling and easy to navigate, ensuring a seamless experience for your users.'
        },
        {
            image: graphicsImg,
            category: 'Graphic Design',
            description: 'Providing professional graphic and logo design services to elevate your brand\'s visual identity, ensuring a memorable and impactful presence.'
        },
        {
            image: resumeImg,
            category: 'Resume/CV Writing',
            description: 'Professional Resume/CV Writing:\n Crafting standout resumes that showcase your skills and experience to land your dream job.'
        },
        {
            image: sofwareImg,
            category: 'Software Development',
            description: 'We provide full software development services, from desing to deployment, to help achieve your business goals.'
        },
        {
            image: linkedInImg,
            category: 'LinkedIn Optimization',
            description: 'LinkedIn Profile Optimization: Enhancing your profile to attract recruiters and boost your professional presence online.'
        }
    ];

    return (
        <div className="services-container">
            <h1>Services</h1>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <img src={service.image} alt={service.category} />
                        <h2>{service.category}</h2>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
