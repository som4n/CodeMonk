import React from "react";
import { CssBaseline } from '@mui/material';
import {  Routes, Route } from 'react-router-dom';
import { Actors, Movieinfo, Movies, Navbar, Profile } from './index';

const App = () => (
  <div>
    <Navbar />
    <CssBaseline />
    <main>
      
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/actors/" element={<Actors />} />
          <Route path="/movie/:id" element={<Movieinfo />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
    </main>
  </div>
);

export default App;
