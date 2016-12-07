import React, { Component } from 'react';
import logo from '../img/logo.png';
import './App.css';
import $ from 'jquery';
import './UserInfo.css';
import axios from 'axios';

// Public user information page
/*class UserInfo extends Component {
    
    GET 'https://api.twitter.com/1.1/users/show.json?screen_name=' + user's screenname
    
    
    var photo = $.get(profile_image_url);
    var name = $.get(name)
    var location = $.get(location)

}

/*
- display user photo
- display name
- display last location checked in

*/



var UserCard = React.createClass({  
    render() {
        return(
            <div className="userCard">
                <img src= {this.props.profile_image_url} alt="user profile pic"/>    
                <h3>{this.props.name}</h3>
                <h4><i>{this.props.screenname}</i></h4>
                
                <p>Information about the user will be displayed here.</p>
            </div>
        );
    }
});


var UserInfo = React.createClass({
    
    getInitialState:function() {
        return {
            userInfo: {}
        }
    },
    
    componentDidMount() {
       
        var screenname = 'ironflutist'; // this needs to be changed depending on the user
        var url = 'https://faculty.washington.edu/joelross/proxy/twitter/timeline/?screen_name=' + screenname + '&count=1';
        var user = '';
        
        axios.get(url).then(function (response) {
            console.log(response.data[0].user);
            
        });
        
        this.setState({
                userInfo: user
            }).bind(this);
        console.log(this.state.userInfo);
        
        
        /*$.getJSON(url, function(data) {
            console.log(data);
            console.log(data[0].user);
            user = data[0].user;
            console.log('user info: ');
            console.log('name: ' + user.name + ', screen name: ' + user.screen_name + ', location: ' + user.location + ', profile image: ' + user.profile_image_url_http);
            
            
            
        });*/
        
        this.setState({
                userInfo: user
        }).bind(this);
        console.log('user: ' + user);
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