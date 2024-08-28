/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfie: builder.query({
      query: (token) => ({
        method: "GET",
        url: `/user/me`,
        headers: {
          Authorization: `${token}`,
        },
      }),
      providesTags: ["user"],
    }),
    updateUserProfile: builder.mutation({
      query: ({ data, token }) => ({
        method: "PUT",
        url: `/user/me`,
        headers: {
          Authorization: `${token}`,
        },
        body: { user: data },
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useGetUserProfieQuery, useUpdateUserProfileMutation } = userApi;
