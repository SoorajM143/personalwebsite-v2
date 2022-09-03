import React, { useEffect, useState } from 'react';
import './App.css';
import MainPage from './components/MainPage';
import Menu from './components/Menu';
import './Apploader.css';
import AnimatedCursor from 'react-animated-cursor';

function App() {
  const [IsLoading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 3000);
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
            <AnimatedCursor
              innerSize={9}
              outerSize={8}
              color="251, 211, 60"
              outerAlpha={0.2}
              innerScale={2}
              outerScale={5}
              clickables={[
                'a',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link',
              ]}
            />
            <Menu />
            <MainPage />
          </>
        )}
      </div>
    </React.Fragment>
  );
}

export default App;
