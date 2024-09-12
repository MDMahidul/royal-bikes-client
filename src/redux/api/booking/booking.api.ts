/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";
import { TQueryParams } from "@/types/global";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBooking: builder.mutation({
      query: ({ bookingData, token }) => ({
        method: "POST",
        url: "/rentals",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: bookingData,
      }),
      invalidatesTags: ["bookings"],
    }),
    getAllBookings: builder.query({
      query: ({ args, token }) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: `/rentals/all-rentals`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: params,
        };
      },
      providesTags: ["bookings"],
    }),
    getMyBookings: builder.query({
      query: ({ args, token }) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: `/rentals`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: params,
        };
      },
      providesTags: ["bookings"],
    }),
    getSingleBookings: builder.query({
      query: ({ id, token }) => {
        return {
          url: `/rentals/${id}`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      providesTags: ["bookings"],
    }),
    applyCoupon: builder.mutation({
      query: ({ bookingInfo, token }) => ({
        method: "PUT",
        url: `/rentals/apply-coupon`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: bookingInfo,
      }),
      invalidatesTags: ["bookings"],
    }),
    makePayment: builder.mutation({
      query: ({ id, token }) => ({
        method: "PUT",
        url: `/rentals/make-payment`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: {id},
      }),
      invalidatesTags: ["bookings"],
    }),
    returnBike: builder.mutation({
      query: ({ id, token }) => ({
        method: "PUT",
        url: `/rentals/${id}/return`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["bookings"],
    }),
  }),
});

export const {
  useAddBookingMutation,
  useGetMyBookingsQuery,
  useGetAllBookingsQuery,
  useReturnBikeMutation,
  useGetSingleBookingsQuery,
  useApplyCouponMutation,
  useMakePaymentMutation,
} = bookingApi;
