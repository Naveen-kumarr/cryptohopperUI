import React, { Component } from 'react';
import PersonIcon from '@material-ui/icons/Person';
import { Box } from '@material-ui/core';
import Landing from '../components/Landing.css';
import {Link} from 'react-router-dom';


{/* <nav class="navbar navbar-light" style={{backgroundColor: "#e3f2fd"}}></nav> */}


class LandingPage extends Component {
    render() {
        return (
            
            <div class="full">
            <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-custom" >
            
  <a class="navbar-brand" href="#">CryptoHopper</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Pricing <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">Marketplace</a>
      </li>
      <li class="nav-item dropdown active">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Features
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Automatic Trading</a>
          <a class="dropdown-item" href="#">Mirror Trading</a>
          <a class="dropdown-item" href="#">Trailing Stops</a>
          <a class="dropdown-item" href="#">Paper Trading</a>
          <a class="dropdown-item" href="#">Strategy Designer</a>
          <a class="dropdown-item" href="#">Backtesting</a>
          <a class="dropdown-item" href="#">Exchanges</a>
          <a class="dropdown-item" href="#">All Features</a>
        </div>
      </li>
      <li class="nav-item dropdown active">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Resources
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Get Started</a>
          <a class="dropdown-item" href="#">Tutorials</a>
          <a class="dropdown-item" href="#">Documentation</a>
          <a class="dropdown-item" href="#">Academy</a>
          <a class="dropdown-item" href="#">Blog</a>
          <a class="dropdown-item" href="#">Helpdesk</a>
        </div>
      </li>
      <li class="nav-item dropdown active">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          About
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">About us</a>
          <a class="dropdown-item" href="#">Careers</a>
          <a class="dropdown-item" href="#">Press</a>
          <a class="dropdown-item" href="#">Contact</a>
        </div>
      </li>
      
    </ul>
    <form class="form-inline my-2 my-lg-0">
        <PersonIcon/>
      <Link to = "/login">
      <button class="btn btn-outline-success my-2 my-sm-0">Login</button></Link>
      <Link to = "/signup">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Signup</button></Link>
    </form>
  </div>
</nav>
<div class="container">
    <div class="row">
        <div class="col-6">
        <Box marginTop="10%">
    <h1 class = "heading1">
      The best automated <br></br>crypto trading bot</h1>
  <h2 class = "heading2">
    (It's emotionless,too)
  </h2>
  <p1 class ="paragraph1">Cryptohopper is a powerful automated crypto trading bot<br></br> that has helped 140,000+ traders to get results – now it<br></br> can help you to go to the moon, too!</p1>
  <br></br>
 <p2 class="paragraph2"> Fast automated trading, and portfolio management for<br></br> Bitcoin, Ethereum, Litecoin, and 100+ other<br></br> cryptocurrencies on the world’s top crypto exchanges</p2>
  <div class="buttons">
  <button type="button" class="btn btn-secondary1">Signup</button>
  <button type="button" class="btn btn-secondary2">Read more</button>
  </div>
 
    </Box>

        </div>
        <div class="col-6">
        <img data-aos="fade-left" src="https://cdn.cryptohopper.com/images/illustrations/landing_page_main_image.png" alt="Best crypto trading bot" class="img-responsive aos-init aos-animate"/>
            
        </div>
    </div>
    <div>
    
 </div> 
</div>
</div>
    )
    }
}
export default LandingPage;
