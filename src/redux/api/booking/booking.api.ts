/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBooking: builder.mutation({
      query: ({ bookingData, token }) => ({
        method: "POST",
        url: "/rentals",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: bookingData ,
      }),
    }),
  }),
});

export const {useAddBookingMutation} = bookingApi;