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
      query: ({args,token}) => {
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
    }),
    getMyBookings: builder.query({
      query: ({args,token}) => {
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
    }),
  }),
});

export const {useAddBookingMutation,useGetMyBookingsQuery,useGetAllBookingsQuery} = bookingApi;