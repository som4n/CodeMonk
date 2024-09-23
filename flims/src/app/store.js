import { configureStore } from '@reduxjs/toolkit';
import { omdbApi } from '../services/OMDB';

const store = configureStore({
    reducer: {
        [omdbApi.reducerPath]: omdbApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(omdbApi.middleware),
});

export default store;
