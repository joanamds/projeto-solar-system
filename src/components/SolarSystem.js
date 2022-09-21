import React, { Component } from 'react';
import Title from './Title';

class SolarSystem extends Component {
  render() {
    return (
      <>
        <Title>Planetas</Title>
        <div data-testid="solar-system" />
      </>
    );
  }
}

export default SolarSystem;
