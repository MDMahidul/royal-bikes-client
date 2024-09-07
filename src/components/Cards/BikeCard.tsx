import { TBike } from "@/types/types";
import { FaMotorcycle } from "react-icons/fa";
import { RxGear } from "react-icons/rx";
import { Link } from "react-router-dom";
import { IoSpeedometerOutline } from "react-icons/io5";

type TBikeProps = {
  bike: TBike;
};
const BikeCard = ({ bike }: TBikeProps) => {
  const { _id,name, brand, pricePerHour, cc,model,mileage,image } = bike;
  console.log(bike);
  return (
    <Link to={`/bikes/${_id}`}>
      <div className="max-w-sm bg-white dark:bg-gray-500  shadow hover:shadow-lg rounded transform transition-all ease-in duration-100 hover:scale-[1.01]">
        <div>
          <img
            className="rounded-t w-full"
            src={image}
            alt="BMW R 1250 GS"
          />
        </div>
        <div className="p-4 relative">
          <div className="mb-5">
            <h5 className="capitalize text-sm font-medium text-gray-500 dark:text-white -mb-1">
              {brand}
            </h5>
            <h3 className="capitalize text-xl sm:text-lg font-bold text-gray-900">
              {name}
            </h3>
          </div>
          <div className="bg-primary text-white px-2 py-1 absolute right-0 top-[75px]">
            <span className="text-xl  font-bold ">৳{pricePerHour}</span>
            <span className="text-sm font-medium ">/hour</span>
          </div>
          <div className="flex items-center  mt-2 font-semibold">
            <FaMotorcycle className="w-5 h-5 text-gray-500 dark:text-white" />
            <span className="text-sm ml-1.5 text-gray-500 dark:text-white capitalize">
              {model}
            </span>
          </div>
          <div className="flex items-center text-gray-500 dark:text-white mt-0.5">
            <RxGear className="w-[18px] h-[18px] text-gray-600 dark:text-white" />
            <span className="text-sm ml-1.5 font-semibold">{cc} cc</span>
          </div>
          <div className="flex items-center text-gray-500 dark:text-white mt-0.5 ">
            <IoSpeedometerOutline className="w-[18px] h-[18px] text-gray-600 dark:text-white" />
            <span className="text-sm ml-1.5 mt-1 font-semibold">
              {mileage} kmpl
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BikeCard;
