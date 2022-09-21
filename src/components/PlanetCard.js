import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planet: { planetName, planetImage } } = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">
          { planetName }
        </p>
        <img src={ planetImage } alt={ planetName } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planet: PropTypes.shape({
    planetName: PropTypes.string,
    planetImage: PropTypes.string,
  }).isRequired,
};

export default PlanetCard;
