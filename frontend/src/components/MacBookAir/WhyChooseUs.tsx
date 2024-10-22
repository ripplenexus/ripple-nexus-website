import React, {useEffect} from 'react';
import '../../styles/css/MacBookAir/Cards.css';
import { RightObserver, TopObserver } from '../../utils/Animation';

import clientImg from '../../assets/img/chooseUs/client.png';
import consultationImg from '../../assets/img/chooseUs/consultation.png';
import implementationImg from '../../assets/img/chooseUs/implementation.png';
import improvementImg from '../../assets/img/chooseUs/improvement.png';
import monitoringImg from '../../assets/img/chooseUs/monitoring.png';
import qualityImg from '../../assets/img/chooseUs/quality.png';
import reportingImg from '../../assets/img/chooseUs/reporting.png';
import researchImg from '../../assets/img/chooseUs/research.png';

interface Service {
    image: string;
    title: string;
    description: string;
}

const services: Service[] = [
    {
        image: consultationImg,
        title: 'Consultation',
        description: 'Initial consultation to discuss business goals, target audience, and current marketing efforts'
    },
    {
        image: researchImg,
        title: 'Research',
        description: 'Research and strategy development for informed decisions and long-term growth.'
    },
    {
        image: implementationImg,
        title: 'Implementation',
        description: 'Initial consultation to discuss business goals, target audience, and current marketing efforts.'
    },
    {
        image: monitoringImg,
        title: 'Monitoring',
        description: 'Precise implementation to transform ideas into tangible results.'
    },
    {
        image: reportingImg,
        title: 'Reporting',
        description: 'Clear reports and open communication to keep you informed.'
    },
    {
        image: improvementImg,
        title: 'Improvement',
        description: 'Continual improvement for sustained success.'
    },
    {
        image: qualityImg,
        title: 'Quality',
        description: 'We deliver high-quality services with attention to detail, ensuring every project is executed flawlessly.'
    },
    {
        image: clientImg,
        title: 'Client Priority',
        description: 'Your goals are our priority. We tailor solutions to your needs, working closely to ensure your satisfaction and success.'
    }
];

const WhyChooseUs: React.FC = () => {

    // useEffect(()=>{
    //     const cards = document.querySelectorAll('.choose-us .service-card') as NodeListOf<HTMLElement>;
    //     cards.forEach((element, index) => {
    //         TopObserver.observe(element);
    //     });
    // },[]);

   

    return (
        <div className='choose-us'>
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
        </div>
    );
};

export default WhyChooseUs;
