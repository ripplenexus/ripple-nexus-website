import React from 'react';
import ServiceCover from './ServiceCover';
import ServicesCards from '../MacBookAir/ServicesCards';

const ServicePage: React.FC = ()=>{

    return(
        <>
            <ServiceCover/>
            <ServicesCards/>
        </>
    )
}

export default ServicePage;