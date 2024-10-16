import React from 'react';
import Contacts from "../components/Contacts";
import MainCover from "../components/MacBookAir/Cover";
import ServicesCards from "../components/MacBookAir/ServicesCards";
import WhyChooseUs from "../components/MacBookAir/WhyChooseUs";
import Testimonials from '../components/MacBookAir/Testimonials';

const HomePage: React.FC = () => {
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

export default HomePage;
