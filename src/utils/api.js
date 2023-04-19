import axios from 'axios';

const server = axios.create({
  baseURL: 'https://api.punkapi.com/v2/',
});

const loadRandomBeers = () => server.get('beers/random/');
const loadBeerPage = (page, per_page) =>
  server.get('beers?page=' + page + '&per_page=' + per_page);

const api = {
  loadRandomBeers,
  loadBeerPage,
};

export default api;
