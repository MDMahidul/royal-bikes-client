import FadeInUpAnimation from "@/components/Animation/FadeInUpAnimtaion";
import BikeCard from "@/components/Cards/BikeCard";
import Container from "@/components/Container/Container";
import LoadingError from "@/components/Error/LoadingError";
import Loader from "@/components/Loader/Loader";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { useGetAvailableBikesQuery } from "@/redux/api/bikes/bikes.api";
import { TQueryParams } from "@/types/global";
import { TBike } from "@/types/types";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const ListedBikes = () => {
    const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });
    const isMediumScreen = useMediaQuery({
      query: "(min-width: 641px) and (max-width: 1024px)",
    });
    const isLargeScreen = useMediaQuery({ query: "(min-width: 1025px)" });

    /* screen size wise set the items limit */
    let limit = 6;
    if (isSmallScreen) {
      limit = 6;
    } else if (isMediumScreen) {
      limit = 6;
    } else if (isLargeScreen) {
      limit = 8; 
    }
  const [params] = useState<TQueryParams[]>([]);
  const {
    data: bikesData,
    isLoading,
    isError,
  } = useGetAvailableBikesQuery([{ name: "limit", value: limit }, ...params]);
  if (isLoading) {
    return <Loader height="h-[80vh]" />;
  }
  if (isError || !bikesData) {
    return <LoadingError />;
  }
  return (
    <div>
      <Container>
        <SectionHeader heading="Listed Bikes" position="left" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-y-7 mx-auto justify-items-center">
          {bikesData.data.map((bike: TBike, index: number) => (
            <FadeInUpAnimation custom={index} key={bike._id}>
              <BikeCard bike={bike} />
            </FadeInUpAnimation>
          ))}
        </div>
        <div className="text-center my-5 pt-5">
          <FadeInUpAnimation>
            <Link to="/bikes" className="primary-button">
              Explore More
            </Link>
          </FadeInUpAnimation>
        </div>
      </Container>
    </div>
  );
};

export default ListedBikes;
