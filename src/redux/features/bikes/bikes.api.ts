/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";

const bikesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBikes: builder.query({
      query: () => ({
        method: "GET",
        url: '/bikes',
      }),
      providesTags: ["bikes"],
    }),
  }),
});

export const { useGetAllBikesQuery} = bikesApi;
