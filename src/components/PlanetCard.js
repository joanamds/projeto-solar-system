import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage, width } = this.props;
    const alternative = `Planeta ${planetName}`;
    return (
      <div className="card-planet" data-testid="planet-card">
        <p data-testid="planet-name">
          { planetName }
        </p>
        <img src={ planetImage } alt={ alternative } width={ width } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
  width: PropTypes.string,
}.isRequired;

export default PlanetCard;
