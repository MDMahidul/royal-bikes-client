import bannerImage from "@/assets/banner2.jpg";
import SlideInFromLeft from "../Animation/SlideFromLeft";

type TParallaxHeader = { heading: string };

const ParallaxHeader = ({ heading }: TParallaxHeader) => {
  return (
    <div
      className="relative mx-auto h-52 md:h-80 bg-cover bg-fixed bg-center bg-no-repeat flex justify-center items-center"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Text Content */}
      <SlideInFromLeft>
        <p className="relative text-2xl sm:text-3xl md:text-4xl font-semibold text-white z-10 font-robotoSlab mt-10">
          {heading}
        </p>
      </SlideInFromLeft>
    </div>
  );
};

export default ParallaxHeader;
