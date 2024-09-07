/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    getAllUsers: builder.query({
      query: (token) => ({
        method: "GET",
        url: `/user`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["user"],
    }),
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
    updateUserRole: builder.mutation({
      query: ({ id, token }) => {
        return {
          method: "PATCH",
          url: `/user/${id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ["user"],
    }),
    deleteUser: builder.mutation({
      query: ({ id, token }) => {
        return {
          method: "DELETE",
          url: `/user/${id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ["user"],
    }),
    
  }),
});

export const { useGetAllUsersQuery,useGetUserProfieQuery, useUpdateUserProfileMutation,useUpdateUserRoleMutation,useDeleteUserMutation } = userApi;
