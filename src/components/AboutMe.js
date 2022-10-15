import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/AboutMe.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Fade, Slide, Flip } from 'react-reveal';
import Sphere from './Sphere';

gsap.registerPlugin(ScrollTrigger);

function AboutMe() {
  const aboutMeheader = 'About Me';
  const aboutMeContent1 = "I'm a ";
  const boldText = 'web developer ';
  const boldText1 = 'designer ';
  const aboutMePara = 'and ';
  const aboutMePara1 =
    'who has been building things that live on the web since 2015. I specialise in accessibility, performance and usability without sacrificing creativity.';
  const aboutMeContent2 =
    'For the past 4 years, I have been working on complex products for Clients such as ';
  const boldText2 = 'Qatar Airwars ';
  const boldtext3 = 'easyJet.';
  const boldText4 = "Informatica's Axon product";
  const aboutMePara2 =
    " In my current role ,I'm working on the cloud Data Marketplace for ";
  const aboutMeContent3 =
    'These days most of my time is spent on research,coding,learning new tech on LinkedIn/Youtube and designing on Illustrator. I care deeply about creating a seemless user experience. Passionate about UI design and learning new technologies.';
  const aboutMeContent4 =
    'Out of Office, you ll find me playing guitar, petting all the good dogs and exploring new cuisines. ';
  const aboutSubHeader = 'A Brief History';

  return (
    <>
      <div className="about_me_page">
        <div className="about_me_main">
          <div className="about_me_content">
            <Fade top delay={700}>
              <h1>{aboutMeheader}</h1>
              <span className="about_dot"></span>
            </Fade>
            <Slide right>
              <div className="about_underline"></div>
            </Slide>
            <Fade bottom delay={1000}>
              <div className="about_content">
                <h3>
                  {aboutMeContent1}
                  <strong>{boldText}</strong>
                  {aboutMePara}
                  <strong>{boldText1}</strong>
                  {aboutMePara1}
                </h3>
              </div>
            </Fade>
          </div>
          <div className="scroll-animation">
            <ArrowDownwardIcon />
          </div>
        </div>
        <div className="about_me_panels">
          <Fade top>
            <div className="about_me_para">
              {aboutMeContent2} <strong>{boldText2}</strong>
              {aboutMePara}
              <strong>{boldtext3}</strong>
              {aboutMePara2}
              <strong>{boldText4}</strong>
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
