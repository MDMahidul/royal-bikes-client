/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  DefinitionType,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { toast } from "sonner";
import { logOut, setUser } from "../features/auth/authSlice";
import { TResponse } from "@/types/global";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://bike-rental-service-server-puce.vercel.app/api",
  /* to set cookies data */
  credentials: "include",
  /* send token through header to server */
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

/* create custom baseQuery */
const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = (await baseQuery(args, api, extraOptions)) as TResponse<any>;

  if (result?.error?.status === 404) {
    toast.error(result?.error?.data.message, {
      duration: 2000,
      style: { padding: "10px" },
    });
  }
  if (result?.error?.status === 500) {
    toast.error(result?.error?.data.message, {
      duration: 2000,
      style: { padding: "10px" },
    });
  }

  if (result?.error?.status === 401) {
    const res = await fetch(
      "https://bike-rental-service-server-puce.vercel.app/api/auth/refresh-token",
      {
        method: "POST",
        credentials: "include",
      }
    );
    const data = await res.json();

    /* if refreshtoken expired */
    if (data?.data?.accessToken) {
      const user = (api.getState() as RootState).auth.user;

      /* set user data fter server resend the access token */
      api.dispatch(setUser({ user, token: data.data.accessToken }));

      result = (await baseQuery(args, api, extraOptions)) as TResponse<any>;
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};

export const baseApi = createApi({
  tagTypes: ["user", "bikes", "coupon","bookings"],
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});
