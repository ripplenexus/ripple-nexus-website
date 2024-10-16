import React from 'react';
import { useNavigate} from 'react-router-dom';
import '../../styles/css/MacBookAir/Cards.css';

import webDevImg from '../../assets/img/services/webDev.png';
import designImg from '../../assets/img/services/design.png';
import graphicsImg from '../../assets/img/services/graphics.png';
import resumeImg from '../../assets/img/services/resume.png';
import sofwareImg from '../../assets/img/services/software.png';
import linkedInImg from '../../assets/img/services/linkedIn.png';

interface Service {
    service: string;
    image: string;
    category: string;
    description: string;
}

const ServicesCards: React.FC = () => {
    const navigate = useNavigate();
    const services: Service[] = [
        {   
            service:"website",
            image: webDevImg,
            category: 'Website Development',
            description: 'We create personalized portfolio and blog websites with clean, responsive designs that showcase your work and ideas effectively.'
        },
        {   service:"design",
            image: designImg,
            category: 'UI/UX Design',
            description: 'We design user-friendly interfaces that are both visually appealling and easy to navigate, ensuring a seamless experience for your users.'
        },
        {   service:"graphic",
            image: graphicsImg,
            category: 'Graphic Design',
            description: 'Providing professional graphic and logo design services to elevate your brand\'s visual identity, ensuring a memorable and impactful presence.'
        },
        {   service:'resume',
            image: resumeImg,
            category: 'Resume/CV Writing',
            description: 'Professional Resume/CV Writing:\n Crafting standout resumes that showcase your skills and experience to land your dream job.'
        },
        {   service:'software',
            image: sofwareImg,
            category: 'Software Development',
            description: 'We provide full software development services, from desing to deployment, to help achieve your business goals.'
        },
        {   service:'linkedIn',
            image: linkedInImg,
            category: 'LinkedIn Optimization',
            description: 'LinkedIn Profile Optimization: Enhancing your profile to attract recruiters and boost your professional presence online.'
        }
    ];

    const handleClick = (url: string): void => {
        navigate(`/services/${url}`);
        window.scroll(0,0);
      };

    return (
        <div className="services-container">
            <h1>Services</h1>
            <div className="services-grid">
                {services.map((service, index) => (
                    
                    <div className="service-card" key={index} onClick={() => handleClick(service.service)}>
                        <img src={service.image} alt={service.category} />
                        <h2>{service.category}</h2>
                        <p>{service.description}</p>
                    </div>
                    
                ))}
            </div>
        </div>
    );
};

export default ServicesCards;
