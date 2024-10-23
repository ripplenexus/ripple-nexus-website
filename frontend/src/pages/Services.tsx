import React, { useEffect } from 'react';
import { useLoaderData, useParams, useNavigate } from 'react-router-dom';
import categories from '../components/Services/Category';
import "../styles/css/Services.css"
import { TopObserver, BottomObserver, RightObserver, LeftObserver } from '../utils/Animation';



const Services: React.FC = () => {
    const { category } = useParams() as { category: string };
    const navigate = useNavigate();
    // const { category } = useLoaderData() as { category: string };
    const categoryData = categories[category];


    useEffect(() => {
       
        const rightAnim = document.querySelectorAll('.cover-image, .body-image') as NodeListOf<HTMLElement>;
        rightAnim.forEach((element) => {
            RightObserver.observe(element);
        });

        const servicesList = document.querySelectorAll('.services-list-item') as NodeListOf<HTMLElement>;
        servicesList.forEach((element, index) => {
            setTimeout(() => {
                BottomObserver.observe(element);
            }, index * 50);
        });

    }, []);

    if (!categoryData) {
        return <div>Category not found:{category}</div>;
    }

    return (
        <div className='services-category'>
            <section className="cover-section" style={{ backgroundColor: `${categoryData.cover.color}` }}>
                <div className='cover-group'>
                    <div className="cover-content">
                        <h1 className="cover-main-heading">{categoryData.cover.mainHeading}</h1>
                        <h2 className="cover-sub-heading">{categoryData.cover.subHeading}</h2>
                        <p className="cover-description">{categoryData.cover.description}</p>
                        <ul className="cover-list">
                            {categoryData.cover.list.map((item, index) => (
                                <li key={index} className="cover-list-item">{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="cover-image">
                        <img className='cover-title-img' src={categoryData.cover.image} alt={categoryData.cover.mainHeading} />
                    </div>
                </div>
            </section>

            <section className="body-section">
                <div className="body-content">
                    <h2 className="body-heading">{categoryData.body.heading}</h2>
                    <p className="body-description">{categoryData.body.description}</p>
                    <button className="body-button" onClick={()=>navigate('/about#contact-us')}><label>{categoryData.body.buttonText}</label></button>
                </div>
                <img className="body-image" src={categoryData.body.image} alt={categoryData.body.heading} />
            </section>

            <section className="services-section">
                <h2 className="services-heading">{categoryData.servicesDescription.heading}</h2>
                <ul className="services-list">
                    {categoryData.servicesDescription.services.map((service, index) => (
                        <li key={index} className="services-list-item">
                            <p className="service-subheading">{service.subheading}</p>
                            <p className="service-description">{service.description}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>

    );
};

export default Services;