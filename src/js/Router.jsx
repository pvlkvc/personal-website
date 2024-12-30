import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Loading from './Loading.jsx';

const HomePage = lazy(() => import('./Home.jsx'));
const PortfolioPage = lazy(() => import('./Portfolio.jsx'));

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}