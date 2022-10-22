import React from 'react';
import '../styles/MainPageHeader.css';
import { Fade, Bounce } from 'react-reveal';
import AnimatedMe from './AnimatedMe';
import Constants from './utils/Constant';

function MainPageHeader() {
  return (
    <>
      <div className="main-page-section">
        <div className="headerText">
          <Fade delay={200}>
            <h1>
              {Constants.MAIN_PAGE_HEADER_TEXT_1}
              <br />
              {Constants.MAIN_PAGE_HEADER_TEXT_2}
              <strong>{Constants.MAIN_PAGE_HEADER_TEXT_3}</strong>
            </h1>
          </Fade>
          <Fade top delay={800}>
            <p>
              {Constants.MAIN_PAGE_HEADER_TEXT_4}
              <strong>{Constants.MAIN_PAGE_HEADER_TEXT_5}</strong>
              {Constants.MAIN_PAGE_HEADER_TEXT_6}
              <b>{Constants.MAIN_PAGE_HEADER_TEXT_7}</b>
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
