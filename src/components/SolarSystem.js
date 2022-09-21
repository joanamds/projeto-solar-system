import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

const planetsList = planets.map((planet) => (
  <PlanetCard key={ planet.planetName } planet={ planet } />
));

class SolarSystem extends Component {
  render() {
    return (
      <>
        <Title>Planetas</Title>
        <div data-testid="solar-system">
          { planetsList }
        </div>
      </>
    );
  }
}

export default SolarSystem;
