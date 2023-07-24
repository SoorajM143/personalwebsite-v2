import React, { useEffect } from 'react';
import MainPageHeader from './MainPageHeader';
import '../styles/MainPage.css';

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
      </div>
    </>
  );
}

export default Main;
