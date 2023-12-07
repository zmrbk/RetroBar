import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../../utils/api";
import { IEmployer } from "../../../utils/types/adminEmployer";

export const EmployersApi = createApi({
  reducerPath: "employersApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["employees"],
  endpoints: (build) => ({
    fetchEmployersGetAll: build.query<IEmployer[], any>({
      query: () => ({
        url: "/admin/photographer",
      }),
      providesTags: ["employees"],
    }),
    createEmployer: build.mutation<IEmployer, any>({
      query: (employee) => ({
        url: "/admin/photographer",
        method: "POST",
        body: employee,
      }),
      invalidatesTags: ["employees"],
    }),
    getEmployer: build.query<IEmployer, any>({
      query: (id) => ({
        url: `/user/photographer/${id}`,
      }),
      providesTags: ["employees"],
    }),
    deleteEmployer: build.mutation<IEmployer, any>({
      query: (id) => ({
        url: `admin/photographer/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["employees"],
    }),
    updateEmployer: build.mutation<IEmployer, any>({
      query: ({ formData, id }) => ({
        url: `/admin/photographer/${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["employees"],
    }),
  }),
});

export const {
  useFetchEmployersGetAllQuery,
  useCreateEmployerMutation,
  useGetEmployerQuery,
  useDeleteEmployerMutation,
  useUpdateEmployerMutation,
} = EmployersApi;
