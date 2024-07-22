import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Tabs from './components/Tabs';
import Modal from './components/Modal';
import { fetchPlanets } from './services/NasaService';
import { Fade } from 'react-awesome-reveal';
import './App.css';

const App = () => {
  const [planets, setPlanets] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  useEffect(() => {
    const loadPlanets = async () => {
      const data = await fetchPlanets();
      if (Array.isArray(data)) {
        setPlanets(data);
      } else {
        console.error("Unexpected response:", data);
      }
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
                  <Fade key={index}>
                    <div className="planet-card">
                      <h3>{planet.title}</h3>
                      <p>{planet.explanation}</p>
                      <button onClick={() => setSelectedPlanet(planet)}>Learn More</button>
                    </div>
                  </Fade>
                ))}
              </div>
            )
          }
        ]}
      />
      <Modal show={selectedPlanet} onClose={() => setSelectedPlanet(null)}>
        {selectedPlanet && (
          <div className="planet-details">
            <h2>{selectedPlanet.title}</h2>
            <p>{selectedPlanet.explanation}</p>
            <button onClick={() => setSelectedPlanet(null)}>Close</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default App;
