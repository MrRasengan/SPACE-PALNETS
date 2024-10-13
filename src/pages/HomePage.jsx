import React, { useEffect, useState } from 'react';
import PlanetCard from '../components/PlanetCard';
import planetsData from '../data/planets'; // Импортируем статические данные
import Planets from '../img/planets.jpg'



const HomePage = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    // Здесь можно использовать API, но для простоты используем статические данные
    setPlanets(planetsData);
  }, []);

  return (
    <div className='container'>
      <div className='main'>
      <h1 className='main__heading'>Welcome to the most COSMIC site "SPACE & PLANETS" !!!  </h1>
      <img className='main__img' src={Planets} alt="planets" />
      </div>
      <h1 className='main__heading'>We present you a list of planets of the solar system !  </h1>
      <div className="planet-list">
        {planets.map(planet => (
          <PlanetCard key={planet.id} planet={planet} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
