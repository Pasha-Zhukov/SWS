import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const eID = 124593; //start id
const baseUrl = "http://185.244.172.108:8081/";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    fetchEntityData: builder.query({
      query: () => `/v1/outlay-rows/entity/${eID}/row/list`,
    }),
    createRow: builder.mutation({
      query: ({ data }) => ({
        url: `/v1/outlay-rows/entity/${eID}/row/create`,
        method: "POST",
        body: data,
      }),
    }),
    updateRow: builder.mutation({
      query: ({ rID, updatedData }) => ({
        url: `/v1/outlay-rows/entity/${eID}/row/${rID}/update`,
        method: "POST",
        body: updatedData,
      }),
    }),
    deleteRow: builder.mutation({
      query: (rID) => ({
        url: `/v1/outlay-rows/entity/${eID}/row/${rID}/delete`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useFetchEntityDataQuery,
  useCreateRowMutation,
  useUpdateRowMutation,
  useDeleteRowMutation,
} = api;
