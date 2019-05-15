import React, { Component } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

class UpdateAbout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			first_name: '',
			last_name: '',
			slogan: '',
			description: '',
			address: '',
			email: '',
			phone: '',
			fb: '',
			ig: '',
			in: '',
			gh: '',
			profile: null,
			background: null,
			submitting: false
		}
	}

	componentDidMount() {
		axios.get(`https://api.klikfood.id/index.php/kategori`)
		  .then((response) => {
		  	console.log(response);
		  	this.setState({
		  		categories: response.data.data
		  	})
		  }).catch((error) => {
		  	toast.error("Something Went Wrong :(");
		  })
	}

	handleChange = (event) => {
		this.setState({ 
			[event.target.name]: event.target.value
		})
	}

	handleChangeProfile = (e) => {
		this.setState({profile:e.target.files[0]})
	}

	handleChangeBackground = (e) => {
		this.setState({background:e.target.files[0]})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({
			submitting: true
		})
		const bodyFormData = new FormData();
		
		bodyFormData.set('first_name', this.state.first_name);
		bodyFormData.set('last_name', this.state.last_name);
		bodyFormData.set('slogan', this.state.slogan);
		bodyFormData.set('description', this.state.description);
		bodyFormData.set('address', this.state.address);
		bodyFormData.set('email', this.state.email);
		bodyFormData.set('phone', this.state.phone);
		bodyFormData.set('fb', this.state.fb);
		bodyFormData.set('ig', this.state.ig);
		bodyFormData.set('in', this.state.in);
		bodyFormData.set('gh', this.state.gh);
		bodyFormData.append('profile', this.state.profile);
		bodyFormData.append('background', this.state.background);

		axios.defaults.headers = {  
			'Content-Type': 'multipart/form-data',  
			'Authorization': sessionStorage.api_token 
		}
		
		axios.post(`https://api.klikfood.id/index.php/produksupplyer/store`, bodyFormData)
	      .then(response => {
	      	this.setState({
				submitting: true
			})
	      	toast.success("Menambah Produk Sukses !");
	      	setTimeout(() => {
	      		window.location.href='/admin/products';
	      	}, 3000)
	      }).catch(err => {
	      	this.setState({
				submitting: false
			})
	      	toast.error("Something Went Wrong :( ");
	      });
	}

	render() {
		return (
			<div>
				<ToastContainer />
				<div classname="row clearfix">
				    <div classname="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				        <div classname="card">
				            <div classname="header">
				              <h2>
				                Update About
				              </h2>
				            </div>
				            <div classname="body">
				        		<form onSubmit={this.handleSubmit} >
				        		  
				        		      <label>First Name</label>
				        		      <input className="form-control" type="text" placeholder="First Name" name="first_name" value={this.state.first_name} onChange={this.handleChange} required />
				        		  	  <br/>

				        		      <label>Last Name</label>
				        		      <input className="form-control" type="text" placeholder="Last Name" name="last_name" value={this.state.stok} onChange={this.handleChange} required />
				        		  	  <br/>

				        		      <label>Slogan</label>
				        		      <input className="form-control" type="text" placeholder="Slogan" name="slogan" value={this.state.slogan} onChange={this.handleChange} required />
				        		  	  <br/>

				        		      <label>Description</label>
				        		      <textarea className="form-control" placeholder="Description" name="description" value={this.state.description} onChange={this.handleChange} required></textarea>
				        		  	  <br/>

				        		      <label>Address</label>
				        		      <input className="form-control" type="text" placeholder="Address" name="address" value={this.state.address} onChange={this.handleChange} required />
				        		  
				        		      <label>Phone</label>
				        		      <input className="form-control" type="number" placeholder="Phone" name="phone" value={this.state.phone} onChange={this.handleChange} required />
				        		      
				        		      <label>Email</label>
				        		      <input className="form-control" type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} required />
				        		      
				        		      <label>Link Social Media</label>
				        		      <input className="form-control" type="text" placeholder="Instagram" name="ig" value={this.state.ig} onChange={this.handleChange} required />
				        		      <input className="form-control" type="text" placeholder="Facebook" name="fb" value={this.state.fb} onChange={this.handleChange} required />
				        		      <input className="form-control" type="text" placeholder="Linked In" name="in" value={this.state.in} onChange={this.handleChange} required />
				        		      <input className="form-control" type="text" placeholder="Github" name="gh" value={this.state.gh} onChange={this.handleChange} required />
				        		    
				        		      <label>Photo Profile</label>
				        		      <input className="form-control" type="file" name="profile" onChange={this.handleChangeProfile} required />
				        		      
				        		      <label>Photo Background</label>
				        		      <input className="form-control" type="file" name="background" onChange={this.handleChangeBackground} required />
				        		    
				        		      {this.state.submitting ?
										<div>
											<b><center>Sedang Upload...</center></b>
										</div>
										:
											<button type="submit" className="btn btn-success">Update</button>
										}
				        		    
				        		</form>
				            </div>
				        </div>
				    </div>
				</div>
			</div>
		);
	}
}
export default UpdateAbout;