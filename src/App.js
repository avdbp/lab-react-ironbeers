import React from 'react';
import NavigationBar from './components/NavigatorBar';
import { Route, Routes } from "react-router-dom";
import BeersPage from './pages/BeersPage';
import BeerDetailsPage from './pages/BeerDetailsPage';
import RandomBeerPage from './pages/RandomBeerPage';
import NewBeerPage from './pages/NewBeerPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <div>
        <NavigationBar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeersPage />} />
        <Route path="/beers/:id" element={<BeerDetailsPage />} />
        <Route path="/beers/random" element={<RandomBeerPage />} />
        <Route path="/beers/new" element={<NewBeerPage />} />
      </Routes>
    </div>
  );
}

export default App;
