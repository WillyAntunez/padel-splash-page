import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../views/HomePage';
import { LandingLayout } from '../components';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <LandingLayout showAnimation>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </LandingLayout>
    </BrowserRouter>
  );
};
