import React from 'react';
import '../Apploader.css';

function PreLoader(props) {
  return (
    <div className={props.load ? 'mainPagebg' : 'mainPg-none'}>
      <div className="wrap">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <span className="text"> &nbsp; Loading....</span>
      </div>
    </div>
  );
}

export default PreLoader;
