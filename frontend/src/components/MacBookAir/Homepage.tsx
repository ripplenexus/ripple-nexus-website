import React from 'react';
import Contacts from "./Contacts";
import MainCover from "./Cover";
import ServicesCards from "./ServicesCards";
import WhyChooseUs from "./WhyChooseUs";

const Homepage: React.FC = () => {
    return (
        <>
            <MainCover />
            <ServicesCards />
            <WhyChooseUs />
            <Contacts />
        </>
    );
}

export default Homepage;
