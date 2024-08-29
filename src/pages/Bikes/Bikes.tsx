import FadeInUpAnimation from "@/components/Animation/FadeInUpAnimtaion";
import BikeCard from "@/components/Cards/BikeCard";
import Container from "@/components/Container/Container";
import LoadingError from "@/components/Error/LoadingError";
import Loader from "@/components/Loader/Loader";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { useGetAllBikesQuery } from "@/redux/features/bikes/bikes.api";
import { TBike } from "@/types/types";
import { Helmet } from "react-helmet-async";

const Bikes = () => {
    const {data:bikesData,isLoading,isError}=useGetAllBikesQuery(undefined);
    if(isLoading){
       return <Loader height="h-[80vh]" />;
    }
    if(isError || !bikesData){
       return <LoadingError/>;
    }
    console.log(bikesData);
    return (
      <div className="py-10 md:py-16">
        <Helmet>
          <title>All Products</title>
        </Helmet>
        <SectionHeader heading={"Choose Your Bikes"} />
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5 md:gap-y-10 mx-auto place-content-center">
            {bikesData.data.map((bike: TBike, index: number) => (
              <FadeInUpAnimation custom={index} key={bike._id}>
                <BikeCard bike={bike} />
              </FadeInUpAnimation>
            ))}
          </div>
        </Container>
      </div>
    );
};

export default Bikes;