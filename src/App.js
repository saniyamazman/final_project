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
          <div class="nav-wrapper">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>TWIP</h2>
            <Link className="link" activeClassName='active' to="/trips">MY TRIPS</Link>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}


export default App;
