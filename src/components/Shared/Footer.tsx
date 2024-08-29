import { FaEnvelope, FaPhone } from "react-icons/fa";
import Facebook from "@/assets/social/facebook.png";
import Youtube from "@/assets/social/youtube.png";
import Instagram from "@/assets/social/instagram.png";
import Twitter from "@/assets/social/twitter.png";
import logo from "@/assets/logo/ffflogo.png";
import { Link } from "react-router-dom";
import bikes from '@/assets/bikes/bike1.webp';
import SlideInFromRight from "../Animation/SlideFromRight";
import SlideInFromLeft from "../Animation/SlideFromLeft";

const Footer = () => {
  return (
    <div className="pt-5">
      <footer className="bg-gradient-to-r from-[#00293b] via-[#00296b] to-[#00293b] font-sans tracking-wide py-12 px-4 sm:px-16 ">
        <div className="grid max-md-grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <div className="flex justify-center sm:justify-start items-center gap-x-4">
              <img className="w-20 sm:w-28" src={logo} alt="" />
              <p className="text-white font-robotoSlab text-xl sm:text-2xl md:text-4xl font-bold capitalize">
                royal bikes
              </p>
            </div>
            <p className="text-sm mt-6 text-gray-300 text-center sm:text-start">
              Royal Bikes is your premier destination for motorbike rentals.
              Whether you're a thrill-seeker or a casual rider, we offer a wide
              range of bikes to suit your needs. Our mission is to provide
              affordable, reliable, and exciting riding experiences to everyone.
            </p>
            <ul className="grid sm:grid-cols-2 mt-12 gap-2">
              <li className="flex items-center max-sm:mb-4">
                <div className="bg-white h-8 w-8 rounded-full flex items-center justify-center shrink-0">
                  <FaPhone className="text-secondary h-[18px] w-[18px]" />
                </div>
                <a href="#" className="text-gray-100 text-sm ml-4">
                  <small className="block">Tel</small>
                  <strong>180-548-2588</strong>
                </a>
              </li>
              <li className="flex items-center max-sm:mb-4">
                <div className="bg-white h-8 w-8 rounded-full flex items-center justify-center shrink-0">
                  <FaEnvelope className="text-secondary h-[18px] w-[18px]" />
                </div>
                <a href="#" className="text-gray-100 text-sm ml-4">
                  <small className="block">Mail</small>
                  <strong>royalbikes@info.com</strong>
                </a>
              </li>
              <li className="flex items-center sm:mt-4">
                <div className="bg-white h-8 w-8 rounded-full flex items-center justify-center shrink-0">
                  <FaEnvelope className="text-secondary h-[18px] w-[18px]" />
                </div>
                <a href="#" className="text-gray-100 text-sm ml-4">
                  <small className="block">Address</small>
                  <strong>Khilkhet, Dhaka, Bangladesh</strong>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-100 font-bold text-lg">Newsletter</h4>
            <p className="text-sm mt-6 text-gray-300">
              Subscribe to our newsletter and stay up to date with the latest
              news, updates, and exclusive offers. Get valuable insights. Join
              our community today!
            </p>
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-[#fff] flex p-1 rounded-full text-left mt-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full outline-none border-none focus:border-0 focus:ring-0 text-sm pl-4 rounded-full"
                />
                <button
                  type="button"
                  className="bg-secondary text-white text-sm rounded-full px-4 py-2.5 tracking-wide"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <ul className="flex items-center justify-end mt-8 space-x-4">
              <li className="flex items-center justify-center shrink-0">
                <Link to="#">
                  <img
                    className="w-6 md:w-8 transform transition-all hover:scale-105 duration-200"
                    src={Facebook}
                    alt=""
                  />
                </Link>
              </li>
              <li className="flex items-center justify-center shrink-0">
                <Link to="#">
                  <img
                    className="w-6 md:w-8 transform transition-all hover:scale-105 duration-200"
                    src={Instagram}
                    alt=""
                  />
                </Link>
              </li>
              <li className="flex items-center justify-center shrink-0">
                <Link to="#">
                  <img
                    className="w-6 md:w-8 transform transition-all hover:scale-105 duration-200"
                    src={Youtube}
                    alt=""
                  />
                </Link>
              </li>
              <li className="flex items-center justify-center shrink-0">
                <Link to="#">
                  <img
                    className="w-6 md:w-8 transform transition-all hover:scale-105 duration-200"
                    src={Twitter}
                    alt=""
                  />
                </Link>
              </li>
            </ul>
            <div className="mt-8 justify-center md:justify-start sm:mt-5 flex gap-5 items-center">
              <SlideInFromLeft>
                <img className="w-40" src={bikes} alt="" />
              </SlideInFromLeft>
              <SlideInFromRight>
                <img
                  className="w-40 transform scale-x-[-1]"
                  src={bikes}
                  alt=""
                />
              </SlideInFromRight>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:item-center mt-12">
          <ul className="flex flex-wrap gap-4">
            <li>
              <Link
                to="/"
                className="text-gray-300 hover:text-gray-100 text-sm hover:border-b transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-gray-300 hover:text-gray-100 text-sm hover:border-b transition-all duration-300"
              >
                Bikes
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-gray-300 hover:text-gray-100 text-sm hover:border-b transition-all duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-gray-300 hover:text-gray-100 text-sm hover:border-b transition-all duration-300"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-gray-300 hover:text-gray-100 text-sm hover:border-b transition-all duration-300"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
          <p className="text-sm text-gray-300 lg:ml-auto max-lg:mt-6">
            © RoyalBikes. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
