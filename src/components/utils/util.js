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
      main: '#ff5708',
      darker: '#ff5708',
    },
    neutral: {
      main: '#ff5708',
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
    featureType: 'landscape.man_made',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f7f1df',
      },
    ],
  },
  {
    featureType: 'landscape.natural',
    elementType: 'geometry',
    stylers: [
      {
        color: '#d0e3b4',
      },
    ],
  },
  {
    featureType: 'landscape.natural.terrain',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.business',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.medical',
    elementType: 'geometry',
    stylers: [
      {
        color: '#fbd3da',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#bde6ab',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#ff5708',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#efd151',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: 'black',
      },
    ],
  },
  {
    featureType: 'transit.station.airport',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#cfb2db',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#a2daf2',
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
