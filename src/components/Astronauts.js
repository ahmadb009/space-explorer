import React, { useEffect, useState } from 'react';
import { fetchAstronauts } from '../services/NasaService';
import { Fade } from 'react-awesome-reveal';
import './Astronauts.css';

const Astronauts = () => {
  const [astronauts, setAstronauts] = useState([]);

  useEffect(() => {
    const loadAstronauts = async () => {
      const data = await fetchAstronauts();
      setAstronauts(data);
    };

    loadAstronauts();
  }, []);

  return (
    <div className="astronauts">
      {astronauts.map((astronaut, index) => (
        <Fade bottom key={index}>
          <div className="astronaut-card">
            <h3>{astronaut.name}</h3>
            <p>Craft: {astronaut.craft}</p>
          </div>
        </Fade>
      ))}
    </div>
  );
};

export default Astronauts;
