import React from 'react';

import './ContactUsPage.scss';
import InformativePageLayout from '@/app/components/InformativePageLayout';

export const ContactUsPage = () => {
  return (
    <InformativePageLayout title={'Contáctanos'}>
      <p>
        En Padel Pro, estamos aquí para ayudarte. Ya sea que quieras reservar
        una cancha, unirte a nuestras clases o explorar oportunidades de
        patrocinio, te ofrecemos los siguientes contactos:
      </p>

      <h3>Reservas de Canchas y Clases</h3>
      <ul className="contact__list">
        <li>
          Teléfono:
          <a href="tel:+503 2222-2222">+503 2222-2222</a>
        </li>
        <li>
          Correo Electrónico:{' '}
          <a href="mailto:reservas@padelpro.com">reservas@padelpro.com</a>
        </li>
      </ul>

      <h3>Eventos y Torneos</h3>
      <ul className="contact__list">
        <li>
          Teléfono:
          <a href="tel:+503 2222-2222">+503 2222-2222</a>
        </li>
        <li>
          Correo Electrónico:{' '}
          <a href="mailto:reservas@padelpro.com">eventos@padelpro.com</a>
        </li>
      </ul>

      <h3>Patrocinios</h3>
      <ul className="contact__list">
        <li>
          Teléfono:
          <a href="tel:+503 2222-2222">+503 2222-2222</a>
        </li>
        <li>
          Correo Electrónico:{' '}
          <a href="mailto:patrociniospatrocinios@padelpro.com">
            patrocinios@padelpro.com
          </a>
        </li>
      </ul>

      <h3>Atencion general</h3>
      <ul className="contact__list">
        <li>
          Teléfono:
          <a href="tel:+503 2222-2222">+503 2222-2222</a>
        </li>
        <li>
          Correo Electrónico:{' '}
          <a href="mailto:contacto@padelpro.com">contacto@padelpro.com</a>
        </li>
      </ul>

      <h3>¿Dónde estamos ubicados?</h3>
      <p>Carretera a Nuevo Cuscatlan 2-4, Nuevo Cuscatlán, El Salvador</p>

      <p
        style={{
          marginTop: '2rem',
        }}
      >
        ¡No dudes en contactarnos para cualquier consulta! Estamos aquí para
        ofrecerte la mejor experiencia de pádel en El Salvador.
      </p>
    </InformativePageLayout>
  );
};

export default ContactUsPage;
