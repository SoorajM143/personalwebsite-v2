import React from 'react';
import '../styles/MainPageHeader.css';
import { Fade } from 'react-reveal';
import Contact from './Contact';

function MainPageHeader() {
  let headerText = 'Hello,';
  let headerText1 = 'I am Sooraj';
  let headerText2 = 'A Web Developer';
  return (
    <Fade bottom>
      <div className="headerText">
        <h1>
          {headerText.split(/(\s+)/).map((letter) => {
            return letter !== ' '
              ? letter.split('').map((lete, i) => {
                  return (
                    <span key={i} className="a">
                      {lete}
                    </span>
                  );
                })
              : ' ';
          })}
          <br />
          {headerText1.split(/(\s+)/).map((letter) => {
            return letter !== ' '
              ? letter.split('').map((lete, i) => {
                  return (
                    <span key={i} className="a">
                      {lete}
                    </span>
                  );
                })
              : ' ';
          })}
          <br />
          {headerText2.split(/(\s+)/).map((letter) => {
            return letter !== ' '
              ? letter.split('').map((lete, i) => {
                  return (
                    <span key={i} className="a">
                      {lete}
                    </span>
                  );
                })
              : ' ';
          })}
        </h1>
      </div>
    </Fade>
  );
}

export default MainPageHeader;
