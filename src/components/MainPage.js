import React from 'react';
import { Route, Routes } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AboutMe from './AboutMe';
import ContactPage from './ContactPage';
import MyWork from './MyWork';
import { ArrowDown } from 'react-bootstrap-icons';
import Main from './Main';

gsap.registerPlugin(ScrollTrigger);

function MainPage() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/about-me" element={<AboutMe />} />
      <Route exact path="/work" component={<MyWork />} />
      <Route exact path="/contact" component={<ContactPage />} />
    </Routes>
  );
}

export default MainPage;
