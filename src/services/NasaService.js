import axios from 'axios';

const NASA_API_KEY = '8lxsm7c1552fFv71aAoMrTss9JaYFaD3PYWq0cHV';
const NASA_PLANETS_URL = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&count=5`;

export const fetchPlanets = async () => {
    try {
      const response = await axios.get(NASA_PLANETS_URL);
      if (Array.isArray(response.data)) {
        return response.data;
      } else {
        console.error("Unexpected response:", response.data);
        return [];
      }
    } catch (error) {
      console.error("Error fetching planets:", error);
      return [];
    }
  };