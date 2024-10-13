import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PlanetDetailPage from './pages/PlanetDetailPage';
import RickAndMorty from './pages/RickAndMorty';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/styles.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/planet/:id" element={<PlanetDetailPage />} />
        <Route path="/RickAndMorty" element={<RickAndMorty />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
