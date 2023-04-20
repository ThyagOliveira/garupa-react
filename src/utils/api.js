import axios from 'axios';

const server = axios.create({
  baseURL: 'https://api.punkapi.com/v2/',
});

const loadRandomBeers = () => server.get('beers/');
const loadBeerPage = (page) => server.get('beers?page=' + page);

const api = {
  loadRandomBeers,
  loadBeerPage,
};

export default api;
