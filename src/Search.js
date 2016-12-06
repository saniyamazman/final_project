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
import 'materialize-css';
import $ from 'jquery'; 



var SearchBar = React.createClass( {
	getInitialState:function(){
		return ({setCity:[]});
	},

	searchedCity:function(city){
		this.setState({citySearched:city.target.value})
		console.log(this)
	},

    filter:function(event){
    	event.preventDefault();
    	console.log(event.target.value)
    	let url = 'https://api.twitter.com/1.1/geo/search.json?query=' + this.state.citySearched;
    	console.log(url)
    	$.get(url).then(function(data){
    		this.setState({setCity:data.query.place_id})
    	}.bind(this))

    },

	render(){
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