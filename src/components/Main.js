import React, { useEffect } from 'react';
import { Fade, Slide } from 'react-reveal';
import MainPageHeader from './MainPageHeader';
import '../styles/MainPage.css';
import Constant from './utils/Constant';
import '../styles/Main.css';


function Main() {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--background-color', '#88CDEC');
    document.title = 'Home - Sooraj';
  }, []);
  return (
    <>
      <div className="mainPage">
        <MainPageHeader />
        <div className='mainPage-content'>
        <Fade top delay={700}>
          <h2>{Constant.MAIN_PAGE_CONTENT_HEADRER}</h2>
          <span className="main_dot"></span>
          </Fade>
          <Slide right>
          <div className="main_underline"></div>
          </Slide>
          <div className='mainPage-message'>
            <span>{Constant.MAIN_PAGE_MESSAGE_1}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
