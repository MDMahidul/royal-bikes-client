import Container from '@/components/Container/Container';
import LoadingError from '@/components/Error/LoadingError';
import Loader from '@/components/Loader/Loader';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import { useGetSingleBikeQuery } from '@/redux/api/bikes/bikes.api';
import { useParams } from 'react-router-dom';

const BookingConfirm = () => {
  const {bikeId} = useParams();
  const {data:bikeData,isError,isLoading}=useGetSingleBikeQuery(bikeId);
  if (isLoading) {
    return <Loader height="h-[80vh]" />;
  }
  if (isError || !bikeData) {
    <LoadingError />;
  }
  const {_id,name,model,brand}=bikeData.data;
    return (
      <div className="py-10 md:py-16 ">
        <SectionHeader heading="Confirm your booking" />
        <Container>
          <div>
            <div><img src={''} alt="" /></div>
          </div>
        </Container>
      </div>
    );
};

export default BookingConfirm;