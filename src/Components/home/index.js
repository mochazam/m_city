import React from 'react';
import Featured from './featured';
import Matches from './matches';
import MeetPLayers from './meetPlayers';
import Promotion from './promotion';

const Home = () => {
    return (
      <div className="bck_blue">
        <Featured/>
        <Matches/>
        <MeetPLayers />
        <Promotion />

      </div>
    )
}


export default Home;