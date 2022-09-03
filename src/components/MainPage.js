import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/MainPage.css';
import AboutMe from './AboutMe';
import ContactPage from './ContactPage';
import MainPageHeader from './MainPageHeader';
import MyWork from './MyWork';
import Contact from './Contact';
import { ArrowDown } from 'react-bootstrap-icons';

gsap.registerPlugin(ScrollTrigger);

function MainPage() {
  return (
    <div className="mainPage">
      <span className="tags tag_top">{`<html>`}</span>
      <br />
      <MainPageHeader />
      <Contact />
      <div className="scroll-down">
        <span>Scroll Down</span>
        <ArrowDown />
      </div>
      <AboutMe />
      <MyWork />
      <ContactPage />
    </div>
  );
}

export default MainPage;
