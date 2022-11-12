import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/AboutMe.css';
import { Fade, Slide } from 'react-reveal';
import Sphere from './Sphere';
import Constants from './utils/Constant';
import { Link } from 'react-router-dom';
import GestureIcon from '@mui/icons-material/Gesture';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
import Kochi from '../images/Kochi.png';
import Dublin from '../images/Dublin.png';
import Balloon from '../images/Balloon.png';
import Walmart from '../images/Walmart.png';
import Qatar from '../images/Qatar.png';
import Informatica from '../images/Informatica.png';
import Wipro from '../images/Wipro.png';

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

        <div className="about_me_history">
          <Fade delay={100}>
            <div className="about_me_para3">
              <span>
                {Constants.ABOUT_ME_HISTORY_PARA_1}
                <strong>{Constants.ABOUT_ME_HISTORY_PARA_2}</strong>
                {Constants.ABOUT_ME_HISTORY_PARA_3}
              </span>
              <span>
                {Constants.ABOUT_ME_HISTORY_PARA_4}
                <strong>{Constants.ABOUT_ME_HISTORY_PARA_5}</strong>
                {Constants.ABOUT_ME_HISTORY_PARA_6}
              </span>
            </div>
          </Fade>
          <div className="cityscapes">
            <Fade right delay={1500}>
              <img
                className="cityscape_kochi"
                width={300}
                src={Kochi}
                alt="Kochi"
              />
            </Fade>
            <Fade right delay={2500}>
              <img
                className="cityscape_dublin"
                width={350}
                src={Dublin}
                alt="dublin"
              />
            </Fade>
            <Fade top delay={2000}>
              <img
                className="cityscape_balloon"
                width={40}
                src={Balloon}
                alt="balloon"
              />
            </Fade>
          </div>
        </div>

        <div className="about_me_skills">
          <div className="skill_sphere">
            <Sphere />
            <GestureIcon />
            <PanToolAltIcon />
            <span className="sphere_info">Interact with sphere</span>
          </div>
          <Fade delay={300}>
            <div className="about_me_para2">
              <span>
                {Constants.ABOUT_ME_SKILL_PARA_1}
                <strong>{Constants.ABOUT_ME_SKILL_PARA_3}</strong>
                {Constants.ABOUT_ME_SKILL_PARA_4}
              </span>
              <span>{Constants.ABOUT_ME_SKILL_PARA_2}</span>
            </div>
          </Fade>
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
          <Fade right cascade delay={1500}>
            <div className="container-about">
              <div className="card-about">
                <img className="wipro-icon" alt="wipro-icon" src={Wipro} />
              </div>
              <div className="card-about">
                <img
                  className="walmart-icon"
                  src={Walmart}
                  alt="Walmart-icon"
                />
              </div>
              <div className="card-about">
                <img className="qatar-icon" src={Qatar} alt="Qatar-icon" />
              </div>
              <div className="card-about">
                <img className="infa-icon" src={Informatica} alt="infa-icon " />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
