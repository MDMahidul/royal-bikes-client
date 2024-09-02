import Container from "@/components/Container/Container";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { Carousel } from "flowbite-react";
import reviews from '@/assets/data/reviews.json';
import FadeInUpAnimation from "@/components/Animation/FadeInUpAnimtaion";

const Testimonial = () => {
  return (
    <div>
      <Container>
        <SectionHeader heading="Our Customers Say" position="left" />
        <FadeInUpAnimation>
          <div className="h-[265px] sm:h-64 xl:h-80 2xl:h-96">
            <Carousel slideInterval={4000}>
              {reviews.map((review) => (
                <section className="bg-white dark:bg-gray-900" key={review.id}>
                  <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                    <figure className="max-w-screen-md mx-auto">
                      <svg
                        className="h-8 md:h-12 mx-auto mb-1 md:mb-3 text-gray-400 dark:text-gray-600"
                        viewBox="0 0 24 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                          fill="currentColor"
                        />
                      </svg>
                      <blockquote>
                        <p className="sm:text-lg md:text-2xl sm:font-medium text-gray-900 dark:text-white">
                          {review.review}
                        </p>
                      </blockquote>
                      <figcaption className="flex items-center justify-center mt-6 space-x-3">
                        <img
                          className="w-6 h-6 rounded-full"
                          src={review.avatar}
                          alt="profile picture"
                        />
                        <div className="flex items-center ">
                          <div className="pr-3 font-medium text-gray-900 dark:text-white">
                            {review.name}
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </section>
              ))}
            </Carousel>
          </div>
        </FadeInUpAnimation>
      </Container>
    </div>
  );
};

export default Testimonial;
