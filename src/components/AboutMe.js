import React from 'react';
import TagCloud from 'TagCloud';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/AboutMe.css';
import { textAnimate } from './utils/util';
import { Fade, Slide } from 'react-reveal';
import Sphere from './Sphere';

gsap.registerPlugin(ScrollTrigger);

function AboutMe() {
  const aboutMeheader = 'About Me';
  const aboutMeContent1 =
    "I'm a Front-End Engineer working for Informatica on their cloud product in Dublin,Ireland";
  const aboutMeContent2 =
    "For the past 4 years, I have been working on complex products for Clients such Qatar Airwars and easyJet.In my current role ,I'm working on the cloud Data Marketplace for Informatica's Axon product";
  const aboutMeContent3 =
    'These days most of my time is spent on research,coding,learning new tech on LinkedIn/Youtube and designing on Illustrator. I care deeply about creating a seemless user experience. Passionate about UI design and learning new technologies.';
  const aboutMeContent4 =
    'Out of Office, you ll find me playing guitar, petting all the good dogs and exploring new cuisines. ';
  return (
    <>
      <section className="about_me_page" id="about_me_section">
        <div className="about_me_main">
          <div className="about_me_content">
            <Fade top>
              <h1>{textAnimate(aboutMeheader)}</h1>
            </Fade>
            <Slide left>
              <div className="about_underline"></div>
            </Slide>
            <Fade bottom>
              <div className="about_content">
                <h3>{aboutMeContent1}</h3>
                <p>{aboutMeContent2}</p>
                <p>{aboutMeContent3}</p>
                <p>{aboutMeContent4}</p>
              </div>
            </Fade>
          </div>
          <Sphere />
        </div>
      </section>
    </>
  );
}

export default AboutMe;
