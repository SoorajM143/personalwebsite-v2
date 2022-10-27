import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/AboutMe.css';
import { Fade, Slide } from 'react-reveal';
import Sphere from './Sphere';
import Constants from './utils/Constant';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

function AboutMe() {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--background-color', '#9bdabe');
  }, []);

  return (
    <>
      <div className="about_me_page">
        <div className="about_me_main">
          <div className="about_me_content">
            <Fade top delay={700}>
              <h1>{Constants.ABOUT_ME_HEADER}</h1>
              <span className="about_dot"></span>
            </Fade>
            <Slide right>
              <div className="about_underline"></div>
            </Slide>
            <Fade bottom delay={1000}>
              <div className="about_content">
                <h3>
                  {Constants.ABOUT_ME_SUBHEADER_1}
                  <strong>{Constants.ABOUT_ME_SUBHEADER_2}</strong>
                  {Constants.ABOUT_ME_SUBHEADER_3}
                  <strong>{Constants.ABOUT_ME_SUBHEADER_4}</strong>
                  {Constants.ABOUT_ME_SUBHEADER_5}
                </h3>
              </div>
            </Fade>
          </div>
          <div className="scroll-animation">
            <span>Scroll Down</span>
            <div className="vertical_line"></div>
          </div>
        </div>
        <div className="about_me_panels">
          <Fade delay={300}>
            <div className="about_me_para_1">
              {Constants.ABOUT_ME_WORK_PARA_1}{' '}
              <strong>{Constants.ABOUT_ME_WORK_PARA_2}</strong>
              {Constants.ABOUT_ME_WORK_PARA_3}
              <strong>{Constants.ABOUT_ME_WORK_PARA_4}</strong>
              {Constants.ABOUT_ME_WORK_PARA_5}
              <strong>{Constants.ABOUT_ME_WORK_PARA_6}</strong>
              {Constants.ABOUT_ME_WORK_PARA_8}
              <Link to="/work">
                <strong>{Constants.ABOUT_ME_WORK_PARA_9}</strong>
              </Link>
              {Constants.ABOUT_ME_WORK_PARA_10}
              <br />
              <span>{Constants.ABOUT_ME_WORK_PARA_7}</span>
            </div>
          </Fade>
          <div className="skill_sphere">
            <Sphere />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
