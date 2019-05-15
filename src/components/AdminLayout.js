import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../assets/css/node-waves/waves.css';
import '../assets/css/animate-css/animate.css';
import '../assets/css/morrisjs/morris.css';
import '../assets/css/style.css';
import '../assets/css/themes/all-themes.css';
import axios from 'axios';
import TopBar from './partials/TopBar';
import Dashboard from './partials/Dashboard';

import LeftBarAdmin from './partials/LeftBarAdmin';

import UpdateAbout from '../admin/about/UpdateAbout';

class AdminLayout extends Component {
	componentWillMount() {
		document.body.classList.add('theme-blue');
	}
	render() {
		// if (sessionStorage.length === 0) {
		// 	return (
		// 		<Redirect to={'/login'}/>
		// 	)
	 //    }
	    
		return (
	      <div>	
	        {/* Page Loader */}
	        <div className="page-loader-wrapper">
	          <div className="loader">
	            <div className="preloader">
	              <div className="spinner-layer pl-red">
	                <div className="circle-clipper left">
	                  <div className="circle" />
	                </div>
	                <div className="circle-clipper right">
	                  <div className="circle" />
	                </div>
	              </div>
	            </div>
	            <p>Please wait...</p>
	          </div>
	        </div>
	        {/* #END# Page Loader */}
	        {/* Overlay For Sidebars */}
	        <div className="overlay" />
	        {/* #END# Overlay For Sidebars */}
	        
	        {/* Top Bar */}
	        <TopBar />
	        {/* #Top Bar */}
	        <section>
	          {/* Left Sidebar */}
	          <LeftBarAdmin />
	          {/* #END# Left Sidebar */}
	          
	        </section>
	        <section className="content">
	          <div className="container-fluid">
	            
	            <main>
	            <Switch>
	            	<Route path="/admin" exact component={Dashboard} />
	            	
	            	<Route path="/admin/about" component={UpdateAbout} />
	            	{/*<Route path="/admin/categories/:id/update" component={CategoryUpdate} />
	            	<Route path="/admin/categories/:id/create" component={SubCategoryCreate} />
	            	<Route path="/admin/categories/:id/:sub/update" component={SubCategoryUpdate} />
	            	<Route path="/admin/categories/:id" component={SubCategoryList} />
	            	<Route path="/admin/categories" component={CategoryList} />*/}

	            </Switch>
	            </main>
	          
	          </div>
	        </section>
	        
	      </div>
	    );
	}
}
export default AdminLayout;