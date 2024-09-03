import FadeInUpAnimation from "@/components/Animation/FadeInUpAnimtaion";
import BikeCard from "@/components/Cards/BikeCard";
import Container from "@/components/Container/Container";
import LoadingError from "@/components/Error/LoadingError";
import Loader from "@/components/Loader/Loader";
import SearchBar from "@/components/SearchBar/SearchBar";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import {  useGetAvailableBikesQuery } from "@/redux/api/bikes/bikes.api";
import { TBike } from "@/types/types";
import { Helmet } from "react-helmet-async";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";
import { TQueryParams } from "@/types/global";

const Bikes = () => {
  const [page, setPage] = useState(1);
  const [params, setParams] = useState<TQueryParams[]>([]);
  const {
    data: bikesData,
    isLoading,
    isError,
  } = useGetAvailableBikesQuery([{ name: "page", value: page }, ...params]);
  if (isLoading) {
    return <Loader height="h-[80vh]" />;
  }
  if (isError || !bikesData) {
    return <LoadingError />;
  }

  /* handle pagination */
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };
console.log(bikesData);
  return (
    <div className="py-10 md:py-16">
      <Helmet>
        <title>All Products</title>
      </Helmet>
      <SectionHeader heading={"Choose Your Bikes"} />
      <div className="sm:w-full max-w-xl mx-auto mb-10 -mt-5">
        <SearchBar />
      </div>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5 md:gap-y-10 mx-auto place-content-center">
          {bikesData.data.map((bike: TBike, index: number) => (
            <FadeInUpAnimation custom={index} key={bike._id}>
              <BikeCard bike={bike} />
            </FadeInUpAnimation>
          ))}
        </div>
         <FadeInUpAnimation>
        <div className="my-10">
 <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => handlePageChange(page - 1)}
                className={page === 1 ? "pointer-events-none opacity-50" : ""}
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

export default Bikes;
