import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../../utils/api";
import { IAd } from "../../../utils/types/adminAd";

export const AdApi = createApi({
  reducerPath: "AdsGetAllApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API,
    prepareHeaders: (headers) => {
      headers.set("Access-Control-Allow-Origin", "*");
      return headers;
    },
  }),
  tagTypes: ["AdsGetAllApi"],
  endpoints: (build) => ({
    fetchAd: build.query<IAd[], any>({
      query: () => ({
        url: "/user/ad",
      }),
      providesTags: ["AdsGetAllApi"],
    }),
    createAd: build.mutation<IAd, any>({
      query: (ad) => ({
        url: "/admin/ad",
        method: "POST",
        body: ad,
      }),
      invalidatesTags: ["AdsGetAllApi"],
    }),
  }),
});

export const { useFetchAdQuery, useCreateAdMutation } = AdApi;
