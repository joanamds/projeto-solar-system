import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="card-mission" data-testid="mission-card">
        <p className="name-mission" data-testid="mission-name">
          { name }
        </p>
        <p className="year-mission" data-testid="mission-year">
          { year }
        </p>
        <span className="mission-moreinfo">
          <p data-testid="mission-country">
            { country }
          </p>
          <p data-testid="mission-destination">
            { destination }
          </p>
        </span>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  country: PropTypes.string,
  destination: PropTypes.string,
}.isRequired;

export default MissionCard;
