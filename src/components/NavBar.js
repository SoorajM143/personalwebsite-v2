import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LinkedIn, GitHub, Email, MarkunreadTwoTone, RssFeedTwoTone } from '@mui/icons-material';

import '../styles/NavBar.css';

function NavBar() {
  const [sidemenu, setSideMenu] = useState(false);
  const [navTheme, setNavTheme] = useState('#88F3CC');

  const MenuOpen = (color) => {
    setSideMenu(!sidemenu);
    if (color) setNavTheme(color);
  };

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--background-color', navTheme);
  }, [navTheme]);

  return (
    <>
      <div
        className={sidemenu ? 'menu-icon active' : 'menu-icon'}
        onClick={() => MenuOpen()}
      >
        <span className="menu-icon__line menu-icon__line-left"></span>
        <span className="menu-icon__line"></span>
        <span className="menu-icon__line menu-icon__line-right"></span>
      </div>
      <div className={sidemenu ? 'nav open' : 'nav'}>
        <div className="nav__content">
          <ul class="social-links">
            <li>
              <a
                href="https://github.com/SoorajM143"
                rel="noopener noreferrer"
                target="_blank"
              >
                <GitHub />
              </a>
            </li>
            <li>
              <a
                href="mailto:soorajmohan7@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <MarkunreadTwoTone />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/soorajmohan92/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <LinkedIn />
              </a>
            </li>
          </ul>
          <ul className="nav__list">
            <li className='nav__list_desc'>
            <Link
              to="/"
              onClick={() => MenuOpen('#00d084')}
              className="nav--list-item"
            >
              Home
            </Link>
            <span id='desc_home' className='desc_link_item'>Back to the home page</span>
            </li>
            <li className='nav__list_desc'>
            <Link
              to="/about-me"
              onClick={() => MenuOpen('#9bdabe')}
              className="nav--list-item"
            >
              About
            </Link>
            <span id='desc_about' className='desc_link_item'>Something about me and my background</span>
            </li>
            <li className='nav__list_desc'>
            <Link
              to="/work"
              onClick={() => MenuOpen('#fcc5d3')}
              className="nav--list-item"
            >
              Works
            </Link>
            <span id='desc_work' className='desc_link_item'>History of my work</span>
            </li>
            <li className='nav__list_desc'>
            <Link
              to="/contact"
              onClick={() => MenuOpen('#ffdaa5')}
              className="nav--list-item"
            >
              Contact
            </Link>
            <span id='desc_contact' className='desc_link_item'>Want to work together ?</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
