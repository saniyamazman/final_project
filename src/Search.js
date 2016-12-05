//need twitter api to be able to search for a place
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