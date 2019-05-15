import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../frontpages/Home.js';

class DefaultLayout extends Component {
    
    render() {
      return (
        <main>
            <Switch>
            	<Route path="/" exact component={Home} />
            </Switch>
        </main>
		);
	}
}

export default DefaultLayout;