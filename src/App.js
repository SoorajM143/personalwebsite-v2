import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes, HashRouter} from 'react-router-dom';
import Menu from './components/Menu';
import './Apploader.css';
import MyWork from './components/MyWork';
import Main from './components/Main';
import AboutMe from './components/AboutMe';
import ContactPage from './components/ContactPage';
import PreLoader from './components/PreLoader';
import Contact from './components/Contact';
import ScrollToTop from './ScrollToTop';

function App() {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setisLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  
  return (
    <>
      <HashRouter>
        <PreLoader load={isLoading} />
        <ScrollToTop />
        <div className= {isLoading ? "app-none" : "App"}>
          <div className="page-wrap">
            <Menu />
            <Contact />
            <Routes>
              <Route exact path="/" element={<Main />}/>
              <Route exact path="/about-me" element={<AboutMe />} />
              <Route exact path="/work" element={<MyWork />} />
              <Route exact path="/contact" element={<ContactPage />} />
            </Routes>
            <small className="footer">© MMXXII - Built by Sooraj Mohan</small>
          </div>
        </div>
      </HashRouter>
    </>
  );
}

export default App;
