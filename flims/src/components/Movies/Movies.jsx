import { useState,useEffect } from "react";
import React from "react";
import {Box,CircularProgress,useMediaQuery,Typography} from '@mui/material';
import { useSelector } from "react-redux";

import { omdbApi, useGetMoviesQuery } from '../../services/OMDB';

const Movies =() => {
    const { data } = useGetMoviesQuery ();
    console.log(data);
    return (
        <div>
            
        </div>
    );
};

export default Movies;