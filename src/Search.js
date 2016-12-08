//need twitter api to be able to search for a place
/*Flow for retrieving place_ids and then tweets from Twitter:
	GET https://api.twitter.com/1.1/geo/search.json?query=Seattle
	can also use lat long for improved accuracy
	once we have our place_ids
	GET https://api.twitter.com/1.1/search/tweets.json?q=place%'place_id'
	will return json in the same format as sample_tweets.json
*/

import './Search.css'
import React, {Component} from 'react';
import TweetMap from './TweetMap'
import $ from 'jquery';
import 'materialize-css';
import './TweetMap.css'
import { Link } from 'react-router';


const urlBeg = 'http://dev.virtualearth.net/REST/v1/Locations?q=';
const urlEnd = '&o=json&key=Amqe7a8IucLou-06ttFQ1Re67VAFp9Zx5vbeIsiDqZv8CWC5qAk9kY0tNhNZs5vW&jsonp=?'
const gettingInfo = 'https://faculty.washington.edu/joelross/proxy/twitter/search/?q=&geocode='
const gettingInfoEnd = ',3km&result_type=recent'
var lat;
var long;

var SearchBar = React.createClass( {
	getInitialState:function(){
		return ({setCity:[]});
	},

	logIn: function(){
	console.log('Button was clicked!')
	},

	searchedCity:function(city){
		this.setState({setCity:city.target.value})
		console.log(this)
	},

    filter:function(event){
    	event.preventDefault();
    	let url = urlBeg + this.state.setCity + urlEnd;
    	console.log(url)
    	$.getJSON(url).then(function(data){
    		lat = data.resourceSets[0].resources[0].geocodePoints[0].coordinates[0];
    		long = data.resourceSets[0].resources[0].geocodePoints[0].coordinates[1];
    		console.log(lat)
    		console.log(long)


    	let secondUrl = gettingInfo + lat + ',' +long  + gettingInfoEnd;
    	console.log(secondUrl)
    	$.getJSON(secondUrl).then(function(data){
    		console.log(data)
    		this.setState({setCity:data.statuses})
    		})
    	}.bind(this))
    },

	render(){
		let tweets = this.state.setCity;
		let points = {lat:{lat}, lng:{long}};
		return(
			<div className="landing">
				<section className="background">
				<div className="searchBar" id="searchBar">
					<h3>Find places where people go the most</h3>
	      			<h1> Where do you want to go?</h1>
		      			<form className="row" onSubmit={this.filter}>
						    <input
							    type="text"
							    name="search"
							    placeholder="Type a city name..."
							    onChange={this.searchedCity}
							    
						    />
						    <button type="submit" className="btn btn-primary">Explore</button>
						    	<div className="loginstuff">
									<Link className="loginlink" activeClassName='active' to="/trips">LOG IN</Link>
								</div>
						</form>
						
	      		</div>
	      		<div id="appendMap">
	      			<TweetMap />
	      		</div>
	      		</section>

	      	</div>
		)
	}


})


export default SearchBar;

// {this.state.searchSong.map(function(d, i) {
// 					return <PlaylistImage key={'song' + i} data={d} />
// 					console.log(map)
// 				})}
