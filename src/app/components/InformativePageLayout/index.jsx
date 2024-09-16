import React from 'react';

import './InformativePageLayout.scss';

export const InformativePageLayout = ({ children = <></>, title = '' }) => {
  return (
    <section className="informative-page-layout fade-in">
      <h1 className="informative-page-layout__title">{title}</h1>
      <span className="informative-page-layout__divider"></span>

      <div className="informative-page-layout__content">
        <div className="informative-page-layout__content__logo">
          <img src="/assets/logos/logo.svg" />
        </div>
        <div className="informative-page-layout__content__text">{children}</div>
      </div>
    </section>
  );
};

export default InformativePageLayout;
