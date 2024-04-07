import React from 'react';
import './Login.css';

function Login() {
  return (
    <React.Fragment>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <div className="form">
          <label htmlFor="email">Email: </label>
          <input type="text" id="email" />
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" />
          <button type="submit">OK</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;