import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HeaderShared from './Shared/HeaderShared'
import TableTop from './Shared/tableTop';
class App extends Component {
  render() {
    return (
      <div className="App">
      <nav className="navbar navbar-light bg-light static-top">
      <div className="container">
        <a className="navbar-brand" href="#">BitUrl</a>
        <a className="btn btn-primary" href="#">Sign In</a>
      </div>
    </nav>
    <HeaderShared/>
    <br></br>
    <TableTop/>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
