import errorani from '@/assets/data/error.json'; 
import Lottie from 'lottie-react';

const NoData = () => {
    return (
      <div className='flex flex-col gap-5 justify-center items-center p-10'>
        <Lottie
          animationData={errorani}
          loop={true}
          className="max-w-[80px] mb-2"
        />
        <p className='sm:text-2xl md:text-3xl text-gray-400 dark:text-white'>No Data Found</p>
      </div>
    );
};

export default NoData;