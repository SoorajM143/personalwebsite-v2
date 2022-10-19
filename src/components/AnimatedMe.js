import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Me from './Me';

function AnimatedMe() {
  useEffect(() => {
    const safeToAnimate = window.matchMedia(
      '(prefers-reduced-motion: no-preference)'
    ).matches;
    if (!safeToAnimate) return;

    const dom = {
      face: document.querySelector('.face'),
      eye: document.querySelectorAll('.eye'),
      innerFace: document.querySelector('.inner-face'),
      hairFront: document.querySelector('.hair-front'),
      hairBack: document.querySelector('.hair-back'),
      ear: document.querySelectorAll('.ear'),
      eyebrowLeft: document.querySelector('.eyebrow-left'),
      eyebrowRight: document.querySelector('.eyebrow-right'),
      leftShoulder: document.querySelector('.left-shoulder'),
      rightShoulder: document.querySelector('.right-shoulder'),
    };

    let xPosition;
    let yPosition;

    let storedXPosition;
    let storedYPosition;

    let mapWidth;
    let mapHeight;
    function setMaps() {
      mapWidth = gsap.utils.mapRange(0, window.innerWidth, -50, 50);
      mapHeight = gsap.utils.mapRange(0, window.innerHeight, -50, 50);
    }

    window.addEventListener('resize', setMaps);
    setMaps();
    function moveSVG() {
      // only recalculating if the value changes
      if (storedXPosition === xPosition && storedYPosition === yPosition)
        return;
      let x = xPosition;
      let y = yPosition;

      gsap.to(dom.face, {
        yPercent: y / 30,
        xPercent: x / 30,
      });
      gsap.to(dom.eye, {
        yPercent: y / 3,
        xPercent: x / 2,
      });
      gsap.to(dom.innerFace, {
        yPercent: y / 6,
        xPercent: x / 6,
      });
      gsap.to(dom.hairFront, {
        yPercent: y / 15,
        xPercent: x / 22,
      });
      gsap.to(dom.hairBack, {
        yPercent: (y / 20) * -1,
        xPercent: (x / 20) * -1,
      });
      gsap.to(dom.ear, {
        yPercent: (y / 1.5) * -1,
        xPercent: (x / 10) * -1,
      });
      gsap.to([dom.eyebrowLeft, dom.eyebrowRight], {
        yPercent: y * 2.5,
      });

      gsap.to([dom.leftShoulder, dom.rightShoulder], {});

      // update the stored positions with the current positions
      storedXPosition = xPosition;
      storedYPosition = yPosition;
    }

    function updateMouseCoords(event) {
      xPosition = mapWidth(event.clientX);
      yPosition = mapWidth(event.clientY);
    }

    window.addEventListener('mousemove', updateMouseCoords);
    gsap.ticker.add(moveSVG);

    return () => {
      window.removeEventListener('mousemove', updateMouseCoords);
    };
  }, []);

  return (
    <div>
      <Me />
    </div>
  );
}

export default AnimatedMe;
