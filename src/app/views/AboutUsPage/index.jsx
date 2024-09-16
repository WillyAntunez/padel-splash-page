import React from 'react';
import InformativePageLayout from '@/app/components/InformativePageLayout';

import './AboutUsPage.scss';

export const AboutUsPage = () => {
  return (
    <InformativePageLayout title="Sobre Nosotros">
      <p>
        En Padel Pro, somos apasionados por el pádel, el deporte que está
        revolucionando el mundo. Nuestras instalaciones de primer nivel están
        diseñadas para ofrecer la mejor experiencia tanto a jugadores
        aficionados como a profesionales. Creemos en el poder del deporte para
        conectar personas, mejorar el bienestar físico y construir una comunidad
        vibrante en El Salvador.
      </p>
      <p>
        Nos esforzamos por crear un ambiente acogedor y profesional, donde
        jugadores de todos los niveles puedan disfrutar del deporte de mayor
        crecimiento a nivel mundial. Con torneos, clases y eventos sociales,
        Padel Pro se posiciona como el lugar de referencia para el pádel en el
        país.
      </p>
      <p>
        Únete a nosotros y sé parte del futuro del pádel en El Salvador. ¡Te
        esperamos en la cancha!
      </p>
    </InformativePageLayout>
  );
};

export default AboutUsPage;
