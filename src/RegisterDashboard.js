import React, { Component } from 'react'
import { auth } from './auth'
import { login } from './auth'
import bg from './nyc.jpg';
import './App';
import './LoginDashboard.css';
import 'materialize-css';
import './LogIn.css';


export default class LogInDashboard extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    auth(this.email.value, this.pw.value, this.username.value)

  }

    render () {
      return (
        <div id="page">
          <div id="register">
          <h1>Register</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input className="form-control" ref={(email) => this.email = email} placeholder="Email"/>
            </div>
            <div className="form-group">
              <label>Twitter Username</label>
              <input className="form-control" ref={(username) => this.username = username} placeholder="Twitter Username"/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
            </div>
            <div id="registerbutton">
            <button type="submit"   className="btn btn-primary">  Register  </button> 
            </div>
          </form>
        </div>
        </div>
      )
}
}
