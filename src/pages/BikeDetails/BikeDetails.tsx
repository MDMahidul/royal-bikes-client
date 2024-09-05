import SlideInFromLeft from "@/components/Animation/SlideFromLeft";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import Container from "@/components/Container/Container";
import LoadingError from "@/components/Error/LoadingError";
import Loader from "@/components/Loader/Loader";
import { useGetSingleBikeQuery } from "@/redux/api/bikes/bikes.api";
import { useParams } from "react-router-dom";
import { Calendar } from "lucide-react";
import { FaMotorcycle } from "react-icons/fa";
import { RxGear } from "react-icons/rx";
import { IoSpeedometerOutline, IoLockClosedSharp } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { GiFullMotorcycleHelmet, GiGps } from "react-icons/gi";
import { FaBottleWater } from "react-icons/fa6";
import ConfirmationModal from "@/components/Modal/ConfirmationModal";
import FadeInUpAnimation from "@/components/Animation/FadeInUpAnimtaion";

const BikeDetails = () => {
  const { bikeId } = useParams();
  const { data: bikeData, isError, isLoading } = useGetSingleBikeQuery(bikeId);
 

  if (isLoading) {
    return <Loader height="h-[80vh]" />;
  }
  if (isError || !bikeData) {
    <LoadingError />;
  }

  const breadCrumbItems = [
    { label: "Home", href: "/" },
    { label: "Bikes", href: "/bikes" },
    {
      label: `${bikeData.data.brand}`,
      href: `/bikes?brand=${bikeData.data.brand}`,
    },
    {
      label: `${bikeData.data.name}`,
      isCurrentPage: true,
    },
  ];
  const {_id,
    name,
    brand,
    model,
    cc,
    year,
    pricePerHour,
    isAvailable,
    mileage,
    description,
  } = bikeData.data;

 
  return (
    <div className="pt-28 md:pt-28">
      <Container>
        <SlideInFromLeft>
          <BreadCrumb items={breadCrumbItems} />
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="">
              <img
                src="https://d56b293rhv8dp.cloudfront.net/vehicle_photos/12136/attachments/size550/IMG_0173_%281%29.jpg?1696374924"
                alt="BMW R 1250 GS"
                className="xl:max-w-xl rounded-md object-cover mx-auto shadow-lg p-4"
              />
            </div>

            <div className="">
              <div>
                <span className="capitalize fonr-sm text-secondary font-semibold">
                  {brand}
                </span>
                <p className="capitalize text-2xl md:text-3xl text-primary dark:text-white font-bold -mt-1">
                  {name}
                </p>
                <p className="text-sm mt-1">
                  <span className="font-semibold">Description: </span>
                  {description}
                </p>
              </div>
              <div className="md:w-[400px] text-sm  rtl:text-right text-gray-500 dark:text-gray-400 text-center my-4 font-bold">
                <div className="">
                  <div className="grid grid-cols-2">
                    <div>
                      <div className="px-6 py-1 flex justify-center items-center gap-x-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-e">
                        <FaMotorcycle className="w-5 h-5" />
                        Model
                      </div>
                      <p className="px-6 py-1 dark:bg-gray-800">{model}</p>
                    </div>
                    <div>
                      <div className="px-6 py-1 flex justify-center items-center gap-x-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <Calendar className="w-4 h-5" />
                        Eidition
                      </div>
                      <p className="px-6 py-1 dark:bg-gray-800">{year}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 border-b border-gray-100 dark:border-gray-600">
                    <div>
                      <div className="px-6 py-1 flex justify-center items-center gap-x-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-e">
                        <RxGear className="w-[18px] h-5" />
                        Engine
                      </div>
                      <p className="px-6 py-1 dark:bg-gray-800">{cc} cc</p>
                    </div>
                    <div>
                      <div className="px-6 py-1 flex justify-center items-center gap-x-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <IoSpeedometerOutline className="w-4 h-5" />
                        Mileage
                      </div>
                      <p className="px-6 py-1 dark:bg-gray-800">
                        {mileage} kmpl
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" text-secondary mb-4 py-2 ms-1">
                <span className="text-5xl  font-bold ">৳{pricePerHour}</span>
                <span className="text-base font-medium ">/hour</span>
              </div>
              <table className="w-full xl:w-2/3 text-center">
                <thead>
                  <th className="text-primary dark:text-white  font-bold text-sm">
                    Status :
                  </th>
                  <th className="text-primary dark:text-white font-bold text-sm">
                    Pick-up/ Dropoff :
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <td
                      className={`text-${
                        isAvailable ? "green" : "red"
                      }-500 font-semibold`}
                    >
                      {isAvailable ? "Available" : "No Available"}
                    </td>
                    <td className="flex items-center justify-center font-semibold gap-1 text-gray-600 dark:text-gray-300">
                      <MdLocationPin className="text-secondary" />
                      Marine Drive, Cox's Bazar
                    </td>
                  </tr>
                </tbody>
              </table>
              <ConfirmationModal bikeId={_id}/>
            </div>
          </div>
          <div className="my-10">
            <SlideInFromLeft>
              <p className="font-semibold text-primary dark:text-white text-lg">
                Included with every bike rental:
              </p>
            </SlideInFromLeft>
            <FadeInUpAnimation>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-5 md:gap-8 my-4 ">
                <div className="flex flex-col justify-center items-center gap-3 shadow p-4">
                  <GiFullMotorcycleHelmet
                    className="text-primary dark:text-white"
                    size={60}
                  />
                  <p className="font-semibold text-secondary">Safest Helmet</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-3 shadow p-4">
                  <IoLockClosedSharp
                    className="text-primary dark:text-white"
                    size={60}
                  />
                  <p className="font-semibold text-secondary">Bike lock</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-3 shadow p-4">
                  <GiGps className="text-primary dark:text-white" size={60} />
                  <p className="font-semibold text-secondary text-center">
                    GPS-Guided audio tour
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-3 shadow p-4">
                  <FaBottleWater
                    className="text-primary dark:text-white"
                    size={60}
                  />
                  <p className="font-semibold text-secondary">Safest Helmet</p>
                </div>
              </div>
            </FadeInUpAnimation>
          </div>
        </SlideInFromLeft>
      </Container>
    </div>
  );
};

export default BikeDetails;
