import FadeInUpAnimation from "@/components/Animation/FadeInUpAnimtaion";
import SlideInFromRight from "@/components/Animation/SlideFromRight";
import BikeCard from "@/components/Cards/BikeCard";
import Container from "@/components/Container/Container";
import LoadingError from "@/components/Error/LoadingError";
import NoData from "@/components/Error/NoData";
import DashboardHeader from "@/components/SectionHeader/DashboardHeader";
import { useGetAvailableBikesQuery } from "@/redux/api/bikes/bikes.api";
import { TQueryParams } from "@/types/global";
import { TBike } from "@/types/types";
import { ChangeEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { FaMagnifyingGlass } from "react-icons/fa6";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Loader from "@/components/Loader/Loader";

const BikesList = () => {
  const [params, setParams] = useState<TQueryParams[]>([]);
  const [searchType, setSearchType] = useState<string>("searchTerm");
  const [page, setPage] = useState(1);

  const { register, handleSubmit } = useForm();

  const {
    data: bikesData,
    isLoading,
    isError,
  } = useGetAvailableBikesQuery([...params]);

  if (isLoading) {
    return <Loader height="h-[80vh]" />;
  }
  if (isError || !bikesData) {
    return <LoadingError />;
  }

  const handleSearchTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSearchType(e.target.value);
  };

  /* handle pagination */
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleSearch = (data: FieldValues) => {
    /* for some reason querybuilder not working for handling case sensetiveity so capitalize the  */
    const capitalizedTerm = data[searchType].toLowerCase();

    const updatedParams = [{ name: searchType, value: capitalizedTerm }];

    setParams(updatedParams.filter((param) => param.value));
    setPage(1);
    /* reset(); */
  };

  return (
    <div className="md:my-5 mb-20 sm:mb-40 ">
      <Container>
        <DashboardHeader title="Bikes List" />
        <div className="my-7 max-w-md mx-auto">
          <SlideInFromRight>
            <form onSubmit={handleSubmit(handleSearch)} className="flex">
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
        </div>

        {bikesData?.data.length === 0 ? (
          <div className="flex justify-center items-center">
            <NoData />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-y-10 mx-auto place-content-center">
            {bikesData?.data.map((bike: TBike, index: number) => (
              <FadeInUpAnimation custom={index} key={bike._id}>
                <BikeCard bike={bike} />
              </FadeInUpAnimation>
            ))}
          </div>
        )}
        <FadeInUpAnimation>
          <div className="mt-10">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={() => handlePageChange(page - 1)}
                    className={
                      page === 1 ? "pointer-events-none opacity-50" : ""
                    }
                  />
                </PaginationItem>
                {Array.from(
                  { length: bikesData.meta.totalPage },
                  (_, index) => (
                    <PaginationItem key={index}>
                      <PaginationLink
                        href="#"
                        onClick={() => handlePageChange(index + 1)}
                        isActive={page === index + 1}
                      >
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  )
                )}
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={() => handlePageChange(page + 1)}
                    className={
                      page === bikesData.meta.totalPage
                        ? "pointer-events-none opacity-50"
                        : ""
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </FadeInUpAnimation>
      </Container>
    </div>
  );
};

export default BikesList;
