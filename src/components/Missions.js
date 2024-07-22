import React, { useEffect, useState } from 'react';
import { fetchMissions } from '../services/NasaService';
import { Fade } from 'react-awesome-reveal';
import './Missions.css';

const Missions = () => {
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    const loadMissions = async () => {
      const data = await fetchMissions();
      setMissions(data);
    };

    loadMissions();
  }, []);

  return (
    <div className="missions">
      {missions.map((mission, index) => (
        <Fade bottom key={index}>
          <div className="mission-card">
            <h3>{mission.name}</h3>
            <p>Date: {new Date(mission.date_utc).toLocaleDateString()}</p>
            <p>Details: {mission.details}</p>
          </div>
        </Fade>
      ))}
    </div>
  );
};
