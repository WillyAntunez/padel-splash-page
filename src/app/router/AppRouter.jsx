import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../views/HomePage';
import { LandingLayout } from '../components';
import AboutUsPage from '../views/AboutUsPage';
import ContactUsPage from '../views/ContactUsPage';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <LandingLayout showAnimation>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Routes>
      </LandingLayout>
    </BrowserRouter>
  );
};
