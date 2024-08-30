import SlideInFromLeft from "@/components/Animation/SlideFromLeft";
import SlideInFromRight from "@/components/Animation/SlideFromRight";
import logo from "@/assets/logo/ffflogo.png";
import ParallaxHeader from "@/components/SectionHeader/ParallaxHeader";
import imageOne from "@/assets/bikes/au.jpg";
import imageTwo from "@/assets/bikes/au1.jpeg";
import { SlCalender } from "react-icons/sl";
import staffData from "@/assets/data/staffs.json";
import FadeInUpAnimation from "@/components/Animation/FadeInUpAnimtaion";
import StaffCard from "@/components/Cards/StaffCard";
import Lottie from "lottie-react";
import comuncation from "@/assets/data/com.json";
import pin from "@/assets/data/pin.json";

const AboutUs = () => {
  return (
    <div className="py-10 md:py-16 ">
      <ParallaxHeader heading="About Us" />
      <div className="max-w-5xl mx-auto px-5 mt-5">
        <div className="dark:text-white py-5 font-medium">
          <SlideInFromLeft>
            <div className="flex flex-col md:flex-row items-center gap-5 md:gap-10 ">
              <img className="max-w-[150px]" src={logo} alt="" />
              <p>
                Founded in 2010, Royal Bikes began with a single location and a
                handful of motorcycles. Over the years, we have grown
                exponentially, expanding our fleet and opening new locations
                across the country. What started as a small business driven by
                passion has become a trusted name in motorcycle rentals,
                recognized for our unwavering commitment to quality and service.
              </p>
            </div>
          </SlideInFromLeft>
          <SlideInFromLeft>
            <div className="mb-10 mt-5">
              At Royal Bikes, we are passionate about connecting adventurers
              with the freedom of the open road. Our mission is to make the
              thrill of riding accessible to everyone, from seasoned bikers to
              those new to the experience. We believe in the power of
              exploration and the joy that comes from discovering new places on
              two wheels.
            </div>
          </SlideInFromLeft>
          <div className="flex flex-col md:flex-row justify-between mb-10 md:mb-20 gap-10">
            <div className=" md:w-1/2">
              <SlideInFromLeft>
                <h3 className="text-2xl font-semibold text-primary dark:text-white mb-3">
                  Our Mission
                </h3>
                <p>
                  To provide unparalleled motorcycle rental experiences that
                  inspire adventure, foster community, and promote responsible
                  riding. We are dedicated to offering a diverse fleet of
                  meticulously maintained motorcycles, ensuring the highest
                  levels of safety and reliability. Our commitment to
                  exceptional customer service extends beyond the rental
                  process, as we strive to create lasting memories and foster a
                  sense of belonging among our riders. By providing affordable
                  and accessible options, we empower individuals to explore the
                  world around them and discover the transformative power of two
                  wheels.
                </p>
              </SlideInFromLeft>
            </div>
            <div className="md:w-1/2">
              <SlideInFromRight>
                <img className="w-full" src={imageOne} alt="" />
              </SlideInFromRight>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-between mb-10 md:mb-20 gap-10">
            <div className="md:w-1/2">
              <SlideInFromLeft>
                <img className="w-full" src={imageTwo} alt="" />
              </SlideInFromLeft>
            </div>
            <div className=" md:w-1/2">
              <SlideInFromRight>
                <h3 className="text-2xl font-semibold text-primary dark:text-white mb-3">
                  Our Vision
                </h3>
                <p>
                  To be the global leader in motorcycle rentals, recognized for
                  our innovation, sustainability, and unwavering dedication to
                  customer satisfaction. We envision a future where our company
                  is synonymous with adventure, quality, and community. Through
                  our commitment to responsible riding and environmental
                  stewardship, we aim to contribute positively to the world and
                  inspire others to embrace the joy and freedom of motorcycle
                  travel. Our vision is to create a global network of riders who
                  share our passion for exploration and who are empowered to
                  make a positive impact on the world.
                </p>
              </SlideInFromRight>
            </div>
          </div>

          <div className="mb-10 md:mb-20">
            <SlideInFromLeft>
              <h3 className="text-2xl font-semibold text-primary dark:text-white mb-5">
                Our Milestones
              </h3>
              <ol className="items-center md:flex">
                <li className="relative mb-6 md:mb-0">
                  <div className="flex items-center">
                    <div className="z-10 flex items-center justify-center w-7 h-7 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                      <SlCalender className="text-primary dark:text-white" />
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
                  </div>
                  <div className="mt-3 sm:pe-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Year 2010
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Grand Opeing
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Established the company with a focus on providing
                      top-notch motorcycles for enthusiasts.
                    </p>
                  </div>
                </li>
                <li className="relative mb-6 md:mb-0">
                  <div className="flex items-center">
                    <div className="z-10 flex items-center justify-center w-7 h-7 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                      <SlCalender className="text-primary dark:text-white" />
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
                  </div>
                  <div className="mt-3 sm:pe-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Year 2012
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Expanding
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Expanded our fleet to include a wide variety of bikes,
                      catering to different riding styles and preferences.
                    </p>
                  </div>
                </li>
                <li className="relative mb-6 md:mb-0">
                  <div className="flex items-center">
                    <div className="z-10 flex items-center justify-center w-7 h-7 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                      <SlCalender className="text-primary dark:text-white" />
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
                  </div>
                  <div className="mt-3 sm:pe-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Year 2018
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Live on Online
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Launched our online booking platform, making it easier
                      than ever for customers to reserve their dream bike.
                    </p>
                  </div>
                </li>
                <li className="relative mb-6 md:mb-0">
                  <div className="flex items-center">
                    <div className="z-10 flex items-center justify-center w-7 h-7 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                      <SlCalender className="text-primary dark:text-white" />
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
                  </div>
                  <div className="mt-3 sm:pe-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Year 2023
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Recognition
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Achieved recognition as the most trusted motorcycle rental
                      service in Bangladesh, thanks to our loyal customers and
                      dedicated team.
                    </p>
                  </div>
                </li>
              </ol>
            </SlideInFromLeft>
          </div>
          <div className="mb-10 md:mb-20">
            <SlideInFromRight>
              <h3 className="text-2xl font-semibold text-primary dark:text-white mb-5">
                Our Team Members
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 mx-auto w-11/12 md:w-full">
                {staffData.staffs.map((staff, index) => (
                  <FadeInUpAnimation key={staff.id} custom={index}>
                    <StaffCard staff={staff} />
                  </FadeInUpAnimation>
                ))}
              </div>
            </SlideInFromRight>
          </div>
          <div className="">
            <SlideInFromLeft>
              <h3 className="text-2xl font-semibold text-primary dark:text-white mb-5">
                Contact Us
              </h3>
            </SlideInFromLeft>
            <div>
              <div className="flex flex-col md:flex-row gap-8 justify-evenly items-center">
                <SlideInFromLeft>
                  <div className="flex flex-col justify-center items-center">
                    <Lottie
                      animationData={comuncation}
                      loop={true}
                      className="max-w-[80px] mb-2"
                    />
                    <div className="text-gray-600 dark:text-white font-medium text-center">
                      <p>What's App: +88 01711-22334455 </p>
                      <p>Hot Line: +88 09811-222333 </p>
                      <p>Email: madridistasports@inqury.com </p>
                    </div>
                  </div>
                </SlideInFromLeft>
                <SlideInFromRight>
                  <div className="flex flex-col justify-center items-center">
                    <Lottie
                      animationData={pin}
                      loop={true}
                      className="max-w-[80px] mb-2"
                    />
                    <div className="text-gray-600 dark:text-white font-medium text-center">
                      <p>
                        Road# 18, Block# D,
                        <br /> House# 01, Ka-244,Progoti sarani,
                        <br /> Baridhara, Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>
                </SlideInFromRight>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
