import SlideInFromLeft from "../Animation/SlideFromLeft";

type TDashboardProp = {
  title: string;
};
const DashboardHeader = ({ title }: TDashboardProp) => {
  return (
    <div>
      <SlideInFromLeft>
        <h3 className="text-lg md:text-xl font-semibold text-primary dark:text-white border-b-2 border-secondary dark:border-white pb-2">
          {title}
        </h3>
      </SlideInFromLeft>
    </div>
  );
};

export default DashboardHeader;
