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
      main: '#F67796',
      darker: '#F67796',
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
  <img id= 'ts' width={50} src={TsIcon} alt={'typescript'} />,
  <img id='sass' width={50} src={SassIcon} alt={'Sass'} />,
  <img id='ai' width={50} src={IllustratorIcon} alt={'adobe-illustrator'} />,
  <img id='html' width={50} src={HtmlIcon} alt={'html'} />,
  <img id='js' width={50} src={JsIcon} alt={'js'} />,
  <img id='ps' width={50} src={PhotoshopIcon} alt={'adobe-photoshop'} />,
  <img id='react' width={50} src={ReactIcon} alt={'React'} />,
  <img id='maps' width={50} src={GoogleMapsIcon} alt={'google-maps'} />,
  <img id='jira' width={50} src={JiraIcon} alt={'jira'} />,
  <img id='jenkins' width={50} src={JenkinIcon} alt={'jenkins'} />,
  <img id='git' width={50} src={GithubIcon} alt={'github'} />,
  <img id='node' width={50} src={NodejsIcon} alt={'node'} />,
  <img id='post' width={50} src={PostgreSQLIcon} alt={'postgres'} />,
  <img id='jquery' width={90} src={JqueryIcon} alt={'jquery'} />,
  <img id='mui' width={50} src={MuiIcon} alt={'material'} />,
  <img id='css' width={50} src={CssIcon} alt={'css'} />,
];
