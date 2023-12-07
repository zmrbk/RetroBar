import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../../utils/api";
import { IPoster } from "../../../utils/types/adminPoster";

export const PosterApi = createApi({
  reducerPath: "PostersGetAllApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API,
    prepareHeaders: (headers) => {
      headers.set("Access-Control-Allow-Origin", "*");
      return headers;
    },
  }),
  tagTypes: ["PostersGetAllApi"],
  endpoints: (build) => ({
    fetchPoster: build.query<IPoster[], any>({
      query: () => ({
        url: "/user/poster",
      }),
      providesTags: ["PostersGetAllApi"],
    }),
    createPoster: build.mutation<IPoster, any>({
      query: (ad) => ({
        url: "/admin/poster",
        method: "POST",
        body: ad,
      }),
      invalidatesTags: ["PostersGetAllApi"],
    }),
  }),
});

export const { useFetchPosterQuery, useCreatePosterMutation } = PosterApi;
