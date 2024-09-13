/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import SlideInFromLeft from "@/components/Animation/SlideFromLeft";
import SlideInFromRight from "@/components/Animation/SlideFromRight";
import Container from "@/components/Container/Container";
import LoadingError from "@/components/Error/LoadingError";
import Loader from "@/components/Loader/Loader";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { useGetSingleBikeQuery } from "@/redux/api/bikes/bikes.api";
import { useAddBookingMutation } from "@/redux/api/booking/booking.api";
import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { Helmet } from "react-helmet-async";
import { FieldValues, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const BookingConfirm = () => {
  const token = useAppSelector(useCurrentToken);
  const { bikeId } = useParams();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [addBooking] = useAddBookingMutation();

  const { data: bikeData, isError, isLoading } = useGetSingleBikeQuery(bikeId);
  if (isLoading) {
    return <Loader height="h-[80vh]" />;
  }
  if (isError || !bikeData) {
    <LoadingError />;
  }

  // Watch the startTime input
  const selectedTime = watch("startTime");

  // Get the current time
  const currentTime = new Date().toISOString().slice(0, 16); // format to 'yyyy-mm-ddThh:mm'

  const { _id, cc, mileage, name, model, brand, image, pricePerHour } =
    bikeData.data;

  const onSubmit = async (data: FieldValues) => {
    const bookingData = {
      bikeId: _id,
      startTime: data.startTime,
      totalCost: data.totalCost,
    };
    try {
      const res = await addBooking({ bookingData, token }).unwrap();
      console.log(res);
      if (res.success) {
        console.log(res);
        window.location.href = res.data.payment_url;
      } else {
        toast.error("Booking creation failed:", { duration: 2000 });
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.data.message);
    }
  };

  return (
    <div className="py-16 ">
      <Helmet title="Booking Confirm" />
      <SectionHeader heading="Confirm your booking" />
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
                      Mileage: {mileage} kmpl
                    </p>
                    <p className="text-sm font-semibold text-gray-500 dark:text-white flex items-center gap-2">
                      Rate: ৳ {pricePerHour}/hr
                    </p>
                  </div>
                </div>
              </div>
            </SlideInFromLeft>
          </div>
          <div className="shadow w-full md:w-1/3 p-5 dark:bg-gray-600 rounded-md">
            <SlideInFromRight>
              <p className="text-primary dark:text-white text-xl font-semibold text-center pb-4">
                Booking Data
              </p>
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <label className="add-input-label " htmlFor="startTime">
                      Start Time
                    </label>
                    <input
                      className="add-input-field"
                      type="datetime-local"
                      id="startTime"
                      {...register("startTime", {
                        required: "Start time is required",
                        validate: (value) =>
                          value > currentTime ||
                          "You cannot choose a past time *",
                      })}
                    />
                    {errors.startTime && (
                      <span className=" text-xs text-red-500">
                        {errors.startTime.message as string}
                      </span>
                    )}
                  </div>
                  <div>
                    <label htmlFor="advancedAmount" className="add-input-label">
                      Advance Payment
                    </label>
                    <input
                      type="number"
                      readOnly
                      id="advancedAmount"
                      className="add-input-field"
                      value={100}
                      {...register("totalCost", {
                        required: true,
                        valueAsNumber: true,
                      })}
                    />
                  </div>
                  <button
                    className="primary-button-white w-full my-5"
                    type="submit"
                  >
                    Make Payment
                  </button>
                </form>
              </div>
            </SlideInFromRight>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BookingConfirm;
