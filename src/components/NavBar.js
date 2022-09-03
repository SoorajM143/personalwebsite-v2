import React from 'react';
import '../styles/NavBar.css';
import {
  FileEarmarkPersonFill,
  HouseFill,
  PcDisplayHorizontal,
  EnvelopeCheckFill,
  Stack,
  Github,
  Linkedin,
  EnvelopePaperFill,
} from 'react-bootstrap-icons';

function NavBar() {
  return (
    <div className="main_navBar">
      <aside className="navBar_items">
        <nav>
          <ul>
            <li>
              <div class="home-icon">
                <HouseFill />
              </div>
            </li>
            <li>
              <div class="about-icon">
                <FileEarmarkPersonFill />
              </div>
            </li>
            <li>
              <div class="work-icon">
                <PcDisplayHorizontal />
              </div>
            </li>
            <li>
              <div class="mail-icon">
                <EnvelopeCheckFill />
              </div>
            </li>
          </ul>
          <div className="social-media-icons">
            <Stack />
            <div className="social-media-list">
              <a
                href="https://github.com/SoorajM143"
                rel="noreferrer"
                target="_blank"
              >
                &nbsp;&nbsp;&nbsp;
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/soorajmohan92/"
                rel="noreferrer"
                target="_blank"
              >
                &nbsp;&nbsp;&nbsp;
                <Linkedin />
              </a>
              <a
                href="mailto:soorajmohan7@gmail.com"
                rel="noreferrer"
                target="_blank"
              >
                &nbsp;&nbsp;&nbsp;
                <EnvelopePaperFill />
              </a>
            </div>
          </div>
        </nav>
      </aside>
    </div>
  );
}

export default NavBar;
