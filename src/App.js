import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import './Apploader.css';
import MyWork from './components/MyWork';
import Main from './components/Main';
import AboutMe from './components/AboutMe';
import ContactPage from './components/ContactPage';
import PreLoader from './components/PreLoader';

function App() {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setisLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <PreLoader load={isLoading} />
      <div className="App">
        <div className="page-wrap">
          <Menu />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/about-me" element={<AboutMe />} />
            <Route exact path="/work" component={<MyWork />} />
            <Route exact path="/contact" component={<ContactPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
