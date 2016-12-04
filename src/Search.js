//need twitter api to be able to search for a place
import React from 'react';
import bg from './nyc.jpg';
import './Search.css'
import SearchBar from 'react-search';

var sectionBg = {
	  width: "100%",
	  height: "600px",
	  opacity: "0.7",
	  backgroundImage: "url(" + bg + ")",
	  backgroundSize: "cover"

	};

var SearchPage = React.createClass({
	render(){
		return(
			<div className="landing">
				<section className="background" style={sectionBg}>
				<div className="searchBar">
					<h3>Find places where people go the most</h3>
	      			<h1> Where do you want to go?</h1>

	      			<SearchBar
  						onChange={(searchTerm, resolve) => {
					    // get suggestions asynchronously based on `searchTerm`,
					    // then pass them to `resolve()` to populate suggestions
					  	}}
					  	onSearch={(searchTerm) => {
					    // do something on search
						}} 
					/>

	      		</div>
	      		</section>
	      	</div>
		)
	}
})

export default SearchPage;