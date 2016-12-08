import React from 'react';
import './App.css';
import './UserInfo.css';
import $ from 'jquery';
import axios from 'axios';

// Public user information page

var UserCard = React.createClass({  
    render() {
        return(
            <div className="userCard">
                <img src={this.props.data.profile_image_url} />
                <div className="name">{this.props.data.name}</div>
                <div className="screenname">@{this.props.data.screen_name}</div>
                <h3>Current Location: {this.props.data.location}</h3>
            </div>
        );
    }
});


var UserInfo = React.createClass({
    
    getInitialState:function() {
        return ({
            userInfo: {}
        })
    },
    
    componentDidMount() {
       
        var screenname = 'uw'; // this needs to be changed depending on the user
        var url = 'https://faculty.washington.edu/joelross/proxy/twitter/timeline/?screen_name=' + screenname + '&count=1';
        
        $.get(url).then(function(data) {
            var user = data[0].user;
            this.setState({
               userInfo: data[0].user
            });
        }.bind(this));
    },
    
    
    render:function() {
        return (
          <div className="userInfo">
                <h1>User Information</h1>
                <UserCard data={this.state.userInfo}/>
          </div>
        );
    }
    
});



export default UserInfo;