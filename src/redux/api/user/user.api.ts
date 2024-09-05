/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfie: builder.query({
      query: (token) => ({
        method: "GET",
        url: `/user/me`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["user"],
    }),
    updateUserProfile: builder.mutation({
      query: ({ user, token }) => {
console.log(user);
        return {
          method: "PUT",
          url: `/user/me`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: { user },
        };
      },
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useGetUserProfieQuery, useUpdateUserProfileMutation } = userApi;
