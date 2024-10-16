import React from 'react';
import ServiceCover from '../components/ServicePage/ServiceCover';
import ServicesCards from '../components/MacBookAir/ServicesCards';

const ServicePage: React.FC = ()=>{

    return(
        <>
            <ServiceCover/>
            <ServicesCards/>
        </>
    )
}

export default ServicePage;