import Container from '@/components/Container/Container';
import LoadingError from '@/components/Error/LoadingError';
import Loader from '@/components/Loader/Loader';
import { useGetActiveCouponQuery } from '@/redux/api/coupon/coupon.api';
import { formatDateTime } from '@/utils/formatDateTime';

const Coupon = () => {
    const {data:couponData,isError,isLoading}=useGetActiveCouponQuery(undefined);
    if (isLoading) {
      return <Loader height="h-[80vh]" />;
    }
    if (isError || !couponData) {
      <LoadingError />;
    }
    
const { code, discountValue ,endDate} = couponData.data[0];
    return (
      <div>
        <Container>
          <div className="bg-gray-200 dark:bg-gray-600 font-noNotoSerif relative mx-auto rounded overflow-hidden mt-20 md:mt-24 mb-5">
            <div className="grid sm:grid-cols-2 gap-6 max-sm:gap-12 py-12 px-6 items-center justify-center">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 px-4 py-8 text-center rounded-[30px] w-full sm:max-w-[250px] md:max-w-[300px] h-max skew-x-[10deg] mx-auto shadow-lg shadow-purple-400 ">
                <h6 className="text-gray-300 md:text-xl">Promo Code:</h6>
                <h2 className="text-white text-2xl md:text-4xl font-bold my-2">{code}</h2>
                <p className="text-gray-300 md:text-xl">For sacpial offer</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-3xl md:text-4xl text-primary dark:text-white">
                  Special Offer
                </h3>
                <h6 className="text-xl md:text-2xl text-secondary mt-0.5">
                  Limited Time Deal
                </h6>
                <p className="text-primary dark:text-white text-sm md:text-base mt-4">
                  Use this coupn and get <span className='bg-secondary text-white px-2 rounded text-lg mx-1'>{discountValue}tk</span> discount
                  on each ride. Enojoy this offer until{" "}
                  {formatDateTime(endDate).slice(0, 19)}
                </p>
                <button type="button" className="primary-button mt-5">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
};

export default Coupon;