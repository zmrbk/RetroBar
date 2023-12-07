import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../../utils/api";
import { IVideos } from "../../../utils/types/adminVIdeos";

export const VideosGetAllApi = createApi({
  reducerPath: "videosGetAllApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API,
    prepareHeaders: (headers) => {
      headers.set("Access-Control-Allow-Origin", "*");
      return headers;
    },
  }),
  tagTypes: ["videosGetAll"],
  endpoints: (build) => ({
    fetchVideosGetAll: build.query<IVideos[], any>({
      query: () => ({
        url: "/user/video",
      }),
      providesTags: ["videosGetAll"],
    }),
    createVideo: build.mutation<IVideos, any>({
      query: (videos) => ({
        url: "/admin/video",
        method: "POST",
        body: videos,
      }),
      invalidatesTags: ["videosGetAll"],
    }),
  }),
});

export const { useFetchVideosGetAllQuery, useCreateVideoMutation } = VideosGetAllApi;
