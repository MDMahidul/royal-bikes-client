/* eslint-disable @typescript-eslint/no-explicit-any */
import SlideInFromLeft from "@/components/Animation/SlideFromLeft";
import SlideInFromRight from "@/components/Animation/SlideFromRight";
import Container from "@/components/Container/Container";
import LoadingError from "@/components/Error/LoadingError";
import Loader from "@/components/Loader/Loader";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import {
  useApplyCouponMutation,
  useGetSingleBookingsQuery,
  useMakePaymentMutation,
} from "@/redux/api/booking/booking.api";
import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { formatDateTime } from "@/utils/formatDateTime";
import { FieldValues, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const CheckoutPage = () => {
  const { id } = useParams();
  const token = useAppSelector(useCurrentToken);
  const [applyCoupon] = useApplyCouponMutation();
  const [makePayment] = useMakePaymentMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    data: bookingData,
    isError,
    isLoading,
  } = useGetSingleBookingsQuery({ id, token });
  if (isLoading) {
    return <Loader height="h-[80vh]" />;
  }
  if (isError || !bookingData) {
    return <LoadingError />;
  }

  const { image, name, brand, model, cc, pricePerHour } =
    bookingData.data.bikeId;

  /* apply coupon */
  const onSubmit = async (data: FieldValues) => {
    try {
      const bookingInfo = {
        bookingId: bookingData.data._id,
        couponCode: data.coupon,
      };
      await applyCoupon({ bookingInfo, token }).unwrap(); // Keep unwrap
      toast.success("Coupon applied successfully!");
    } catch (error: any) {
      toast.error(error?.data?.message || "An error occurred");
    }
  };

  const handlePayment = async (id: string) => {
    try {
      const res = await makePayment({ id, token }).unwrap();
      console.log({res});
      if (res.success) {
        console.log(res);
        window.location.href = res.data.payment_url;
      } else {
        toast.error("Payment failed", { duration: 2000 });
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.data?.message || "An error occurred");
    }
  };

  return (
    <div className="py-10 md:py-16 ">
      <SectionHeader heading="Confirm Payment" />
      <Container>
        <div className="flex flex-col md:flex-row  justify-center items-start gap-5 gap-y-10">
          <div className="w-full md:w-1/2 flex gap-4 bg-white dark:bg-gray-600 px-4 py-4 rounded-md shadow">
            <SlideInFromLeft>
              <div className="flex gap-4">
                <div className="max-w-40">
                  <img
                    src={image}
                    className="w-full h-full object-contain rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="sm:text-lg font-medium sm:font-bold text-primary dark:text-white capitalize">
                      {name} , {model}
                    </h3>
                    <p className="text-sm font-semibold text-gray-500 dark:text-white flex items-center gap-2 capitalize">
                      Brand: {brand}
                    </p>
                    <p className="text-sm font-semibold text-gray-500 dark:text-white flex items-center gap-2">
                      Engine: {cc} cc
                    </p>
                    <p className="text-sm font-semibold text-gray-500 dark:text-white flex items-center gap-2">
                      Rate: ৳ {pricePerHour}/hr
                    </p>
                  </div>
                </div>
              </div>
            </SlideInFromLeft>
          </div>
          <div className=" w-full md:w-2/5 ">
            <SlideInFromRight>
              <div className="shadow p-5 dark:bg-gray-600 rounded-md">
                <p className="text-primary dark:text-white sm:text-2xl md:text-3xl font-semibold text-center pb-8 ">
                  Booking Summary
                </p>
                <div>
                  <div>
                    <table className="w-full text-gray-600 dark:text-white font-medium">
                      <tbody>
                        <tr>
                          <td className=" ">Start Time:</td>
                          <td className="text-right">
                            {formatDateTime(bookingData.data.startTime)}
                          </td>
                        </tr>
                        <tr>
                          <td className=" ">Return Time:</td>
                          <td className="text-right">
                            {formatDateTime(bookingData.data.returnTime)}
                          </td>
                        </tr>
                        <tr>
                          <td className=" ">Cost Per Hour:</td>
                          <td className="text-right">
                            {bookingData.data.bikeId.pricePerHour} TK
                          </td>
                        </tr>
                        <tr className="text-lg md:text-xl font-bold  text-secondary mt-5">
                          <td className="">Total Cost:</td>
                          <td className="text-right">
                            {bookingData.data.totalCost} TK
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="my-8">
                      <div className="flex justify-center gap-3">
                        <input
                          type="text"
                          id="coupon"
                          className="add-input-field flex-grow"
                          {...register("coupon", {
                            required: true,
                          })}
                        />

                        <button className="text-sm font-semibold bg-primary px-3 py-1 rounded text-white hover:shadow-md flex-shrink-0">
                          Apply Coupon
                        </button>
                      </div>
                      {errors.coupon && (
                        <span className="text-xs text-red-500">
                          Coupon code is required *
                        </span>
                      )}
                    </div>
                  </form>
                  <button
                    className="primary-button-white w-full my-5"
                    type="submit"
                    onClick={() => handlePayment(bookingData.data._id)}
                  >
                    Make Payment
                  </button>
                </div>
              </div>
            </SlideInFromRight>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CheckoutPage;
