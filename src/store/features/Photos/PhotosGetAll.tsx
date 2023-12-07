import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../../utils/api";
import { IPhotos } from "../../../utils/types/adminPhotos";

export const PhotosGetAllApi = createApi({
  reducerPath: "photosGetAllApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API,
    prepareHeaders: (headers) => {
      headers.set("Access-Control-Allow-Origin", "*");
      return headers;
    },
  }),
  tagTypes: ["photosGetAll"],
  endpoints: (build) => ({
    fetchPhotosGetAll: build.query<IPhotos[], any>({
      query: () => ({
        url: "/user/photo",
      }),
      providesTags: ["photosGetAll"],
    }),
    createPhoto: build.mutation<IPhotos, any>({
      query: (photos) => ({
        url: "/admin/photo",
        method: "POST",
        body: photos,
      }),
      invalidatesTags: ["photosGetAll"],
    }),
    updatePhoto: build.mutation<IPhotos, any>({
      query: ({ data, id }) => ({
        url: `admin/photo/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["photosGetAll"],
    }),
    getPhotoById: build.query<IPhotos, any>({
      query: (id) => ({
        url: `admin/photo/${id}`,
      }),
      providesTags: ["photosGetAll"],
    }),
    deletePhoto: build.mutation<IPhotos, any>({
      query: (id) => ({
        url: `admin/photo/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["photosGetAll"],
    }),
  }),
});

export const {
  useFetchPhotosGetAllQuery,
  useCreatePhotoMutation,
  useGetPhotoByIdQuery,
  useUpdatePhotoMutation,
  useDeletePhotoMutation,
} = PhotosGetAllApi;
