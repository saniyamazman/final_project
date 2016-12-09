import React, { Component } from 'react'
import { auth } from './auth'
import { login } from './auth'
import bg from './nyc.jpg';
import './App';
import './LoginDashboard.css';
import 'materialize-css';
import './LogIn.css';
import { Link } from 'react-router';

export default class LogInDashboard extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    login(this.email.value, this.pw.value)
  }

  render () {
    return (
      <div>
      <div id = "thing">
      <div id = "about">
        Twip is an application that allows you to view all of the most recent geotagged tweets from
        any city of your choice!
        </div>
      </div>
            <div id="login">
                <h1>Log In</h1>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label>Email</label>
                    <input className="form-control" ref={(email) => this.email = email} placeholder="Email"/>
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
                  </div>
                  <div id="loginButton">
                  <button type="submit" className="btn btn-primary">Log In</button>
                  </div>
                  <div className="registerstuff">
									<Link className="tempButton" activeClassName='active' to="/register">Don't have an account? Register </Link>
								</div>
                <div className="tempButton">
                <Link className="tempButton" activeClassName='active' to="/search">Temp Button To Search</Link>
              </div>
                </form>
                </div>

</div>
    )
  }
}
