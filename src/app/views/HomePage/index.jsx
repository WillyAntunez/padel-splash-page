import React from 'react';
import { NavLink } from 'react-router-dom';

import HomePageBg from '@/assets/homepage/home-bg.jpg';
import player1 from '@/assets/homepage/player-1.png';
import player2 from '@/assets/homepage/player-2.png';

import './HomePage.scss';

export const HomePage = () => {
  return (
    <section
      className="home-page"
      style={{
        background: `url(${HomePageBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* content */}
      <div className="home-page__content">
        {/* padel logo */}
        <div className="home-page__logo-wrapper">
          <img src={'/assets/logos/logo.svg'} />
        </div>

        {/* title */}
        <h1 className="home-page__title">
          <span className="home-page__title--1">REVOLUCIONA</span>
          <span className="home-page__title--2">
            TU JUEGO
            <span className="home-page__title--2__shadow">TU JUEGO</span>
          </span>
        </h1>

        {/* text */}
        <p className="home-page__text">
          Ven a jugar al mejor pádel en El Salvador. <br /> ¡Te esperamos!
        </p>

        {/* button */}
        <button className="home-page__button">
          <NavLink to="/contact">¡Contactanos!</NavLink>
        </button>
      </div>

      {/* triangles */}
      {/* top left triangles */}
      <>
        <span className="home-page__triangle-wrapper">
          <span className="home-page__triangle-1"></span>
        </span>

        <span className="home-page__triangle-2-wrapper">
          <span className="home-page__triangle-2"></span>
        </span>

        {/* bottom right triangles */}
        <span className="home-page__triangle-3-wrapper">
          <span className="home-page__triangle-3"></span>
        </span>

        <span className="home-page__triangle-4"></span>
      </>

      {/* players */}
      <>
        <span className="home-page__player-1">
          <img
            src={player1}
            alt="player-1"
            className="home-page__player-1__img"
          />
        </span>

        <span className="home-page__player-2">
          <img
            src={player2}
            alt="player-1"
            className="home-page__player-2__img"
          />
        </span>
      </>
    </section>
  );
};

export default HomePage;
