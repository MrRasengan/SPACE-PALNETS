import React from 'react';
import { useParams } from 'react-router-dom';
import planetsData from '../data/planets.js';

const PlanetDetailPage = () => {
  const { id } = useParams();
  const planet = planetsData.find(p => p.id === parseInt(id));

  if (!planet) return <h2>Error</h2>;

  return (
    <div className='container'>
      <h1 className='name-planet'>{planet.name}</h1>
      <img className='img-planet' src={planet.image} alt={planet.name} />
      <p className='full-description'>{planet.fullDescription}</p>
    </div>
  );
};

export default PlanetDetailPage;
