import React, { useState } from 'react';
import '../styles/NavBar.css';

function NavBar() {
  const [sidemenu, setSideMenu] = useState(false);

  const MenuOpen = () => {
    setSideMenu(!sidemenu);
  };
  return (
    <>
      <div
        className={sidemenu ? 'button_container active' : 'button_container'}
        onClick={MenuOpen}
        id="toggle"
      >
        <span className="top"></span>
        <span className="middle"></span>
        <span className="bottom"></span>
      </div>
      <div className={sidemenu ? 'overlay open' : 'overlay'} id="overlay">
        <nav className="overlay-menu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about-me">About</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
