import React from 'react';
import './App.css';
import './UserInfo.css';
import $ from 'jquery';
import {ref, config, firebaseAuth} from './config.js';
import {logout} from './auth.js';

var UserCard = React.createClass({  
    render() {
        return(
            <div className="userCard">
                <img src={this.props.data.profile_image_url} className="profileimage" alt="user's avatar"/>
                <div className="name">{this.props.data.name}</div>
                <div className="screenname">@{this.props.data.screen_name}</div>
                <div className="location">Current Location: {this.props.data.location}</div>
            </div>
        );
    }
});


var UserInfo = React.createClass({
    
    getInitialState() {
        return ({
            userInfo: {}
        })
    },
    
    componentDidMount() {
        var screenname = 'uw_ischool';
        var url = 'https://faculty.washington.edu/joelross/proxy/twitter/timeline/?screen_name=' + screenname + '&count=1';
        $.get(url).then(function(data) {
            this.setState({
               userInfo: data[0].user
            });
        }.bind(this));
    },
    
    handleSubmit(e) {
        e.preventDefault();
        logout();
    },
    
    render() {
        return (
          <div className="userInfo">
                <h1>User Information</h1>
                <h3>You are currently logged in as...</h3>
                <UserCard data={this.state.userInfo}/>
                <button type="submit" className="btn btn-primary">Log Out</button>
          </div>
        );
    }
});



export default UserInfo;