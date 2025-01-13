import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Actors, Movie, MovieInformation, Navbar, Profile } from '.';

function App() {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/movies/:id" element={<Movie />} />
          <Route path="/actor/:id" element={<Actors />} />
          <Route path="/MovieInformation/:id" element={<MovieInformation />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
