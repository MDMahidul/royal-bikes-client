/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";
import { TQueryParams } from "@/types/global";

const bikesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addCoupon: builder.mutation({
      query: ({ data, token }) => ({
        url: "/coupons",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      }),
      invalidatesTags: ["coupon"],
    }),
    getAllCoupons: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: `/coupons`,
          method: "GET",
          params: params,
        };
      },
      providesTags: ["coupon"],
    }),
    getActiveCoupon: builder.query({
      query: () => {
        return {
          url: `/coupons/active-coupon`,
          method: "GET",
        };
      },
      providesTags: ["coupon"],
    }),
    updateCoupon: builder.mutation({
      query: ({ data, id, token }) => ({
        url: `/coupons/${id}`,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      }),
      invalidatesTags: ["coupon"],
    }),
    deleteCoupon: builder.mutation({
      query: ({ id, token }) => ({
        url: `/coupons/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["coupon"],
    }),
  }),
});

export const { useAddCouponMutation, useGetAllCouponsQuery,useUpdateCouponMutation,useDeleteCouponMutation,useGetActiveCouponQuery } = bikesApi;
