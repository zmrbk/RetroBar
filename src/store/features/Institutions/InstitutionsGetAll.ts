import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../../utils/api";
import { IInstitution } from "../../../utils/types/institutionModel";

export const InstitutionGetAllApi = createApi({
  reducerPath: "institutionGetAllApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["institutionGetAll"],
  endpoints: (build) => ({
    fetchInstitutionsGetAll: build.query<IInstitution[], any>({
      query: () => ({
        url: "/user/pub",
      }),
      providesTags: ["institutionGetAll"],
    }),
    createInstitution: build.mutation<IInstitution, any>({
      query: (institution) => ({
        url: "/admin/pub",
        method: "POST",
        body: institution,
      }),
      invalidatesTags: ["institutionGetAll"],
    }),
  }),
});

export const { useFetchInstitutionsGetAllQuery, useCreateInstitutionMutation } =
  InstitutionGetAllApi;
