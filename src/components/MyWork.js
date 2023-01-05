import React, { useEffect } from 'react';
import { Fade, Slide } from 'react-reveal';
import '../styles/MyWork.css';
function MyWork() {
  const myworkHeader = 'Works';
  document.title = 'My works - Sooraj';

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--background-color', '#fcc5d3');
  }, []);

  return (
    <section className="panel my-work ">
      <div className="my-works">
        <Fade top delay={500}>
          <h1>{myworkHeader}</h1>
          <span className="work_dot"></span>
        </Fade>
        <Slide right>
        <div className="work_underline"></div>
        </Slide>
      </div>
    </section>
  );
}

export default MyWork;
