import React from 'react';

class MissionCard extends React.Component {
  render() {
    return (
      <div data-testid="mission-card">
        <p data-testid="mission-name" />
        <p data-testid="mission-year" />
        <p data-testid="mission-country" />
        <p data-testid="mission-destination" />
      </div>
    );
  }
}

export default MissionCard;
