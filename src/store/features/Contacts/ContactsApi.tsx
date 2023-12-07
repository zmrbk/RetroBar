import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../../utils/api";
import { IContacts } from "../../../utils/types/adminContacts";

export const ContactsApi = createApi({
  reducerPath: "constactsApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["contactsApi"],
  endpoints: (build) => ({
    fetchContacts: build.query<IContacts[], any>({
      query: () => ({
        url: "/admin/contact",
      }),
      providesTags: ["contactsApi"],
    }),
    createContacts: build.mutation<IContacts, any>({
      query: (contacts) => ({
        url: "/admin/contact",
        method: "POST",
        body: contacts,
      }),
      invalidatesTags: ["contactsApi"],
    }),
  }),
});

export const { useFetchContactsQuery, useCreateContactsMutation } = ContactsApi;
