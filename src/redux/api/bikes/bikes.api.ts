/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";
import { TQueryParams } from "@/types/global";

const bikesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBike: builder.mutation({
      query: ({ bikeData, token }) => ({
        url: "/bikes",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: bikeData,
      }),
      invalidatesTags: ["bikes"],
    }),
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
      providesTags: ["bikes"],
    }),
    updateBike: builder.mutation({
      query: ({ id, updateInfo, token }) => ({
        url: `/bikes/${id}`,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: updateInfo,
      }),
      invalidatesTags: ["bikes"],
    }),
    deleteBike: builder.mutation({
      query: ({ id, token }) => ({
        url: `/bikes/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["bikes"],
    }),
  }),
});

export const {
  useAddBikeMutation,
  useGetAllBikesQuery,
  useGetAvailableBikesQuery,
  useGetSingleBikeQuery,useUpdateBikeMutation,
  useDeleteBikeMutation,
} = bikesApi;
