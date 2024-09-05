/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";
import { TQueryParams } from "@/types/global";

const bikesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBikes: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: `/bikes`,
          method: "GET",
          params: params,
        };
      },
      providesTags: ["bikes"],
    }),
    getAvailableBikes: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }
        return { url: "/bikes/available-bikes", method: "GET", params: params };
      },
      providesTags: ["bikes"],
    }),
    getSingleBike: builder.query({
      query: (bikeId) => ({
        url: `/bikes/${bikeId}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllBikesQuery, useGetAvailableBikesQuery,useGetSingleBikeQuery } = bikesApi;
