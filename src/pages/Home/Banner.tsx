import bannerImage from "@/assets/banner3.jpg";
import { FaMagnifyingGlass } from "react-icons/fa6";
import bike from "@/assets/bikes/bike1.webp";
import bike2 from "@/assets/bikes/bike2.webp";
import bike3 from "@/assets/bikes/bike3.webp";
import SlideInFromLeft from "@/components/Animation/SlideFromLeft";
import Container from "@/components/Container/Container";
import SlideInFromRight from "@/components/Animation/SlideFromRight";
import ZoomInEffect from "@/components/Animation/ZoomInEffect";
import SearchResultModal from "@/components/Modal/SearchResultModal";
import { TQueryParams } from "@/types/global";
import { ChangeEvent, useState } from "react";
import { useGetAvailableBikesQuery } from "@/redux/api/bikes/bikes.api";
import { FiLoader } from "react-icons/fi";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import SearchBar from "@/components/SearchBar/SearchBar";

const Banner = () => {
  const [params, setParams] = useState<TQueryParams[]>([]);
  const [searchType, setSearchType] = useState<string>("name");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);

  const { register, handleSubmit, reset } = useForm();

  const {
    data: bikesData,
    isLoading,
    isError,
  } = useGetAvailableBikesQuery([...params], { skip: !shouldFetch });
  if (isLoading) {
    toast(
      <p className="flex items-center gap-3 font-semibold">
        <span className="animate-spin">
          <FiLoader />
        </span>
        Searching...
      </p>,
      { duration: 1000 }
    );
  }
  if (isError) {
    toast.error("Something went wrong!", { duration: 2000 });
  }

  const handleSearchTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSearchType(e.target.value);
  };

  const handleSearch = (data: FieldValues) => {
    const searchTerm = data[searchType];
    const updatedParams = [{ name: searchType, value: searchTerm }];

    setParams(updatedParams.filter((param) => param.value));
    setShouldFetch(true);
    setIsModalOpen(true);
    reset();
  };

  return (
    <div
      className="relative lg:min-h-screen 2xl:min-h-[730px] bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-gray-700 to-black opacity-60"></div>
      <div className="relative hero-content flex justify-center items-center flex-col min-h-[730px] md:h-screen  gap-10">
        <SlideInFromLeft>
          <h1 className="text-2xl font-bold capitalize sm:text-6xl leading-r text-white my-5 md:pt-28">
            Your Adventure Starts Here
          </h1>
        </SlideInFromLeft>
        <div className="sm:w-full max-w-xl mx-auto ">
          <SearchBar />
        </div>
        <Container>
          <div className="text-center space-y-5 mt-5">
            <SlideInFromRight>
              <p className="text-xl sm:text-3xl font-medium text-white">
                Ride With Royal Bikes, BD’s most trusted motorcycle rental
                marketplace.
              </p>
            </SlideInFromRight>
            <div className="flex justify-center items-center gap-5">
              <ZoomInEffect>
                <img className="w-40" src={bike} alt="" />
              </ZoomInEffect>
              <ZoomInEffect>
                <img className="w-40" src={bike2} alt="" />
              </ZoomInEffect>

              <ZoomInEffect>
                <img className="w-40" src={bike3} alt="" />
              </ZoomInEffect>
            </div>
            <ZoomInEffect>
              <button className="primary-button">Book Now</button>
            </ZoomInEffect>
          </div>
        </Container>
        {/*  {bikesData && (
          <SearchResultModal
            bikes={bikesData}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )} */}
      </div>
    </div>
  );
};

export default Banner;
