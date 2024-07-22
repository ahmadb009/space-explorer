import axios from 'axios';

const API_KEY = '8lxsm7c1552fFv71aAoMrTss9JaYFaD3PYWq0cHV';

export const fetchPlanets = async () => {
  const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
  return response.data;
};