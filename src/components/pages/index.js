import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';
import { withRouter, Link } from 'react-router-dom';

import MainPage from './MainPage';
import SecondPage from './SecondPage';
import Login from './Login';

class Pages extends Component {
	render() {
		return (
			<div>
				<div>
					<Link to="/mainPage">main</Link>
					<Link to="/secondPage">secondPage</Link>
				</div>
				<Switch>
					<Redirect from="/" exact to="/login" />
					<Route path="/mainPage" component={MainPage} />
					<Route path="/secondPage" component={SecondPage} />
					<Route path="/login" component={Login} />
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = () => ({});

export default withRouter(connect(mapStateToProps)(Pages));
