import logo from './holberton-logo.jpg';
import React from 'react';
import { getFullYear, getFooterCopy } from './utils';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} alt="Holberton logo" />
        <h1>School dashboard</h1>
      </div>
      <div class="horizontal-line"></div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <br />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <button>OK</button>
      </div>
      <div className="App-footer">
        <div class="horizontal-line"></div>
        <p>
          <em>
            Copyright {getFullYear()} - {getFooterCopy()}
          </em>
        </p>
      </div>
    </div>
  );
};

export default App;
