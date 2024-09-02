import { TBike } from "@/types/types";
import { Calendar } from "lucide-react";
import { FaMotorcycle } from "react-icons/fa";
import { RxGear } from "react-icons/rx";

type TBikeProps = {
  bike: TBike;
};
const BikeCard = ({ bike }: TBikeProps) => {
  const { name, brand, pricePerHour, cc,year,model } = bike;
  return (
    <div className="max-w-sm bg-white dark:bg-gray-500  shadow hover:shadow-lg rounded ">
      <div>
        <img
          className="rounded-t w-full"
          src="https://d56b293rhv8dp.cloudfront.net/vehicle_photos/12136/attachments/size550/IMG_0173_%281%29.jpg?1696374924"
          alt="BMW R 1250 GS"
        />
      </div>
      <div className="p-4 relative">
        <div className="mb-5">
          <h5 className="text-sm font-medium text-gray-500 dark:text-white -mb-1">
            {brand}
          </h5>
          <h3 className="text-xl sm:text-lg md:text-xl font-bold text-gray-900">{name}</h3>
        </div>
        <div className="bg-primary text-white px-2 py-1 absolute right-0 top-14">
          <span className="text-lg font-bold ">${pricePerHour}</span>
          <span className="text-sm font-medium ">/hour</span>
        </div>
        <div className="flex items-center  mt-2 font-semibold">
          <FaMotorcycle className="w-5 h-5 text-gray-500 dark:text-white" />
          <span className="text-sm ml-1.5 text-gray-800text-gray-800">
            {model}{" "}
          </span>
        </div>
        <div className="flex items-center text-gray-500 dark:text-white mt-0.5">
          <RxGear className="w-[18px] h-[18px] text-gray-600 dark:text-white" />
          <span className="text-sm ml-1.5 font-semibold">{cc} cc</span>
        </div>
        <div className="flex items-center text-gray-500 dark:text-white mt-0.5 ">
          <Calendar className="w-[18px] h-[18px] text-gray-600 dark:text-white" />
          <span className="text-sm ml-1.5 mt-1 font-semibold">
            {year} edition
          </span>
        </div>
      </div>
    </div>
  );
};

export default BikeCard;
