import { lazy, Suspense } from 'react';
import Heading from './components/Heading/Heading';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const Rates = lazy(() => import('./pages/Rates.jsx'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="rates" element={<Rates />} />
        </Route>
      </Routes>
    </>
  );
};
