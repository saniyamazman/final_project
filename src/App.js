import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { Link } from 'react-router';
import '../node_modules/font-awesome/css/font-awesome.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>TWIP</h2>
            <div className="link">
              <Link className="link" activeClassName='active' to="/mytrips">MY TRIPS</Link>

              <Link className= "logIn" activeClassName='active' to="/LogInDashboard"> TEST LOGIN TEMP LINK </Link>
            </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}


export default App;
