import React from 'react';
import Contacts from "./Contacts";
import MainCover from "./Cover";
import ServicesCards from "./ServicesCards";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from './Testimonials';

const Homepage: React.FC = () => {
    return (
        <>
            <MainCover />
            <ServicesCards />
            <WhyChooseUs />
            <Testimonials/>
            <Contacts />
        </>
    );
}

export default Homepage;
