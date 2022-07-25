import { createApi } from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";

import { client } from "./graphql";

export const api = createApi({
  reducerPath: "adsApi",
  baseQuery: graphqlRequestBaseQuery({ client }),
  endpoints: () => ({}),
});
