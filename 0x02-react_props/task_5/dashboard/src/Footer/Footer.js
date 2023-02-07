import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css';

const Footer = () => {
  return (
    <div className="App">
      <div className="App-footer">
        <div className="horizontal-lines"></div>
        <p>
          <em>
            Copyright {getFullYear()} - {getFooterCopy()}
          </em>
        </p>
      </div>
    </div>
  );
};

export default Footer;
