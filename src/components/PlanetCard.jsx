import React from 'react';

const PlanetCard = ({ planet }) => {
  return (
    <div className="planet-card">
      <a href={`/planet/${planet.id}`}><img src={planet.image} alt={planet.name} /></a>
      <a href={`/planet/${planet.id}`}><h2>{planet.name}</h2></a>
      <a href={`/planet/${planet.id}`}><p>{planet.description}</p></a>
    </div>
  );
};

export default PlanetCard;
