import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../../utils/api";
import { InstitutionBarId } from "../../../utils/types/institutionBar";

export const InstitutionGetBarApi = createApi({
  reducerPath: "institutionGetIdApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["institutionGetId"],
  endpoints: (build) => ({
    fetchInstitutionsGetBar: build.query<InstitutionBarId[], any>({
      query: () => ({
        url: `/user/pub/${4}`,
      }),
      providesTags: ["institutionGetId"],
    }),
  }),
});

export const { useFetchInstitutionsGetBarQuery } = InstitutionGetBarApi;
