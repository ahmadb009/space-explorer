import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Tabs from './components/Tabs';
import Modal from './components/Modal';
import { fetchPlanets } from './services/NasaService';
import { fetchAstronauts } from './services/NasaService';
import { fetchMissions } from './services/NasaService';
import Fade from 'react-reveal/Fade';
import './App.css';
import Astronauts from './components/Astronauts';
import Missions from './components/Missions';

const App = () => {
  const [planets, setPlanets] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  useEffect(() => {
    const loadPlanets = async () => {
      const data = await fetchPlanets();
      setPlanets(data);
    };

    loadPlanets();
  }, []);

  return (
    <div className="App">
      <Header />
      <Tabs
        tabs={[
          {
            name: 'planets',
            label: 'Planets',
            content: (
              <div className="planets">
                {planets.map((planet, index) => (
                  <Fade bottom key={index}>
                    <div
                      className="planet-card"
                      onClick={() => setSelectedPlanet(planet)}
                    >
                      <h3>{planet.title}</h3>
                      <p>{planet.explanation}</p>
                    </div>
                  </Fade>
                ))}
              </div>
            )
          },
          {
            name: 'astronauts',
            label: 'Astronauts',
            content: <Astronauts />
          },
          {
            name: 'missions',
            label: 'Missions',
            content: <Missions />
          }
        ]}
      />
      <Modal show={selectedPlanet} onClose={() => setSelectedPlanet(null)}>
        {selectedPlanet && (
          <div className="planet-details">
            <h2>{selectedPlanet.title}</h2>
            <p>{selectedPlanet.explanation}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default App;
