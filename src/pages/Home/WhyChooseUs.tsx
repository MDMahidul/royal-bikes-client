import Container from "@/components/Container/Container";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import imageChoose from "@/assets/bikes/chooseBike.png";
import choosingData from "@/assets/data/choosing.json";
import SlideInFromRight from "@/components/Animation/SlideFromRight";
import SlideInFromLeft from "@/components/Animation/SlideFromLeft";

const WhyChooseUs = () => {
  return (
    <div>
      <Container>
        <SectionHeader heading="Why Choose Us" position="left" />
        <div className="flex justify-around items-start gap-x-10 md:mb-5">
          <div className="sticky top-28 hidden md:block">
            <SlideInFromLeft>
              <img className="max-w-sm " src={imageChoose} alt="" />
            </SlideInFromLeft>
          </div>
          <div className="md:w-[55%]">
            {choosingData.choosingData.map((item) => (
              <SlideInFromRight>
                <div key={item.id} className="mb-5">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary dark:text-white">
                    {item.title}
                  </h3>
                  <p className="ms-8 my-2 text-gray-700 dark:text-white sm:font-medium">
                    {item.description}
                  </p>
                </div>
              </SlideInFromRight>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
