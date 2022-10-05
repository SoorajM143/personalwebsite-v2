import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';

import '../styles/NavBar.css';

function NavBar() {
  const [sidemenu, setSideMenu] = useState(false);
  const [navTheme, setNavTheme] = useState('#aadcec');

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
                <Email />
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
            <Link
              to="/"
              onClick={() => MenuOpen('#aadcec')}
              className="nav--list-item"
            >
              Home
            </Link>
            <Link
              to="/about-me"
              onClick={() => MenuOpen('#9bdabe')}
              className="nav--list-item"
            >
              About
            </Link>
            <Link
              to="/work"
              onClick={() => MenuOpen('#fcc5d3')}
              className="nav--list-item"
            >
              Works
            </Link>
            <Link
              to="/contact"
              onClick={() => MenuOpen('#fedaa5')}
              className="nav--list-item"
            >
              Contact
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
