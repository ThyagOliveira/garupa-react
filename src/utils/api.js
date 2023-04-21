import axios from 'axios';

const punkApi = axios.create({
  baseURL: 'https://api.punkapi.com/v2/',
});

const server = axios.create({
  baseURL: 'http://localhost:3000/api/',
});

const login = (data) => server.post('auth/login', { data });
const register = (data) => server.post('users', { data });
const loadBeerPage = (page) => punkApi.get('beers?page=' + page);

const loginTest = (data) => {
  const { email, password } = data;

  if (email === 'admin@email.com' && password === 'admin123')
    return {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
      status: true,
    };

  return { status: false };
};

const api = {
  login,
  loginTest,
  register,
  loadBeerPage,
};

export default api;
