import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

export const Header = () => {
  const [isAsideMenuOpen, setIsAsideMenuOpen] = useState(false);

  const onOpenAsideMenu = () => {
    setIsAsideMenuOpen(true);
  };

  const onCloseAsideMenu = () => {
    setIsAsideMenuOpen(false);
  };

  const onClickOutsideAsideMenu = (e) => {
    if (e.target.classList.contains('landing-header__aside-wrapper')) {
      setIsAsideMenuOpen(false);
    }
  };

  return (
    <>
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

          {/* social media icons and hamb */}
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
                  <img
                    src="/assets/icons/social/instagram.png"
                    alt="instagram"
                  />
                </a>
              </li>
            </ul>
          </nav>

          {/* hamb */}
          <button
            className="landing-header__hamb"
            aria-label="Open navigation"
            onClick={onOpenAsideMenu}
          >
            <img src="/assets/icons/hamb.svg" alt="hamb" />
          </button>
        </div>
      </header>

      <div
        className={`landing-header__aside-wrapper ${
          isAsideMenuOpen ? 'landing-header__aside-wrapper--open' : ''
        }`}
        onClick={onClickOutsideAsideMenu}
      >
        <aside
          className={`landing-header__aside ${
            isAsideMenuOpen ? 'landing-header__aside--open' : ''
          }`}
        >
          {/*  logo */}
          <div className="landing-header__aside__logo">
            <img src="/assets/logos/logo.svg" alt="logo" />
          </div>

          {/* close icon */}
          <button
            className="landing-header__aside__close"
            aria-label="Close navigation"
            onClick={onCloseAsideMenu}
          >
            <img src="/assets/icons/close.svg" alt="close" />
          </button>

          {/* navigation items */}
          <nav aria-label="Main navigation">
            <ul className="landing-header__aside__nav">
              <li>
                <NavLink to="/" onClick={onCloseAsideMenu}>
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={onCloseAsideMenu}>
                  Sobre nosotros
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={onCloseAsideMenu}>
                  Contactanos
                </NavLink>
              </li>
            </ul>
          </nav>
        </aside>
      </div>
    </>
  );
};

export default Header;
