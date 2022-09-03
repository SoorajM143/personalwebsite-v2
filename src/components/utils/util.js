import React from 'react';
import { createTheme } from '@mui/material/styles';
import GithubIcon from '../../images/github-icon.svg';
import JqueryIcon from '../../images/jquery.svg';
import CssIcon from '../../images/css-3.svg';
import GoogleMapsIcon from '../../images/google-maps.svg';
import JenkinIcon from '../../images/jenkins.svg';
import PostgreSQLIcon from '../../images/postgresql.svg';
import IllustratorIcon from '../../images/adobe-illustrator.svg';
import PhotoshopIcon from '../../images/adobe-photoshop.svg';
import HtmlIcon from '../../images/html-5.svg';
import JsIcon from '../../images/javascript.svg';
import JiraIcon from '../../images/jira.svg';
import MuiIcon from '../../images/material-ui.svg';
import NodejsIcon from '../../images/nodejs-icon.svg';
import TsIcon from '../../images/typescript-icon.svg';
import SassIcon from '../../images/sass.svg';
import ReactIcon from '../../images/react.svg';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#fbd33c',
      darker: '#fbd33c',
    },
    neutral: {
      main: '#fbd33c',
      contrastText: '#fff',
    },
  },
});

export const textAnimate = (text) => {
  return text.split(/(\s+)/).map((letter) => {
    return letter !== ' '
      ? letter.split('').map((lete, i) => {
          return (
            <span key={i} className="a">
              {lete}
            </span>
          );
        })
      : ' ';
  });
};

export const mapStyle = [
  {
    featureType: 'all',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels.text.fill',
    stylers: [
      {
        saturation: 36,
      },
      {
        color: '#000000',
      },
      {
        lightness: 40,
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#000000',
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 17,
      },
      {
        weight: 1.2,
      },
    ],
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#ed5929',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#c4c4c4',
      },
    ],
  },
  {
    featureType: 'administrative.neighborhood',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#ffcc04',
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 21,
      },
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'poi.business',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'all',
    stylers: [
      {
        color: '#000000',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#ffcc04',
      },
      {
        lightness: '0',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#ffcc04',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 18,
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#575757',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#2c2c2c',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#999999',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 19,
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'simplified',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 17,
      },
    ],
  },
];

export const skillSphere = [
  <img width={50} src={TsIcon} alt={'typescript'} />,
  <img width={50} src={SassIcon} alt={'Sass'} />,
  <img width={50} src={IllustratorIcon} alt={'adobe-illustrator'} />,
  <img width={50} src={HtmlIcon} alt={'html'} />,
  <img width={50} src={JsIcon} alt={'Sass'} />,
  <img width={50} src={PhotoshopIcon} alt={'adobe-photoshop'} />,
  <img width={50} src={ReactIcon} alt={'React'} />,
  <img width={50} src={GoogleMapsIcon} alt={'google-maps'} />,
  <img width={50} src={JiraIcon} alt={'jira'} />,
  <img width={50} src={JenkinIcon} alt={'jenkins'} />,
  <img width={50} src={GithubIcon} alt={'github'} />,
  <img width={50} src={NodejsIcon} alt={'node'} />,
  <img width={50} src={PostgreSQLIcon} alt={'postgres'} />,
  <img width={90} src={JqueryIcon} alt={'jquery'} />,
  <img width={50} src={MuiIcon} alt={'material'} />,
  <img width={50} src={CssIcon} alt={'css'} />,
];
