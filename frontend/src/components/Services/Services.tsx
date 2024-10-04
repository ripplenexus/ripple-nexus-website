import React from 'react';
import { useLoaderData } from 'react-router-dom';
import categories from './Category';
import "../../../public/static/css/Services.css"


interface ServicesProps {
    category: string;
}

const Services: React.FC<ServicesProps> = () => {
    const { category } = useLoaderData() as { category: string };
    const categoryData = categories[category];

    if (!categoryData) {
        return <div>Category not found:{category}</div>;
    }

    return (
        <div className='services-category'>
            <section className="cover-section" style={{backgroundColor:`${categoryData.cover.color}`}}>
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
                    <img  src={categoryData.cover.image} alt={categoryData.cover.mainHeading} />
                    </div>
                </div>
            </section>

            <section className="body-section">
                <div className="body-content">
                    <h2 className="body-heading">{categoryData.body.heading}</h2>
                    <p className="body-description">{categoryData.body.description}</p>
                    <button className="body-button"><label>{categoryData.body.buttonText}</label></button>
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