import Container from "@/components/Container/Container";
import offerBanner from '@/assets/bikes/offerbanner2.jpg'
import offer from '@/assets/10offer.png'
import { Link } from "react-router-dom";
import SlideInFromRight from "@/components/Animation/SlideFromRight";
import SlideInFromLeft from "@/components/Animation/SlideFromLeft";

const Offer = () => {
    return (
      <Container>
        <div
          className="min-h-[350px] relative  rounded overflow-hidden mt-20 md:mt-24 mb-5 bg-cover bg-fixed bg-center bg-no-repeat flex justify-center items-center"
          style={{
            backgroundImage: `url(${offerBanner})`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="flex flex-col sm:flex-row justify-evenly items-center gap-10 w-full h-full absolute p-10">
            <SlideInFromLeft>
              <div className="flex justify-center items-center">
                <img
                  className="max-w-[200px] md:max-w-xs xl:max-w-sm"
                  src={offer}
                  alt=""
                />
              </div>
            </SlideInFromLeft>
            <SlideInFromRight>
              <div className="flex flex-col items-center justify-center text-center sm:px-8 space-y-4 md:space-y-8 ">
                <h3 className="font-semibold text-3xl sm:text-3xl md:text-5xl xl:text-6xl text-white font-madimi">
                  Exclusive Offer !!!
                </h3>
                <p className="text-lg sm:text-lg md:text-xl text-white my-4 font-semibold">
                  Enjoy 10% discount on your first ride.
                </p>
                <Link to="/bikes" type="button" className="primary-button">
                  Book Now
                </Link>
              </div>
            </SlideInFromRight>
          </div>
        </div>
      </Container>
    );
};

export default Offer;