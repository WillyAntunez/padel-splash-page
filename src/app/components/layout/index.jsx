import React, { useState } from 'react';
import WelcomeAnimation from './WelcomeAnimation';
import Header from './Header';
import Footer from './Footer';

export const LandingLayout = ({ children, showAnimation = false }) => {
  const [hasFinishedAnimation, setHasFinishedAnimation] =
    useState(!showAnimation);

  const onFinishAnimation = () => {
    setHasFinishedAnimation(true);
  };

  return (
    <section
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
      className={showAnimation ? 'welcome' : ''}
    >
      {showAnimation && (
        <WelcomeAnimation onFinishAnimation={onFinishAnimation} />
      )}

      <Header />

      {hasFinishedAnimation && (
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          {children}
        </div>
      )}

      <Footer />
    </section>
  );
};

export default LandingLayout;
