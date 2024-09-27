import Contacts from "./Contacts";
import MainCover from "./Cover";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";

const Homepage = () => {
    return (
        <>
            <MainCover />
            <Services />
            <WhyChooseUs />
            <Contacts />
        </>
    );
}

export default Homepage;