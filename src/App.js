import React, { useEffect, useState } from 'react';
import './App.css';
import MainPage from './components/MainPage';
import Menu from './components/Menu';
import './Apploader.css';

function App() {
  const [IsLoading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 2000);
  }, []);

  return (
    <React.Fragment>
      <div className="App">
        {IsLoading ? (
          <>
            <div className="mainPagebg">
              <div class="wrap">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="shadow"></div>
                <div class="shadow"></div>
                <div class="shadow"></div>
                <span class="text"> &nbsp; Testing your patience....</span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="page-wrap">
              <Menu />
              <MainPage />
            </div>
          </>
        )}
      </div>
    </React.Fragment>
  );
}

export default App;
