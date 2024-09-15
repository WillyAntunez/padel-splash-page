import React, { useEffect, useState } from 'react';

import './WelcomeAnimation.scss';

export const WelcomeAnimation = ({ onFinishAnimation = () => {} }) => {
  const [hasFinished, setHasFinished] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHasFinished(true);
      onFinishAnimation();
    }, 3750);
  }, []);

  return (
    <>
      {!hasFinished && (
        <>
          <span id="splash-overlay" className="splash"></span>

          <span id="welcome" className="z-depth-4"></span>
        </>
      )}
    </>
  );
};

export default WelcomeAnimation;
