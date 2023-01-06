import React, { useEffect } from 'react';
import { Fade, Slide } from 'react-reveal';
import '../styles/MyWork.css';
import Constants from './utils/Constant';

function MyWork() {

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--background-color', '#fcc5d3');
    document.title = 'Works - Sooraj';
  }, []);

  return (
    <section className="panel my-work ">
      <div className="my-works">
        <Fade top delay={300}>
          <h1>{Constants.WORK_HEADER}</h1>
        </Fade>
        <Slide right delay={200}>
        <div className="work_underline"></div>
        <span className="work_dot"></span>
        </Slide>

        <div className='works-subheader'>
          <h3>
            {Constants.WORK_SUBHEADER_1}
            <strong>{Constants.WORK_SUBHEADER_2}</strong>
            {Constants.WORK_SUBHEADER_3}
            {Constants.WORK_SUBHEADER_4}
            <strong>{Constants.WORK_SUBHEADER_5}</strong>
          </h3>
        </div>
      </div>
      <div className="scroll-animation-work">
            <span>Scroll Down</span>
            <div className="vertical_line-work"></div>
          </div>
    </section>
  );
}

export default MyWork;
