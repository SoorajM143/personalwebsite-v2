import React, { useEffect } from 'react';
import { Fade, Slide } from 'react-reveal';
import { Button, ThemeProvider } from '@mui/material';
import { theme } from './utils/util';
import '../styles/MyWork.css';
import Constants from './utils/Constant';
import QatarTops from '../images/Qatar-tops.PNG';
import Infa from '../images/infa.PNG';
import Walmart from '../images/Walmart-mexico.PNG'
import Portfolio from '../images/portfolio.PNG';
import Mood from '../images/Mood.PNG';
import Spotify from '../images/spotify.PNG';

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
        <Fade bottom delay={1000}>
        <div className='works-subheader'>
          <h3>
            {Constants.WORK_SUBHEADER_1}
            <strong>{Constants.WORK_SUBHEADER_2}</strong>
            {Constants.WORK_SUBHEADER_3}
            {Constants.WORK_SUBHEADER_4}
            <strong>{Constants.WORK_SUBHEADER_5}</strong>
          </h3>
        </div>
        </Fade>
      </div>
      <div className="scroll-animation-work">
            <span>Scroll Down</span>
            <div className="vertical_line-work"></div>
      </div>
      <div className='all-works-header'>
      <Fade top delay={300}>
        <h2>{Constants.WORK_FEATURED}</h2>
        </Fade>
        <Slide right delay={200}>
        <div className='all-work-underline'></div>
        <span className='all-work-dot'></span>
        </Slide>
      </div>
          <div className='all-works'>
            <div className='work-left'>
            <Fade left delay={800}>
              <div className='work-left-img'>
                <img id='qatar' src={QatarTops} alt='qatar-tops'/>
              </div>
              </Fade>
              <Fade delay={200}>
              <div className='work-left-detail'>
                <h4>{Constants.WORK_DETAIL_1}</h4>
                <span className='work-detail-dot'></span>
                <h5>{Constants.WORK_SUBDETAIL_1}</h5>
                
                <p>{Constants.WORK_DETAIL_2}</p>
                <ul className='work-tech'>
                  <li>{Constants.WORK_TECH_MAP}</li>
                 <li>{Constants.WORK_TECH_JS}</li>
                 <li>{Constants.WORK_TECH_OL}</li>
                 <li>{Constants.WORK_TECH_PG}</li>
                </ul>
                <ThemeProvider theme={theme}>
                  <Button href='https://www.qatarairways.com/en-gr/press-releases/2016/May/pressrelease_fleetmanagementsystem.html' rel='noreferrer' target='_blank' color="primary" variant="outlined">
                    Visit {'→'}
                  </Button>
                </ThemeProvider>
              </div>
              </Fade>
            </div>
            <div className='work-left reverse'>
              <Fade right delay={800}>
            <div className='work-left-img'>
                <img id='infa' src={Infa} alt='infa'/>
              </div>
              </Fade>
              <Fade delay={200}>
            <div className='work-left-detail'>
              <h4>{Constants.WORK_DETAIL_3}</h4>
              <span className='work-detail-dot-infa'></span>
              <h5>{Constants.WORK_SUBDETAIL_2}</h5>
              <p>{Constants.WORK_DETAIL_4}</p>
              <ul className='work-tech'>
                  <li>{Constants.WORK_TECH_REACT}</li>
                 <li>{Constants.WORK_TECH_TS}</li>
                 <li>{Constants.WORK_TECH_JAVA}</li>
                </ul>
              <ThemeProvider theme={theme}>
                  <Button href='https://www.informatica.com/products/data-governance/cloud-data-marketplace.html' rel='noreferrer' target='_blank' color="primary" variant="outlined">
                    Visit {'→'}
                  </Button>
                </ThemeProvider>
            </div>
            </Fade>
            </div>
            <div className='work-left'>
            <Fade left delay={800}>
              <div className='work-left-img'>
              <img id='walmart' src={Walmart} alt='walmart'/>
              </div>
              </Fade>
              <Fade delay={200}>
            <div className='work-left-detail'>
              <h4>{Constants.WORK_DETAIL_5}</h4>
              <span className='work-detail-dot-walmart'></span>
              <h5>{Constants.WORK_SUBDETAIL_3}</h5>
              <p>{Constants.WORK_DETAIL_6}</p>
              <ul className='work-tech'>
                  <li>{Constants.WORK_TECH_REACT}</li>
                 <li>{Constants.WORK_TECH_JAVA}</li>
                </ul>
              <ThemeProvider theme={theme}>
                  <Button href='https://super.walmart.com.mx/' rel='noreferrer' target='_blank' color="primary" variant="outlined">
                    Visit {'→'}
                  </Button>
                </ThemeProvider>
            </div>
            </Fade>
            </div>
          </div>
          <div className='other-works-header'>
          <Fade top delay={300}>
        <h2>{Constants.WORK_OTHER}</h2>
        </Fade>
        <Slide right delay={200}>
        <div className='all-work-underline'></div>
        <span className='other-work-dot'></span>
        </Slide>
          </div>
          <div className='other-works'>
        <div className='work-left'>
        <Fade left delay={800}>
              <div className='work-left-img'>
              <img id='portfolio' src={Portfolio} alt='portfolio'/>
              </div>
              </Fade>
              <Fade delay={200}>
            <div className='work-left-detail'>
              <h4>{Constants.WORK_OTHER_1}</h4>
              <span className='work-other-dot'></span>
              <p>{Constants.WORK_OTHER_DETAIL_1}</p>
              <ul className='work-tech'>
                  <li>{Constants.WORK_TECH_REACT}</li>
                </ul>
              <ThemeProvider theme={theme}>
                  <Button href='https://www.soorajmohan.com/' rel='noreferrer' target='_blank' color="primary" variant="outlined">
                    Visit {'→'}
                  </Button>
                </ThemeProvider>
            </div>
            </Fade>
        </div>
        <div className='work-left reverse'>
        <Fade left delay={800}>
              <div className='work-left-img'>
              <img id='mood' src={Mood} alt='mood'/>
              </div>
              </Fade>
              <Fade delay={200}>
            <div className='work-left-detail'>
              <h4>{Constants.WORK_OTHER_1}</h4>
              <span className='work-other-dot'></span>
              <p>{Constants.WORK_OTHER_DETAIL_1}</p>
              <ul className='work-tech'>
                  <li>{Constants.WORK_TECH_REACT}</li>
                </ul>
              <ThemeProvider theme={theme}>
                  <Button href='https://www.soorajmohan.com/' rel='noreferrer' target='_blank' color="primary" variant="outlined">
                    Visit {'→'}
                  </Button>
                </ThemeProvider>
            </div>
            </Fade>
        </div>

        <div className='work-left'>
        <Fade left delay={800}>
              <div className='work-left-img'>
              <img id='spotify' src={Spotify} alt='spotify'/>
              </div>
              </Fade>
              <Fade delay={200}>
            <div className='work-left-detail'>
              <h4>{Constants.WORK_OTHER_1}</h4>
              <span className='work-other-dot'></span>
              <p>{Constants.WORK_OTHER_DETAIL_1}</p>
              <ul className='work-tech'>
                  <li>{Constants.WORK_TECH_REACT}</li>
                </ul>
              <ThemeProvider theme={theme}>
                  <Button href='https://www.soorajmohan.com/' rel='noreferrer' target='_blank' color="primary" variant="outlined">
                    Visit {'→'}
                  </Button>
                </ThemeProvider>
            </div>
            </Fade>
        </div>
        </div>
    </section>
  );
}

export default MyWork;
