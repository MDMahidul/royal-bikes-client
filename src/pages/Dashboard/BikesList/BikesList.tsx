import FadeInUpAnimation from "@/components/Animation/FadeInUpAnimtaion";
import SlideInFromRight from "@/components/Animation/SlideFromRight";
import BikeCard from "@/components/Cards/BikeCard";
import Container from "@/components/Container/Container";
import DashboardHeader from "@/components/SectionHeader/DashboardHeader";
import { useGetAvailableBikesQuery } from "@/redux/api/bikes/bikes.api";
import { TQueryParams } from "@/types/global";
import { TBike } from "@/types/types";
import { ChangeEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FiLoader } from "react-icons/fi";
import { toast } from "sonner";

const BikesList = () => {
    const [params, setParams] = useState<TQueryParams[]>([]);
    const [searchType, setSearchType] = useState<string>("searchTerm");
    /* control the api calling */
    //const [shouldFetch, setShouldFetch] = useState<boolean>(false);

    const { register, handleSubmit, reset } = useForm();

    const {
      data: bikesData,
      isLoading,
      isError,
    } = useGetAvailableBikesQuery([...params]);

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

    const handleSearchByName = (data: FieldValues) => {
      /* for some reason querybuilder not working for handling case sensetiveity so capitalize the  */
      const capitalizedTerm = data[searchType].toLowerCase();

      const updatedParams = [{ name: searchType, value: capitalizedTerm }];

      setParams(updatedParams.filter((param) => param.value));
      /* setShouldFetch(true); */
      reset();
    };
    return (
      <div className="my-5 mb-20 sm:mb-40 ">
        <Container>
          <DashboardHeader title="Bikes List" />
          <SlideInFromRight>
            <form onSubmit={handleSubmit(handleSearchByName)} className="flex">
              <select
                className="banner-select-field"
                onChange={handleSearchTypeChange}
              >
                <option value="searchTerm"> Search By </option>
                <option value="searchTerm"> Name </option>
                <option value="model"> Model </option>
                <option value="brand"> Brand </option>
                <option value="year"> Year </option>
              </select>
              <div className="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  className="banner-input-field"
                  placeholder="Search Your Bike"
                  {...register(searchType, { required: true })}
                />
                <button className="banner-btn">
                  <FaMagnifyingGlass className="w-4 h-4" />
                </button>
              </div>
            </form>
          </SlideInFromRight>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-5 md:gap-y-10 mx-auto place-content-center">
            {bikesData?.data.map((bike: TBike, index: number) => (
              <FadeInUpAnimation custom={index} key={bike._id}>
                <BikeCard bike={bike} />
              </FadeInUpAnimation>
            ))}
          </div>
        </Container>
      </div>
    );
};

export default BikesList;