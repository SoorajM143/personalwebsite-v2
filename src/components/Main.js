import React, { useEffect } from "react";
import { Fade, Slide } from "react-reveal";
import { SendRounded, DoubleArrowRounded } from "@mui/icons-material";
import MainPageHeader from "./MainPageHeader";
import "../styles/MainPage.css";
import Constant from "./utils/Constant";
import "../styles/Main.css";
import { Link } from "react-router-dom";

function Main() {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--background-color", "#88CDEC");
    document.title = "Home - Sooraj";
  }, []);
  
  return (
    <>
      <div className="mainPage">
        <MainPageHeader />
        <div className="mainPage-content">
          <Fade top delay={700}>
            <h2>{Constant.MAIN_PAGE_CONTENT_HEADRER}</h2>
            <span className="main_dot"></span>
          </Fade>
          <Slide right>
            <div className="main_underline"></div>
          </Slide>
          <Fade top dealy={1500}>
            <div className="mainPage-message">
              <span>{Constant.MAIN_PAGE_MESSAGE_2}</span>
              <SendRounded />
              <Link to="/contact">
                <button className="button-52" role="button">
                  Say Hi
                </button>
              </Link>
            </div>
          </Fade>
          <div className="more_links">
            <div>More Links</div>
            <span className="more_links_dot"></span>
          </div>
          <div className="home-page-button">
            <Link to="/about-me">
              <button className="button-52" role="button">
                About Me
              </button>
            </Link>
            <DoubleArrowRounded />
            <Link to="/work">
              <button className="button-52" role="button">
                Some of my works
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
