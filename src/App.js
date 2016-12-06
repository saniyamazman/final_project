import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { Link } from 'react-router';
import '../node_modules/font-awesome/css/font-awesome.css'
import 'materialize-css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <div className="nav-wrapper">
            <Link activeClassName='active' to="/home"><img src={logo} className="App-logo" alt="logo" /></Link>
            <Link className="h2"activeClassName='active' to="/home"><h2>TWIP</h2></Link>
            <Link className="link" activeClassName='active' to="/trips">LOG IN</Link>
            <Link className = "link" activeClassName='active' to="/register"> REGISTER </Link>
            <Link className="link" activeClassName='active' to="/map">MAP DEMO</Link>
            <Link className="link" activeClassName='active' to="/userinfo">USER INFO</Link>
          </div>
        </nav>
        {this.props.children}

      </div>
    );
  }
}


export default App;
