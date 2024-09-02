import SlideInFromLeft from "../Animation/SlideFromLeft";

type TSectionHeader = {
  heading: string;
  position?: "left" | "center" | "right";
};

const SectionHeader = ({ heading, position = "center" }: TSectionHeader) => {
  const alignmentClass = {
    left: "text-left",
    right: "text-right",
    center: "text-center",
  }[position];

  return (
    <SlideInFromLeft custom={1}>
      <div className={`${alignmentClass} mx-auto pt-7 pb-3 md:py-10 `}>
        <h3 className="text-2xl sm:text-3xl md:text-4xl  text-primary dark:text-white py-4 font-semibold md:font-bold capitalize font-robotoSlab">
          {heading}
        </h3>
      </div>
    </SlideInFromLeft>
  );
};

export default SectionHeader;
