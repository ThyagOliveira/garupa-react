const clearLocalStorage = () => localStorage.clear();
const setAuthToken = (token) => localStorage.setItem('token', token);
const getAuthToken = () => {
  return localStorage.getItem('token');
};

const auth = { setAuthToken, getAuthToken, clearLocalStorage };

export default auth;
