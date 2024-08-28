import bannerImage from "@/assets/banner3.jpg";
import { HiMagnifyingGlass } from "react-icons/hi2";
import bike from "@/assets/bikes/bike1.webp";
import bike2 from "@/assets/bikes/bike2.webp";
import bike3 from "@/assets/bikes/bike3.webp";
import SlideInFromLeft from "@/components/Animation/SlideFromLeft";
import Container from "@/components/Container/Container";
import SlideInFromRight from "@/components/Animation/SlideFromRight";
import ZoomInEffect from "@/components/Animation/ZoomInEffect";

const Banner = () => {
  return (
    <div
      className="relative lg:min-h-screen 2xl:min-h-[730px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-gray-700 to-black opacity-60"></div>

      {/* Content */}
      <div className="relative hero-content flex justify-center items-center flex-col min-h-[730px] md:h-screen  gap-10">
        <SlideInFromLeft>
          <h1 className="text-2xl font-bold capitalize sm:text-6xl leading-r text-white mb-5">
            Your Adventure Starts Here
          </h1>
        </SlideInFromLeft>
        <form className="sm:w-full max-w-xl mx-auto ">
          <SlideInFromRight>
            <div className="flex">
              <select className="block p-2.5  z-20 text-sm text-gray-900 bg-gray-50 rounded-s-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-transparent focus:border-white dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500">
                <option value=""> Search By </option>
                <option value="Diet"> Name </option>
                <option value="Health-Care"> Model </option>
              </select>
              <div className="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full  z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-transparent focus:border-white dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                  placeholder="Search Your Bike"
                />
                <button
                  type="submit"
                  className="absolute top-0 end-0 px-2.5 sm:px-5 py-2.5 text-sm font-medium h-full text-white bg-primary rounded-e-lg   hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-transparent dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <HiMagnifyingGlass className="w-5 h-5" />
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
          </SlideInFromRight>
        </form>
        <Container>
          <div className="text-center space-y-5 mt-5">
            <SlideInFromRight>
              <p className="text-xl sm:text-3xl font-medium text-white">
                Ride With Royal Bikes, BD’s most trusted motorcycle rental
                marketplace.
              </p>
            </SlideInFromRight>
            <div className="flex justify-center items-center gap-5">
              <ZoomInEffect>
                <img className="w-40" src={bike2} alt="" />
              </ZoomInEffect>
              <ZoomInEffect>
                <img className="w-40" src={bike} alt="" />
              </ZoomInEffect>
              <ZoomInEffect>
                <img className="w-40" src={bike3} alt="" />
              </ZoomInEffect>
            </div>
            <ZoomInEffect>
              <button className="primary-button">Book a bike</button>
            </ZoomInEffect>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
