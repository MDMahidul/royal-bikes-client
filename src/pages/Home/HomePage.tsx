import Banner from "./Banner";
import ContactUs from "./ContactUs";
import Coupon from "./Coupon";
import HowToRent from "./HowToRent";
import OurServices from "./ListedBikes";
import Offer from "./Offer";
import Testimonial from "./Testimonial";
import WhyChooseUs from "./WhyChooseUs";

const HomePage = () => {
    return (
      <>
        <Banner />
        <OurServices />
        <Offer/>
        <WhyChooseUs/>
        <Coupon/>
        <HowToRent/>
        <Testimonial/>
        <ContactUs/>
      </>
    );
};

export default HomePage;