import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import SearchPage from './Search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {IndexRoute, Router, Route, hashHistory} from 'react-router';


ReactDOM.render(
	<MuiThemeProvider>
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={SearchPage}/>
				<Route path="mytrips" component={MyTrips}/>
			</Route>
		</Router>
	</MuiThemeProvider>,
	document.getElementById('root')
)
