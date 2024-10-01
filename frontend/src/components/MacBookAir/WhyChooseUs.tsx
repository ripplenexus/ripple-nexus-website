import React from 'react';
import '../../../public/static/css/MacBookAir/Cards.css';

import clientImg from '../../../public/static/img/chooseUs/client.png';
import consultationImg from '../../../public/static/img/chooseUs/consultation.png';
import implementationImg from '../../../public/static/img/chooseUs/implementation.png';
import improvementImg from '../../../public/static/img/chooseUs/improvement.png';
import monitoringImg from '../../../public/static/img/chooseUs/monitoring.png';
import qualityImg from '../../../public/static/img/chooseUs/quality.png';
import reportingImg from '../../../public/static/img/chooseUs/reporting.png';
import researchImg from '../../../public/static/img/chooseUs/research.png';

interface Service {
    image: string;
    title: string;
    description: string;
}

const WhyChooseUs: React.FC = () => {
    const services: Service[] = [
        {
            image: consultationImg,
            title: 'Consultation',
            description: 'Providing expert advice to help you achieve your goals.'
        },
        {
            image: researchImg,
            title: 'Research',
            description: 'Conducting thorough research to inform our strategies.'
        },
        {
            image: implementationImg,
            title: 'Implementation',
            description: 'Executing plans with precision and efficiency.'
        },
        {
            image: monitoringImg,
            title: 'Monitoring',
            description: 'Keeping track of progress to ensure success.'
        },
        {
            image: reportingImg,
            title: 'Reporting',
            description: 'Providing detailed reports on our activities and outcomes.'
        },
        {
            image: improvementImg,
            title: 'Improvement',
            description: 'Continuously improving our processes and services.'
        },
        {
            image: qualityImg,
            title: 'Quality',
            description: 'Ensuring the highest quality in everything we do.'
        },
        {
            image: clientImg,
            title: 'Client Priority',
            description: 'Putting our clients first in all our endeavors.'
        }
    ];

    return (
        <div className="why-choose-us-container">
            <h1>Why Choose Us</h1>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <img src={service.image} alt={service.title} />
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;
