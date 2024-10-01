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
            category: 'Web Development',
            description: 'Building responsive and high-performance websites.'
        },
        {
            image: designImg,
            category: 'UI/UX Design',
            description: 'Creating intuitive and engaging user interfaces.'
        },
        {
            image: graphicsImg,
            category: 'Graphic Design',
            description: 'Designing visually appealing graphics and logos.'
        },
        {
            image: resumeImg,
            category: 'Resume/CV Writing',
            description: 'Crafting professional resumes and CVs.'
        },
        {
            image: linkedInImg,
            category: 'LinkedIn Optimization',
            description: 'Enhancing LinkedIn profiles for better visibility.'
        },
        {
            image: sofwareImg,
            category: 'Software Development',
            description: 'Enhancing LinkedIn profiles for better visibility.'
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
