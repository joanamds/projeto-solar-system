import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <>
        <Title>Planetas</Title>
        <div data-testid="solar-system">
          { planets.map((planet) => (
            <PlanetCard
              key={ planet.name }
              planetName={ planet.name }
              planetImage={ planet.image }
            />
          )) }
        </div>
      </>
    );
  }
}

export default SolarSystem;
