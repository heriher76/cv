import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo';

class LeftBarAdmin extends Component {

	render() {
		return (
			<div>
				<aside id="leftsidebar" className="sidebar">
				  {/* User Info */}
				  <UserInfo />
				  {/* #User Info */}
				  {/* Menu */}
				  <div className="menu">
				    <ul className="list">
				      <li className="header">MAIN NAVIGATION</li>
				      <li>
				        <Link to="/admin">
				          <i className="material-icons">home</i>
				          <span>Dashboard</span>
				        </Link>
				      </li>
		      	      <li>
		      	        <Link to="/admin/about">
		      	          <i className="material-icons">widgets</i>
		      	          <span>About</span>
		      	        </Link>
		      	      </li>
		      	      <li>
		      	        <Link to="/admin/experience">
		      	          <i className="material-icons">widgets</i>
		      	          <span>Experience</span>
		      	        </Link>
		      	      </li>
		      	      <li>
		      	        <Link to="/admin/portfolio">
		      	          <i className="material-icons">widgets</i>
		      	          <span>Portfolio</span>
		      	        </Link>
		      	      </li>
		      	      <li>
		      	        <Link to="/admin/skill">
		      	          <i className="material-icons">widgets</i>
		      	          <span>Skill</span>
		      	        </Link>
		      	      </li>
		      	      <li>
		      	        <Link to="/admin/education">
		      	          <i className="material-icons">widgets</i>
		      	          <span>Education</span>
		      	        </Link>
		      	      </li>
				      
				    </ul>
				  </div>
				  {/* #Menu */}
				  {/* Footer */}
				  <div className="legal">
				    <div className="copyright">
				      © 2019 <a href="#">HeriHerPlay</a>.
				    </div>
				    <div className="version">
				      <b>Version: </b> 1.0.0
				    </div>
				  </div>
				  {/* #Footer */}
				</aside>
			</div>
		);
	}
}
export default LeftBarAdmin;