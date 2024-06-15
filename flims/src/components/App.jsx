import React from "react";
import { CssBaseline } from '@mui/material';
import {  Routes, Route } from 'react-router-dom';
import { Actors, Movieinfo, Movies, Navbar, Profile } from './index';

import useStyles from './styles';
const App = () => {

    const Classes = useStyles();

    return (
        <div className={Classes.root}>

          <Navbar />
          <CssBaseline />
          <main className={Classes.content}>
            
            <div className={Classes.toolbar} />

              <Routes>
                <Route path="/" element={<Movies />} />
                <Route path="/actors/" element={<Actors />} />
                <Route path="/movie/:id" element={<Movieinfo />} />
                <Route path="/profile/:id" element={<Profile />} />
              </Routes>
          </main>
        </div>
      )
};

export default App;
