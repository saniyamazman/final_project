import React, { Component } from 'react';
import logo from '../img/logo.png';
import './App.css';

// Public user information page
class UserInfo extends Component {
    /*
    
    var photo = $.get(profile_image_url);
    var name = $.get(name)
    
    
    
    */
    render() {
        return (
          <div className="userInfo">
                <h1>User Information</h1>
                <p>Information about the user will be displayed here.</p>
          </div>
        );
    }
}

/*
- display user photo
- display name
- display last location checked in
- display saved locations (interested in)
- display locations user has already visited
*/



export default UserInfo;