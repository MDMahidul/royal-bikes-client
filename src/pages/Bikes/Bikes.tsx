import FadeInUpAnimation from "@/components/Animation/FadeInUpAnimtaion";
import BikeCard from "@/components/Cards/BikeCard";
import Container from "@/components/Container/Container";
import LoadingError from "@/components/Error/LoadingError";
import Loader from "@/components/Loader/Loader";
import SearchBar from "@/components/SearchBar/SearchBar";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { useGetAvailableBikesQuery } from "@/redux/api/bikes/bikes.api";
import { TBike } from "@/types/types";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { TQueryParams } from "@/types/global";
import { useLocation } from "react-router-dom";
import PaginationComponent from "@/components/Pagination/PaginationComponent";

const Bikes = () => {
  /* get the current url */
  const location = useLocation();
  /* extract the search params from the url */
  const searchParams = new URLSearchParams(location.search);
  /* get the brand value */
  const brand = searchParams.get("brand");
  const [page, setPage] = useState(1);
  const [params] = useState<TQueryParams[]>([]);

  /* if the brand exists in the search only then use the brand search query */
  const queryParameters: TQueryParams[] = [
    { name: "page", value: page },
    ...(brand ? [{ name: "brand", value: brand }] : []),
    ...params,
  ];

  const {
    data: bikesData,
    isLoading,
    isError,
  } = useGetAvailableBikesQuery(queryParameters, { pollingInterval: 30000 });

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
  const totalPage = bikesData.meta.totalPage;
  return (
    <div className="py-16">
      <Helmet>
        <title>All Products</title>
      </Helmet>
      <SectionHeader heading={"Choose Your Bikes"} />

      <Container>
        <div className="sm:w-full max-w-xl mx-auto mb-10 md:-mt-5">
          <SearchBar />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-5 md:gap-y-10 mx-auto place-content-center">
          {bikesData.data.map((bike: TBike, index: number) => (
            <FadeInUpAnimation custom={index} key={bike._id}>
              <BikeCard bike={bike} />
            </FadeInUpAnimation>
          ))}
        </div>
        <FadeInUpAnimation>
          <div className="mt-10"></div>
          <PaginationComponent
            page={page}
            handlePageChange={handlePageChange}
            totalPage={totalPage}
          />
        </FadeInUpAnimation>
      </Container>
    </div>
  );
};

export default Bikes;
