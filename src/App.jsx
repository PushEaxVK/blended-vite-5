import { lazy, useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import { getCurrentPosition } from './service';

const Home = lazy(() => import('./pages/Home.jsx'));
const Rates = lazy(() => import('./pages/Rates.jsx'));

export const App = () => {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCurrentPosition()
      .then(pos => setPosition(pos))
      .catch(err => setError(err.message));
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="rates" element={<Rates />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
