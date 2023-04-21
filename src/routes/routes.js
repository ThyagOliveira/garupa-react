import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import auth from '../utils/auth';

const PrivateRoute = ({ children }) => {
  const token = auth.getAuthToken();
  let location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<LoginPage />} />
      <Route
        exact
        path="/"
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
