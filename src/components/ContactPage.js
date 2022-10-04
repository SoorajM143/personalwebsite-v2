import React, { lazy, Suspense } from 'react';
import { Fade, Slide } from 'react-reveal';
import '../styles/ContactPage.css';
import ContactForm from './Form/ContactForm';
import { textAnimate } from './utils/util';

const location = {
  address: 'Windmill lane, Dublin, Ireland',
  lat: 53.3457712,
  lng: -6.2455611,
};

const Map = lazy(() => import('./map/Map'));

function ContactPage() {
  let contactheader = 'Contact';
  return (
    <>
      <section className="contact_page">
        <Fade top>
          <h1>{textAnimate(contactheader)}</h1>
        </Fade>
        <Slide right>
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
        <span className="bottom_tags tags">{'</html>'}</span>
      </section>
    </>
  );
}

export default ContactPage;
