import React, { useEffect } from 'react';
import { Fade, Slide } from 'react-reveal';
import { textAnimate } from './utils/util';
import '../styles/MyWork.css';
function MyWork() {
  const myworkHeader = 'Works';

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--background-color', '#fcc5d3');
  }, []);

  return (
    <section className="panel my-work ">
      <div className="my-works">
        <Fade top>
          <h1>{textAnimate(myworkHeader)}</h1>
        </Fade>
        <Slide right>
          <div className="mywork_underline"></div>
        </Slide>
      </div>
    </section>
  );
}

export default MyWork;
