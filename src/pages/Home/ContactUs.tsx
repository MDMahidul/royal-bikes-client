import Container from "@/components/Container/Container";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { IoIosSend } from "react-icons/io";
import { FiPhoneCall, FiMapPin } from "react-icons/fi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FaFax } from "react-icons/fa";
import SlideInFromRight from "@/components/Animation/SlideFromRight";
import SlideInFromLeft from "@/components/Animation/SlideFromLeft";

const ContactUs = () => {
  return (
    <div className="mb-6 md:mb-10">
      <Container>
        <SectionHeader heading="Contact Us" position="left" />
        <div className="font-[sans-serif] max-w-6xl mx-auto relative bg-white dark:bg-gray-900 rounded-lg py-6">
          <div className="grid lg:grid-cols-3 items-center">
            <SlideInFromLeft>
              <div className="grid sm:grid-cols-2 gap-4 z-10 relative lg:left-16 max-lg:px-4">
                <div className="contact-card">
                  <FiMapPin className="w-7 h-7 text-secondary dark:text-white" />
                  <h4 className="text-primary dark:text-white text-base font-bold mt-4">
                    Visit office
                  </h4>
                  <p className="text-sm text-gray-600 mt-2 dark:text-white">
                    Cox's Bazar, Chittagong, Bangladesh
                  </p>
                </div>
                <div className="contact-card">
                  <FiPhoneCall className="w-7 h-7 text-secondary dark:text-white" />
                  <h4 className="text-primary dark:text-white text-base font-bold mt-4">
                    Call us
                  </h4>
                  <p className="text-sm text-gray-600 mt-2 dark:text-white">
                    +158 996 888
                  </p>
                  <p className="text-sm text-gray-600  dark:text-white">
                    +180-548-2588
                  </p>
                </div>
                <div className="contact-card">
                  <IoChatboxEllipsesOutline className="w-7 h-7 text-secondary dark:text-white" />
                  <h4 className="text-primary dark:text-white text-base font-bold mt-4">
                    Chat to us
                  </h4>
                  <p className="text-sm text-gray-600 mt-2 dark:text-white">
                    royalbikes@info.com
                  </p>
                </div>
                <div className="contact-card">
                  <FaFax className="w-6 h-6 text-secondary dark:text-white" />
                  <h4 className="text-primary dark:text-white text-base font-bold mt-4">
                    Fax
                  </h4>
                  <p className="text-sm text-gray-600 mt-2 dark:text-white">
                    +1-548-2588
                  </p>
                </div>
              </div>
            </SlideInFromLeft>
            <div className="lg:col-span-2 bg-secondary dark:bg-gray-700 rounded-lg sm:p-10 p-4  max-lg:-order-1 max-lg:mb-8">
              <SlideInFromRight>
                <h2 className="text-3xl text-white text-center font-bold mb-6">
                  Contact us
                </h2>
                <form>
                  <div className="max-w-md mx-auto space-y-3">
                    <input
                      type="text"
                      placeholder="Name"
                      className="add-input-field"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="add-input-field"
                    />
                    <input
                      type="email"
                      placeholder="Phone No."
                      className="add-input-field"
                    />
                    <textarea
                      placeholder="Message"
                      rows={6}
                      className="add-input-field"
                      defaultValue={""}
                    />
                    <button
                      type="button"
                      className="primary-button-white w-full flex justify-center items-center gap-2 !mt-6"
                    >
                      <IoIosSend size={24} />
                      Send Message
                    </button>
                  </div>
                </form>
              </SlideInFromRight>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
