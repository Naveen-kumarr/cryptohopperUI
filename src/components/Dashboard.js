import React, { Component } from 'react'
import Switch from "react-switch";
import { Drawer, Paper, Typography, Box, Divider } from '@material-ui/core';
import Drawerr from './Drawerr';
import RefreshIcon from '@material-ui/icons/Refresh';
import MinimizeIcon from '@material-ui/icons/Minimize';
import CloseIcon from '@material-ui/icons/Close';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import TrafficIcon from '@material-ui/icons/Traffic';
import ToggleOnIcon from '@material-ui/icons/ToggleOn';
import GetAppIcon from '@material-ui/icons/GetApp';
import PublishIcon from '@material-ui/icons/Publish';



class Dashboard extends Component {
	constructor() {
    super();
    this.state = { checked: false,
checkedone:true,
checkedtwo:true	};
    this.handleChange = this.handleChange.bind(this);
	    this.handleChangeone = this.handleChangeone.bind(this);
		    this.handleChangetwo = this.handleChangetwo.bind(this);
  }
 
  handleChange(checked) {
    this.setState({ checked });
  }
    handleChangeone(checkedone) {
    this.setState({ checkedone });
  }
    handleChangetwo(checkedtwo) {
    this.setState({ checkedtwo });
  }
    render() {
        return (
         <div>
		<div className="heading">
		<h2>Dashboard</h2>
		</div>
		<div className="row">
		<div className="col-md-8">
		<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Open positions</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Short Positions</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Reserved Funds</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
</div>
		</div>
		<div className="col-md-4">
		<div class="card">
  <div class="card-body">
    <h6 class="card-title">BTC INVESTED</h6>
    <h6 class="card-text"><b>0.09970360</b></h6>
	<p>TOTAL BTC RETURNS:</p>
	<h4 style={{color:"red"}}>-0.01601307(-0.00%)</h4>
    <button class="btn btn-primary" style={{backgroundColor:"#0D1F47"}}>Reset</button>
	<button class="btn btn-primary ml-2" style={{backgroundColor:"#0D1F47"}}>Info</button>
  </div>
</div>

<div class="card my-3">
  <div class="card-body">
    <h5 class="card-title">Paper Trading</h5>
    <p class="card-text">Exchange:<b>Binance</b></p>
    <button class="btn btn-primary" style={{backgroundColor:"#0D1F47"}}>Deposite</button>
	<button class="btn btn-primary ml-2" style={{backgroundColor:"#0D1F47"}}>Withdraw</button>
  </div>
</div>

<div class="card">
  <div class="card-body">
    <h5 class="card-title"><span style={{color:"red"}}>HOPPER IS DISABLED</span></h5>
	<label>
        <Switch onChange={this.handleChange} checked={this.state.checked} />
      </label>
	<br/><br/>
	<hr/>
    <h5 class="card-title"><span style={{color:"green"}}>BUYING IS ENABLED</span></h5>
	<label>
        <Switch onChange={this.handleChangeone} checked={this.state.checkedone} />
      </label>
	<br/><br/>
	<hr/>
	<h5 class="card-title"><span style={{color:"green"}}>SELLING IS ENABLED</span></h5>
	<label>
        <Switch onChange={this.handleChangetwo} checked={this.state.checkedtwo} />
      </label>
	<br/><br/>
	<hr/>
  </div>
</div>
		</div>
		</div>
		</div>		 
        )
    }
}
export default Dashboard ;