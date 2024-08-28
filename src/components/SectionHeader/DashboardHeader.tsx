type TDashboardProp = {
  title: string;
};
const DashboardHeader = ({ title }: TDashboardProp) => {
  return (
    <div>
      <h3 className="text-lg md:text-2xl font-medium text-primary dark:text-white border-b-2 pb-2">
        {title}
      </h3>
    </div>
  );
};

export default DashboardHeader;
