import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <>
        <Title headline="PLANETAS" />
        <div className="system" data-testid="solar-system">
          { planets.map((planet) => (
            <PlanetCard
              key={ planet.name }
              planetName={ planet.name }
              planetImage={ planet.image }
              width={ planet.width }
            />
          )) }
        </div>
      </>
    );
  }
}

export default SolarSystem;
