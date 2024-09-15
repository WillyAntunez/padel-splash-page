import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

export const Header = () => {
  return (
    <header className="landing-header">
      {/* logo */}
      <div className="landing-header__right">
        <NavLink to="/" className={'landing-header__logo'}>
          <img src="/assets/logos/icon-white.svg" alt="logo" />
        </NavLink>
      </div>

      <div className="landing-header__left">
        {/* navigation items */}
        <nav aria-label="Main navigation">
          <ul className="landing-header__nav">
            <li>
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/about">Sobre nosotros</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contactanos</NavLink>
            </li>
          </ul>
        </nav>

        {/* social media icons */}
        <nav aria-label="Social media links">
          <ul className="landing-header__social">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="landing-header__social-icon"
              >
                <img src="/assets/icons/social/facebook.png" alt="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="landing-header__social-icon"
              >
                <img src="/assets/icons/social/instagram.png" alt="instagram" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
