import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <React.Fragment>
      <div className="App">
        <div className="horizontal-line"></div>
        <div className="App-body">
          <p>Login to access the full dashboard</p>
          <br />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
          <button type="button">OK</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
