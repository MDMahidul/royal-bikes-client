import Container from "@/components/Container/Container";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import couple from "@/assets/bikes/couple.webp";
import howtorent from "@/assets/data/howtorent.json";
import SlideInFromLeft from "@/components/Animation/SlideFromLeft";

const HowToRent = () => {
  return (
    <Container>
      <SectionHeader heading="How to rent a bike?" position="left" />
      <div className="flex justify-around items-start gap-x-10 md:mb-5">
        <div className="md:w-[55%]">
          <ol className="relative border-s ms-5 ps-5 border-gray-200 dark:border-gray-700">
            {howtorent.howToRentABike.map((item) => (
              <SlideInFromLeft key={item.step}>
                <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-12 h-12 bg-white rounded -start-6 ring-8 ring-white dark:ring-gray-900 dark:bg-gray-900 border-[3px] border-secondary text-2xl font-semibold">
                    {item.step}
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-300">
                    {item.description}
                  </p>
                </li>
              </SlideInFromLeft>
            ))}
          </ol>
        </div>
        <div className="sticky top-28 hidden md:block ">
          <SlideInFromLeft>
            <img className="max-w-lg h-[75vh] rounded-md" src={couple} alt="" />
          </SlideInFromLeft>
        </div>
      </div>
    </Container>
  );
};

export default HowToRent;
