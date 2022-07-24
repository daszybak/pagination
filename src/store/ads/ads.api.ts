import { createApi } from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import { gql } from "graphql-request";

import { client } from "../../graphql";

export const adsApi = createApi({
  reducerPath: "adsApi",
  baseQuery: graphqlRequestBaseQuery({ client }),
  endpoints: (build) => ({
    getAdById: build.query({
      query: (id) => ({
        document: gql`
          query getAdById($id: Int) {
            ad(where: { ad_id: $id }) {
              title
            }
          }
        `,
        variables: { id },
      }),
    }),
    createAd: build.mutation({
      query: ({ title, text }) => ({
        document: gql`
          mutation createAd($ad: AdCreateInput!) {
            createAd(data: $ad) {
              ad_id
              title
              text
              created_at
            }
          }
        `,
        variables: {
          ad: {
            text,
            title,
          },
        },
      }),
    }),
  }),
});

export const { useGetAdByIdQuery, useCreateAdMutation } = adsApi;
