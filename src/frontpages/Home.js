import React, { Component } from 'react';

class Home extends Component {
	render() {
		return (
			<div className="row">
		        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top col-lg-3" id="sideNav">
		          <a className="navbar-brand js-scroll-trigger" href="#page-top">
		            <span className="d-block d-lg-none  mx-0 px-0"><img src="/img/logo-white.png" alt className="img-fluid" style={{height: '50px', padding: '0px'}} /></span>
		            <span className="d-none d-lg-block">
		              <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="/img/profile.jpg" alt />
		            </span>
		          </a>
		          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		            <span className="navbar-toggler-icon" />
		          </button>
		          <div className="collapse navbar-collapse" id="navbarSupportedContent">
		            <ul className="navbar-nav">
		              <li className="nav-item">
		                <a className="nav-link js-scroll-trigger" href="#about">About</a>
		              </li>
		              <li className="nav-item">
		                <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
		              </li>
		              <li className="nav-item">
		                <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
		              </li>
		              <li className="nav-item">
		                <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
		              </li>
		              <li className="nav-item">
		                <a className="nav-link js-scroll-trigger" href="#awards">Education</a>
		              </li>
		              <li className="nav-item">
		                <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
		              </li>
		            </ul>
		          </div>
		        </nav>
		        <div className="container-fluid p-0 col-lg-9">
		          {/*====================================================
		                        ABOUT
		    ======================================================*/}
		          <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
		            <div className="my-auto">
		              {/*<img src="/img/logo-s.png" className="img-fluid mb-3" alt />*/}
		              <h1 className="text-primary">Heri
		                <span className="d-none d-md-block" style={{color: 'gray'}}>Hermawan</span>
		              </h1>
		              <h2 className="d-block d-md-none" style={{color: 'gray'}}>Hermawan</h2>
		              <div className="subheading mb-5">
		                BE BETTER THAN BEFORE
		              </div>
		              <p className="mb-5" style={{maxWidth: '500px'}}>Visioner, Ambitious, Good Leadership, and a 'Genius of Hardwork'. I am experienced in web and mobile programming.</p>
		              <ul className="list-inline list-social-icons mb-0">
		                <li className="list-inline-item">
		                  <a href="https://facebook.com/hidden76" target="_blank">
		                    <span className="fa-stack fa-lg">
		                      <i className="fa fa-circle fa-stack-2x" />
		                      <i className="fa fa-facebook fa-stack-1x fa-inverse" />
		                    </span>
		                  </a>
		                </li>
		                <li className="list-inline-item">
		                  <a href="https://instagram.com/heriher76" target="_blank">
		                    <span className="fa-stack fa-lg">
		                      <i className="fa fa-circle fa-stack-2x" />
		                      <i className="fa fa-instagram fa-stack-1x fa-inverse" />
		                    </span>
		                  </a>
		                </li>
		                <li className="list-inline-item">
		                  <a href="https://www.linkedin.com/in/heri-hermawan-9a6284143/" target="_blank">
		                    <span className="fa-stack fa-lg">
		                      <i className="fa fa-circle fa-stack-2x" />
		                      <i className="fa fa-linkedin fa-stack-1x fa-inverse" />
		                    </span>
		                  </a>
		                </li>
		                <li className="list-inline-item">
		                  <a href="https://github.com/heriher76" target="_blank">
		                    <span className="fa-stack fa-lg">
		                      <i className="fa fa-circle fa-stack-2x" />
		                      <i className="fa fa-github fa-stack-1x fa-inverse" />
		                    </span>
		                  </a>
		                </li>
		              </ul>
		            </div>
		          </section>
		          {/*====================================================
		                        EXPERIENCE
		    ======================================================*/}      
		          <section className="resume-section p-3 p-lg-5 " id="experience">
		            <div className="row my-auto">
		              <div className="col-12">
		                <h2 className="  text-center">Experience</h2>
		                <div className="mb-5 heading-border" />
		              </div>
		              <div className="resume-item col-md-6 col-sm-12 "> 
		                <div className="card mx-0 p-4 mb-5" style={{borderColor: '#17a2b8', boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.21)'}}>
		                  <div className=" resume-content mr-auto">
		                    <h4 className="mb-3"><i className="fa fa-globe mr-3 text-info" /> Web Developer</h4>
		                    <p />
		                  </div>
		                  <div className="resume-date text-md-right">
		                    <span className="text-primary">April 2018 - Present</span>
		                  </div>
		                </div>  
		              </div>
		              <div className="resume-item col-md-6 col-sm-12">
		                <div className="card mx-0 p-4 mb-5" style={{borderColor: '#ffc107', boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.21)'}}>
		                  <div className="resume-content mr-auto">
		                    <h4 className="mb-3"><i className="fa fa-phone mr-3 text-warning" /> Mobile Developer</h4>
		                    <p />
		                  </div>
		                  <div className="resume-date text-md-right">
		                    <span className="text-primary">September 2018 - Present</span>
		                  </div>
		                </div>  
		              </div>
		              <div className="resume-item col-md-6 col-sm-12">
		                <div className="card mx-0 p-4 mb-5" style={{borderColor: '#28a745', boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.21)'}}>
		                  <div className="resume-content mr-auto">
		                    <h4 className="mb-3"><i className="fa fa-wifi mr-3 text-success" /> Junior Network Engineer</h4>
		                    <p />
		                  </div>
		                  <div className="resume-date text-md-right">
		                    <span className="text-primary">Agustus 2018 - Present</span>
		                  </div>
		                </div>  
		              </div>
		              <div className="resume-item col-md-6 col-sm-12">
		                <div className="card mx-0 p-4 mb-5" style={{borderColor: '#2196f3', boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.21)'}}>
		                  <div className="resume-content mr-auto">
		                    <h4 className="mb-3"><i className="fa fa-area-chart mr-3 text-primary" /> Design Graphics</h4>
		                    <p />
		                  </div>
		                  <div className="resume-date text-md-right">
		                    <span className="text-primary">Januari 2018 - Present</span>
		                  </div>
		                </div>  
		              </div>
		            </div>
		          </section>
		          {/*====================================================
		                        PORTFOLIO
		    ======================================================*/}      
		          <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="portfolio"> 
		            <div className="row my-auto">
		              <div className="col-12">
		                <h2 className="  text-center">Portfolio</h2>
		                <div className="mb-5 heading-border" />
		              </div>
		              <div className="col-md-12">
		                <div className="port-head-cont">
		                  <button className="btn btn-general btn-green filter-b" data-filter="all">All</button>
		                  <button className="btn btn-general btn-green filter-b" data-filter="consulting">Web Design</button>
		                  <button className="btn btn-general btn-green filter-b" data-filter="finance">Mobile Apps</button>
		                  <button className="btn btn-general btn-green filter-b" data-filter="marketing">Graphics Design</button> 
		                </div>
		              </div>
		            </div>
		            <div className="row my-auto">
		              <div className="col-sm-4 portfolio-item filter finance">
		                <a className="portfolio-link" href="#portfolioModal4" data-toggle="modal">
		                  <div className="caption-port">
		                    <div className="caption-port-content">
		                      <i className="fa fa-search-plus fa-3x" />
		                    </div>
		                  </div>
		                  <img className="img-fluid" src="img/portfolio/p-4.jpg" alt />
		                </a>
		              </div>
		              <div className="col-sm-4 portfolio-item filter marketing">
		                <a className="portfolio-link" href="#portfolioModal5" data-toggle="modal">
		                  <div className="caption-port">
		                    <div className="caption-port-content">
		                      <i className="fa fa-search-plus fa-3x" />
		                    </div>
		                  </div>
		                  <img className="img-fluid" src="img/portfolio/p-5.jpg" alt />
		                </a>
		              </div>
		              <div className="col-sm-4 portfolio-item filter consulting">
		                <a className="portfolio-link" href="#portfolioModal6" data-toggle="modal">
		                  <div className="caption-port">
		                    <div className="caption-port-content">
		                      <i className="fa fa-search-plus fa-3x" />
		                    </div>
		                  </div>
		                  <img className="img-fluid" src="img/portfolio/p-6.jpg" alt />
		                </a>
		              </div>              
		              <div className="col-sm-4 portfolio-item filter consulting">
		                <a className="portfolio-link" href="#portfolioModal7" data-toggle="modal">
		                  <div className="caption-port">
		                    <div className="caption-port-content">
		                      <i className="fa fa-search-plus fa-3x" />
		                    </div>
		                  </div>
		                  <img className="img-fluid" src="img/portfolio/p-7.jpg" alt />
		                </a>
		              </div>
		              <div className="col-sm-4 portfolio-item filter consulting">
		                <a className="portfolio-link" href="#portfolioModal8" data-toggle="modal">
		                  <div className="caption-port">
		                    <div className="caption-port-content">
		                      <i className="fa fa-search-plus fa-3x" />
		                    </div>
		                  </div>
		                  <img className="img-fluid" src="img/portfolio/p-8.jpg" alt />
		                </a>
		              </div>
		              <div className="col-sm-4 portfolio-item filter finance">
		                <a className="portfolio-link" href="#portfolioModal9" data-toggle="modal">
		                  <div className="caption-port">
		                    <div className="caption-port-content">
		                      <i className="fa fa-search-plus fa-3x" />
		                    </div>
		                  </div>
		                  <img className="img-fluid" src="img/portfolio/p-9.jpg" alt />
		                </a>
		              </div>              
		              <div className="col-sm-4 portfolio-item filter marketing">
		                <a className="portfolio-link" href="#portfolioModal1" data-toggle="modal">
		                  <div className="caption-port">
		                    <div className="caption-port-content">
		                      <i className="fa fa-search-plus fa-3x" />
		                    </div>
		                  </div>
		                  <img className="img-fluid" src="img/portfolio/p-1.jpg" alt />
		                </a>
		              </div>
		              <div className="col-sm-4 portfolio-item filter marketing">
		                <a className="portfolio-link" href="#portfolioModal2" data-toggle="modal">
		                  <div className="caption-port">
		                    <div className="caption-port-content">
		                      <i className="fa fa-search-plus fa-3x" />
		                    </div>
		                  </div>
		                  <img className="img-fluid" src="img/portfolio/p-2.jpg" alt />
		                </a>
		              </div>
		              <div className="col-sm-4 portfolio-item filter finance">
		                <a className="portfolio-link" href="#portfolioModal3" data-toggle="modal">
		                  <div className="caption-port">
		                    <div className="caption-port-content">
		                      <i className="fa fa-search-plus fa-3x" />
		                    </div>
		                  </div>
		                  <img className="img-fluid" src="img/portfolio/p-3.jpg" alt />
		                </a>
		              </div> 
		            </div>
		          </section>
		          {/*====================================================
		                        SKILLS
		    ======================================================*/}       
		          {/* <h2><span class="counter"> 84 </span><span>%</span></h2> */}
		          <section className=" d-flex flex-column" id="skills">
		            <div className="p-lg-5 p-3 skill-cover">
		              <h3 className="text-center text-white">Coding Skills</h3>
		              <div className="row text-center my-auto "> 
		                <div className="col-md-3 col-sm-6">
		                  <div className="skill-item">
		                    <i className="fa fa-html5 fa-5x" />
		                    <p>HTML5</p>
		                  </div>
		                </div>
		                <div className="col-md-3 col-sm-6">
		                  <div className="skill-item">
		                    <i className="fa fa-css3 fa-5x" />
		                    <p>CSS3</p>
		                    <p>Bootstrap</p>
		                  </div>
		                </div>
		                <div className="col-md-3 col-sm-6">
		                  <div className="skill-item">
		                    <i className="fa fa-code fa-5x" />
		                    <p>Javascript</p>
		                    <p>JQuery</p>
		                    <p>Vue.js</p>
		                    <p>React JS &amp; Native</p>
		                  </div>
		                </div>
		                <div className="col-md-3 col-sm-6">
		                  <div className="skill-item">
		                    <i className="fa fa-globe fa-5x" />
		                    <p>PHP</p>
		                    <p>Laravel</p>
		                  </div>
		                </div>
		              </div>
		            </div> 
		          </section>
		          {/*====================================================
		                           AWARDS
		    ======================================================*/}       
		          <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
		            <div className="row my-auto">
		              <div className="col-12">
		                <h2 className="  text-center">Education</h2>
		                <div className="mb-5 heading-border" />
		              </div> 
		              <div className="main-award" id="award-box">
		                <div className="award">
		                  <div className="award-icon" />
		                  <div className="award-content">
		                    <span className="date">Apr 2015 - May 2018</span>
		                    <h5 className="title">SMK Guna Dharma Nusantara Cicalengka</h5>
		                    <p className="description">
		                      Computer and Network Engineer
		                    </p>
		                  </div>
		                </div>
		                <div className="award">
		                  <div className="award-icon" />
		                  <div className="award-content">
		                    <span className="date">Aug 2018 - Present</span>
		                    <h5 className="title">State Islamic University</h5>
		                    <p className="description">
		                      Studied in Informatics Engineering, and worked as freelancer at Sanbersy.com. Developed many website project, like klikfood.id and many other.
		                    </p>
		                  </div>
		                </div>
		              </div>
		            </div>
		          </section> 
		          {/*====================================================
		                          CONTACT
		    ======================================================*/}       
		          <section className="resume-section p-3 p-lg-5 d-flex flex-column">
		            <div className="row my-auto" id="contact"> 
		              <div className="col-md-8">
		                <div className="contact-cont">
		                  <h3>CONTACT Me</h3>
		                  <div className="heading-border-light" />
		                  <p>I enjoy playing football, games:PUBG, spending time with my family and friends, and working on learning a new skill through mini projects.</p>
		                </div>   
		                <div className="row con-form">
		                  <div className="col-md-12">
		                    <input type="text" name="full-name" placeholder="Full Name" className="form-control" />
		                  </div>
		                  <div className="col-md-12">
		                    <input type="text" name="email" placeholder="Email" className="form-control" />
		                  </div>
		                  <div className="col-md-12">
		                    <input type="text" name="subject" placeholder="Subject" className="form-control" />
		                  </div>
		                  <div className="col-md-12"><textarea name id defaultValue={""} /></div>
		                  <div className="col-md-12 sub-but"><button className="btn btn-general btn-white" role="button">Send</button></div>
		                </div>
		              </div>
		              <div className="col-md-4 col-sm-12 mt-5"> 
		                <div className="contact-cont2"> 
		                  <div className="contact-add contact-box-desc">
		                    <h3><i className="fa fa-map-marker cl-atlantis fa-2x" /> Address</h3>
		                    <p>Bunter Road Sukadana Village, Cimanggung sub-district, Sumedang district <br />
		                      West Java, Indonesia <br /></p>
		                  </div>
		                  <div className="contact-phone contact-side-desc contact-box-desc">
		                    <h3><i className="fa fa-phone cl-atlantis fa-2x" /> Phone</h3>
		                    <p>+62 89 615 266 856</p>
		                  </div>
		                  <div className="contact-mail contact-side-desc contact-box-desc">
		                    <h3><i className="fa fa-envelope-o cl-atlantis fa-2x" /> Email</h3>
		                    <address className="address-details-f"> 
		                      Email: <a href="mailto:herhermawan007@gmail.com" className>herhermawan007@gmail.com</a>
		                    </address>
		                    <ul className="list-inline social-icon-f top-data">
		                      <li><a href="https://facebook.com/hidden76" target="_blank"><i className="fa top-social fa-facebook" style={{color: '#4267b2', borderColor: '#4267b2'}} /></a></li>
		                      <li><a href="https://instagram.com/heriher76" target="_blank"><i className="fa top-social fa-instagram" style={{color: '#4AB3F4', borderColor: '#4AB3F4'}} /></a></li>
		                      <li><a href="https://github.com/heriher76" target="_blank"><i className="fa top-social fa-github" style={{color: '#e24343', borderColor: '#e24343'}} /></a></li> 
		                    </ul>
		                  </div>
		                </div>
		              </div> 
		            </div>
		          </section>
		          <section className=" d-flex flex-column" id="maps">
		            <div id="map">
		              <div className="map-responsive">
		                <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6030.418742494061!2d-111.34563870463673!3d26.01036670629853!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1471908546569" width={600} height={450} frameBorder={0} style={{border: 0}} allowFullScreen />
		              </div>
		            </div>
		          </section>
		        </div>
		        {/*====================================================
		                    PORTFOLIO MODALS
		======================================================*/}
		        <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex={-1} role="dialog" aria-hidden="true">
		          <div className="modal-dialog" role="document">
		            <div className="modal-content">
		              <div className="close-modal" data-dismiss="modal">
		                <div className="lr">
		                  <div className="rl" />
		                </div>
		              </div>
		              <div className="container">
		                <div className="row">
		                  <div className="modal-body">
		                    <div className="title-bar">
		                      <div className="col-md-12">
		                        <h2 className="text-center">Our Project</h2>
		                        <div className="heading-border" />
		                      </div>
		                    </div>
		                    <div className="row">
		                      <div className="col-md-6">
		                        <img className="img-fluid img-centered" src="img/portfolio/p-1.jpg" alt />
		                      </div>
		                      <div className="col-md-6">
		                        <p>Our new Project every processes had become fragmented; meaning quality and service were inconsistent. This lack of standardization was adversely impacting operating costs, productivity and customer satisfaction. For several years now Payfast has worked strategically with innovations as a means of developing new solutions, products and services. In line with this vision, Success was approached to find new payments solutions to offer Payfast customers on their website, including open invoice and partial payments options.</p>
		                        <ul className="list-inline item-details">
		                          <li>Client:
		                            <strong>
		                              <a href="#">Techs Soft</a>
		                            </strong>
		                          </li>
		                          <li>Date:
		                            <strong>
		                              <a href="#">April 2018</a>
		                            </strong>
		                          </li>
		                          <li>Service:
		                            <strong>
		                              <a href="#">Web Development</a>
		                            </strong>
		                          </li>
		                        </ul>
		                        <button className="btn btn-general btn-white" type="button" data-dismiss="modal">
		                          <i className="fa fa-times" /> Close
		                        </button>
		                      </div>
		                    </div>
		                  </div>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		        <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex={-1} role="dialog" aria-hidden="true">
		          <div className="modal-dialog" role="document">
		            <div className="modal-content">
		              <div className="close-modal" data-dismiss="modal">
		                <div className="lr">
		                  <div className="rl" />
		                </div>
		              </div>
		              <div className="container">
		                <div className="row">
		                  <div className="modal-body">
		                    <div className="title-bar">
		                      <div className="col-md-12">
		                        <h2 className="text-center">Our Project</h2>
		                        <div className="heading-border" />
		                      </div>
		                    </div>
		                    <div className="row">
		                      <div className="col-md-6">
		                        <img className="img-fluid img-centered" src="img/portfolio/p-2.jpg" alt />
		                      </div>
		                      <div className="col-md-6">
		                        <p>Our new Project every processes had become fragmented; meaning quality and service were inconsistent. This lack of standardization was adversely impacting operating costs, productivity and customer satisfaction. For several years now Payfast has worked strategically with innovations as a means of developing new solutions, products and services. In line with this vision, Success was approached to find new payments solutions to offer Payfast customers on their website, including open invoice and partial payments options.</p>
		                        <ul className="list-inline item-details">
		                          <li>Client:
		                            <strong>
		                              <a href="#">Techs Soft</a>
		                            </strong>
		                          </li>
		                          <li>Date:
		                            <strong>
		                              <a href="#">April 2018</a>
		                            </strong>
		                          </li>
		                          <li>Service:
		                            <strong>
		                              <a href="#">Web Development</a>
		                            </strong>
		                          </li>
		                        </ul>
		                        <button className="btn btn-general btn-white" type="button" data-dismiss="modal">
		                          <i className="fa fa-times" /> Close
		                        </button>
		                      </div>
		                    </div>
		                  </div>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		        <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex={-1} role="dialog" aria-hidden="true">
		          <div className="modal-dialog" role="document">
		            <div className="modal-content">
		              <div className="close-modal" data-dismiss="modal">
		                <div className="lr">
		                  <div className="rl" />
		                </div>
		              </div>
		              <div className="container">
		                <div className="row">
		                  <div className="modal-body">
		                    <div className="title-bar">
		                      <div className="col-md-12">
		                        <h2 className="text-center">Our Project</h2>
		                        <div className="heading-border" />
		                      </div>
		                    </div>
		                    <div className="row">
		                      <div className="col-md-6">
		                        <img className="img-fluid img-centered" src="img/portfolio/p-3.jpg" alt />
		                      </div>
		                      <div className="col-md-6">
		                        <p>Our new Project every processes had become fragmented; meaning quality and service were inconsistent. This lack of standardization was adversely impacting operating costs, productivity and customer satisfaction. For several years now Payfast has worked strategically with innovations as a means of developing new solutions, products and services. In line with this vision, Success was approached to find new payments solutions to offer Payfast customers on their website, including open invoice and partial payments options.</p>
		                        <ul className="list-inline item-details">
		                          <li>Client:
		                            <strong>
		                              <a href="#">Techs Soft</a>
		                            </strong>
		                          </li>
		                          <li>Date:
		                            <strong>
		                              <a href="#">April 2018</a>
		                            </strong>
		                          </li>
		                          <li>Service:
		                            <strong>
		                              <a href="#">Web Development</a>
		                            </strong>
		                          </li>
		                        </ul>
		                        <button className="btn btn-general btn-white" type="button" data-dismiss="modal">
		                          <i className="fa fa-times" /> Close
		                        </button>
		                      </div>
		                    </div>
		                  </div>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		        <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex={-1} role="dialog" aria-hidden="true">
		          <div className="modal-dialog" role="document">
		            <div className="modal-content">
		              <div className="close-modal" data-dismiss="modal">
		                <div className="lr">
		                  <div className="rl" />
		                </div>
		              </div>
		              <div className="container">
		                <div className="row">
		                  <div className="modal-body">
		                    <div className="title-bar">
		                      <div className="col-md-12">
		                        <h2 className="text-center">Our Project</h2>
		                        <div className="heading-border" />
		                      </div>
		                    </div>
		                    <div className="row">
		                      <div className="col-md-6">
		                        <img className="img-fluid img-centered" src="img/portfolio/p-4.jpg" alt />
		                      </div>
		                      <div className="col-md-6">
		                        <p>Our new Project every processes had become fragmented; meaning quality and service were inconsistent. This lack of standardization was adversely impacting operating costs, productivity and customer satisfaction. For several years now Payfast has worked strategically with innovations as a means of developing new solutions, products and services. In line with this vision, Success was approached to find new payments solutions to offer Payfast customers on their website, including open invoice and partial payments options.</p>
		                        <ul className="list-inline item-details">
		                          <li>Client:
		                            <strong>
		                              <a href="#">Techs Soft</a>
		                            </strong>
		                          </li>
		                          <li>Date:
		                            <strong>
		                              <a href="#">April 2018</a>
		                            </strong>
		                          </li>
		                          <li>Service:
		                            <strong>
		                              <a href="#">Web Development</a>
		                            </strong>
		                          </li>
		                        </ul>
		                        <button className="btn btn-general btn-white" type="button" data-dismiss="modal">
		                          <i className="fa fa-times" /> Close
		                        </button>
		                      </div>
		                    </div>
		                  </div>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		        <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex={-1} role="dialog" aria-hidden="true">
		          <div className="modal-dialog" role="document">
		            <div className="modal-content">
		              <div className="close-modal" data-dismiss="modal">
		                <div className="lr">
		                  <div className="rl" />
		                </div>
		              </div>
		              <div className="container">
		                <div className="row">
		                  <div className="modal-body">
		                    <div className="title-bar">
		                      <div className="col-md-12">
		                        <h2 className="text-center">Our Project</h2>
		                        <div className="heading-border" />
		                      </div>
		                    </div>
		                    <div className="row">
		                      <div className="col-md-6">
		                        <img className="img-fluid img-centered" src="img/portfolio/p-5.jpg" alt />
		                      </div>
		                      <div className="col-md-6">
		                        <p>Our new Project every processes had become fragmented; meaning quality and service were inconsistent. This lack of standardization was adversely impacting operating costs, productivity and customer satisfaction. For several years now Payfast has worked strategically with innovations as a means of developing new solutions, products and services. In line with this vision, Success was approached to find new payments solutions to offer Payfast customers on their website, including open invoice and partial payments options.</p>
		                        <ul className="list-inline item-details">
		                          <li>Client:
		                            <strong>
		                              <a href="#">Techs Soft</a>
		                            </strong>
		                          </li>
		                          <li>Date:
		                            <strong>
		                              <a href="#">April 2018</a>
		                            </strong>
		                          </li>
		                          <li>Service:
		                            <strong>
		                              <a href="#">Web Development</a>
		                            </strong>
		                          </li>
		                        </ul>
		                        <button className="btn btn-general btn-white" type="button" data-dismiss="modal">
		                          <i className="fa fa-times" /> Close
		                        </button>
		                      </div>
		                    </div>
		                  </div>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		        <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex={-1} role="dialog" aria-hidden="true">
		          <div className="modal-dialog" role="document">
		            <div className="modal-content">
		              <div className="close-modal" data-dismiss="modal">
		                <div className="lr">
		                  <div className="rl" />
		                </div>
		              </div>
		              <div className="container">
		                <div className="row">
		                  <div className="modal-body">
		                    <div className="title-bar">
		                      <div className="col-md-12">
		                        <h2 className="text-center">Our Project</h2>
		                        <div className="heading-border" />
		                      </div>
		                    </div>
		                    <div className="row">
		                      <div className="col-md-6">
		                        <img className="img-fluid img-centered" src="img/portfolio/p-6.jpg" alt />
		                      </div>
		                      <div className="col-md-6">
		                        <p>Our new Project every processes had become fragmented; meaning quality and service were inconsistent. This lack of standardization was adversely impacting operating costs, productivity and customer satisfaction. For several years now Payfast has worked strategically with innovations as a means of developing new solutions, products and services. In line with this vision, Success was approached to find new payments solutions to offer Payfast customers on their website, including open invoice and partial payments options.</p>
		                        <ul className="list-inline item-details">
		                          <li>Client:
		                            <strong>
		                              <a href="#">Techs Soft</a>
		                            </strong>
		                          </li>
		                          <li>Date:
		                            <strong>
		                              <a href="#">April 2018</a>
		                            </strong>
		                          </li>
		                          <li>Service:
		                            <strong>
		                              <a href="#">Web Development</a>
		                            </strong>
		                          </li>
		                        </ul>
		                        <button className="btn btn-general btn-white" type="button" data-dismiss="modal">
		                          <i className="fa fa-times" /> Close
		                        </button>
		                      </div>
		                    </div>
		                  </div>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>    
		        <div className="portfolio-modal modal fade" id="portfolioModal7" tabIndex={-1} role="dialog" aria-hidden="true">
		          <div className="modal-dialog" role="document">
		            <div className="modal-content">
		              <div className="close-modal" data-dismiss="modal">
		                <div className="lr">
		                  <div className="rl" />
		                </div>
		              </div>
		              <div className="container">
		                <div className="row">
		                  <div className="modal-body">
		                    <div className="title-bar">
		                      <div className="col-md-12">
		                        <h2 className="text-center">Our Project</h2>
		                        <div className="heading-border" />
		                      </div>
		                    </div>
		                    <div className="row">
		                      <div className="col-md-6">
		                        <img className="img-fluid img-centered" src="img/portfolio/p-7.jpg" alt />
		                      </div>
		                      <div className="col-md-6">
		                        <p>Our new Project every processes had become fragmented; meaning quality and service were inconsistent. This lack of standardization was adversely impacting operating costs, productivity and customer satisfaction. For several years now Payfast has worked strategically with innovations as a means of developing new solutions, products and services. In line with this vision, Success was approached to find new payments solutions to offer Payfast customers on their website, including open invoice and partial payments options.</p>
		                        <ul className="list-inline item-details">
		                          <li>Client:
		                            <strong>
		                              <a href="#">Techs Soft</a>
		                            </strong>
		                          </li>
		                          <li>Date:
		                            <strong>
		                              <a href="#">April 2018</a>
		                            </strong>
		                          </li>
		                          <li>Service:
		                            <strong>
		                              <a href="#">Web Development</a>
		                            </strong>
		                          </li>
		                        </ul>
		                        <button className="btn btn-general btn-white" type="button" data-dismiss="modal">
		                          <i className="fa fa-times" /> Close
		                        </button>
		                      </div>
		                    </div>
		                  </div>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		        <div className="portfolio-modal modal fade" id="portfolioModal8" tabIndex={-1} role="dialog" aria-hidden="true">
		          <div className="modal-dialog" role="document">
		            <div className="modal-content">
		              <div className="close-modal" data-dismiss="modal">
		                <div className="lr">
		                  <div className="rl" />
		                </div>
		              </div>
		              <div className="container">
		                <div className="row">
		                  <div className="modal-body">
		                    <div className="title-bar">
		                      <div className="col-md-12">
		                        <h2 className="text-center">Our Project</h2>
		                        <div className="heading-border" />
		                      </div>
		                    </div>
		                    <div className="row">
		                      <div className="col-md-6">
		                        <img className="img-fluid img-centered" src="img/portfolio/p-8.jpg" alt />
		                      </div>
		                      <div className="col-md-6">
		                        <p>Our new Project every processes had become fragmented; meaning quality and service were inconsistent. This lack of standardization was adversely impacting operating costs, productivity and customer satisfaction. For several years now Payfast has worked strategically with innovations as a means of developing new solutions, products and services. In line with this vision, Success was approached to find new payments solutions to offer Payfast customers on their website, including open invoice and partial payments options.</p>
		                        <ul className="list-inline item-details">
		                          <li>Client:
		                            <strong>
		                              <a href="#">Techs Soft</a>
		                            </strong>
		                          </li>
		                          <li>Date:
		                            <strong>
		                              <a href="#">April 2018</a>
		                            </strong>
		                          </li>
		                          <li>Service:
		                            <strong>
		                              <a href="#">Web Development</a>
		                            </strong>
		                          </li>
		                        </ul>
		                        <button className="btn btn-general btn-white" type="button" data-dismiss="modal">
		                          <i className="fa fa-times" /> Close
		                        </button>
		                      </div>
		                    </div>
		                  </div>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		        <div className="portfolio-modal modal fade" id="portfolioModal9" tabIndex={-1} role="dialog" aria-hidden="true">
		          <div className="modal-dialog" role="document">
		            <div className="modal-content">
		              <div className="close-modal" data-dismiss="modal">
		                <div className="lr">
		                  <div className="rl" />
		                </div>
		              </div>
		              <div className="container">
		                <div className="row">
		                  <div className="modal-body">
		                    <div className="title-bar">
		                      <div className="col-md-12">
		                        <h2 className="text-center">Our Project</h2>
		                        <div className="heading-border" />
		                      </div>
		                    </div>
		                    <div className="row">
		                      <div className="col-md-6">
		                        <img className="img-fluid img-centered" src="img/portfolio/p-9.jpg" alt />
		                      </div>
		                      <div className="col-md-6">
		                        <p>Our new Project every processes had become fragmented; meaning quality and service were inconsistent. This lack of standardization was adversely impacting operating costs, productivity and customer satisfaction. For several years now Payfast has worked strategically with innovations as a means of developing new solutions, products and services. In line with this vision, Success was approached to find new payments solutions to offer Payfast customers on their website, including open invoice and partial payments options.</p>
		                        <ul className="list-inline item-details">
		                          <li>Client:
		                            <strong>
		                              <a href="#">Techs Soft</a>
		                            </strong>
		                          </li>
		                          <li>Date:
		                            <strong>
		                              <a href="#">April 2018</a>
		                            </strong>
		                          </li>
		                          <li>Service:
		                            <strong>
		                              <a href="#">Web Development</a>
		                            </strong>
		                          </li>
		                        </ul>
		                        <button className="btn btn-general btn-white" type="button" data-dismiss="modal">
		                          <i className="fa fa-times" /> Close
		                        </button>
		                      </div>
		                    </div>
		                  </div>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		);
	}
}
export default Home;