import { url } from "inspector";
import { api } from "../baseApi";

const tuitionPostUrl = "/tuition-posts";

const tuitionApi = api.injectEndpoints({
  endpoints: (builder) => ({
    //create
    createTuitionPost: builder.mutation({
      query: (data) => ({
        url: `${tuitionPostUrl}`,
        method: "POST",
        data: data,
      }),
    }),

    //get All
    getAllTuitionPost: builder.query({
      query: (data: any) => (
        console.log(data),
        {
          url: `${tuitionPostUrl}`,
          method: "GET",
          params: data,
        }
      ),
    }),

    // get single
    getSingleTuitionPost: builder.query({
      query: (id) => ({
        url: `${tuitionPostUrl}/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateTuitionPostMutation,
  useGetAllTuitionPostQuery,
  useGetSingleTuitionPostQuery,
} = tuitionApi;
