import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Use your OMDb API key here
const omdbApiKey = process.env.REACT_APP_OMDB_KEY;

export const omdbApi = createApi({
    reducerPath: 'omdbApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://www.omdbapi.com/' }),
    endpoints: (builder) => ({
        getMovies: builder.query({
            // Adjust the query to include the OMDb API key
            query: () => `?apikey=${omdbApiKey}&s=popular&type=movie`,
        }),
    }),
});

export const {
    useGetMoviesQuery,
} = omdbApi;
