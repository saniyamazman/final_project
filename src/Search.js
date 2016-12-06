//need twitter api to be able to search for a place
/*Flow for retrieving place_ids and then tweets from Twitter:
	GET https://api.twitter.com/1.1/geo/search.json?query=Seattle
	can also use lat long for improved accuracy
	once we have our place_ids
	GET https://api.twitter.com/1.1/search/tweets.json?q=place%'place_id'
	will return json in the same format as sample_tweets.json
*/

import bg from './nyc.jpg';
import './Search.css'
import 'materialize-css';
import React, {Component} from 'react';

var sectionBg = {
	  width: "100%",
	  height: "600px",
	  opacity: "0.7",
	  backgroundImage: "url(" + bg + ")",
	  backgroundSize: "cover"

	};

class SearchBar extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.props.onUserInput(
            this.refs['filterTextInput'].value,
            this.refs['inStockOnlyInput'].checked
        );
    }

	render(){
		return(
			<div className="landing">
				<section className="background" style={sectionBg}>
				<div className="searchBar">
					<h3>Find places where people go the most</h3>
	      			<h1> Where do you want to go?</h1>
		      			<form className="row">
						    <input
							    type="text"
							    name="search"
							    placeholder="Type a city name..."
							    onChange={this.handleChange}
						    />
						    <button> EXPLORE</button>
						</form>
	      		</div>
	      		</section>
	      	</div>
		)
	}

}
export default SearchBar;
