import React from 'react';
import GoogleMapReact from 'google-map-react';

import { GeoAltFill } from 'react-bootstrap-icons';
import './map.css';
import { Bounce, Fade } from 'react-reveal';
import { mapStyle } from '../utils/util';

const LocationPin = ({ text }) => (
  <div className="pin">
    <GeoAltFill className="pin-icon" />
  </div>
);


const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <Fade>
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
       options={{styles: mapStyle, disableDefaultUI: true, draggable: false}}
      >
        <Fade top delay={500}>
        <LocationPin
          lat={location.lat}
          lng={location.lng}
        />
        </Fade>
        
      </GoogleMapReact>
    </div>
    </Fade>
  </div>
);

export default Map;
