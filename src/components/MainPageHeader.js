import React from 'react';
import '../styles/MainPageHeader.css';
import { Fade, Bounce } from 'react-reveal';
import Contact from './Contact';
import AnimatedMe from './AnimatedMe';

function MainPageHeader() {
  let headerText = 'Hello,';
  let headerText1 = "I'm ";
  let name = 'Sooraj';
  let headerText2 = "I'm a ";
  let role = 'Web Developer ';
  let headerText3 = 'currently based in ';
  let place = 'Dublin, Ireland';
  return (
    <>
      <div className="main-page-section">
        <div className="headerText">
          <Fade delay={200}>
            <h1>
              {headerText}
              <br />
              {headerText1}
              <strong>{name}</strong>
            </h1>
          </Fade>
          <Fade top delay={800}>
            <p>
              {headerText2} <strong>{role}</strong>
              {headerText3}
              <b>{place}</b>
            </p>
          </Fade>
        </div>
        <Bounce right delay={1000}>
          <div className="avatar">
            <AnimatedMe />
          </div>
        </Bounce>
      </div>
      <div className="scroll-animation-main">
        <span>Scroll Down</span>
        <div className="vertical_line-main"></div>
      </div>
    </>
  );
}

export default MainPageHeader;
