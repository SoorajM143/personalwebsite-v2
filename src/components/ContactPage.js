import React, { lazy, Suspense, useEffect } from 'react';
import { Fade, Slide } from 'react-reveal';
import '../styles/ContactPage.css';
import ContactForm from './Form/ContactForm';
import Constant from './utils/Constant';

const location = {
  address: 'Windmill lane, Dublin, Ireland',
  lat: 53.3457712,
  lng: -6.2455611,
};

const Map = lazy(() => import('./map/Map'));

function ContactPage() {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--background-color', '#ffdaa5');
  }, []);

  return (
    <>
      <div className="contact_page">
        <Fade top delay={400}>
          <h1>{Constant.CONTACT_HEADER}</h1>
        </Fade>
        <Slide right delay={200}>
          <div className="contact_underline"></div>
          <span className="contact_dot"></span>
        </Slide>
        <div className="contact_info">
          <ContactForm />
        </div>
        <div className="contact-map">
          <Suspense fallback={<h1>Loading....</h1>}>
            <Map location={location} zoomLevel={10} />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
