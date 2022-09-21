import React from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <>
        <div className="missions-main-title">
          <Title headline="MISSÕES" />
        </div>
        <div className="missions-section" data-testid="missions">

          { missions.map((mission) => (
            <MissionCard
              key={ mission.name }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />
          )) }
        </div>
      </>
    );
  }
}

export default Missions;
