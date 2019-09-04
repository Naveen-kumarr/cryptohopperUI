import React, { Component } from 'react'
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
    render() {
        return (
            <div class = "container">
                <div class="row">
                    <div class="col-8" >
                        <div class="row">
                            <div class="col-6">
                            <Box marginTop="10%" marginRight="30%" color ="blue">
                            <h6 paddingBottom = "10%">
                                OPEN ORDERS
                            </h6>
                                </Box>
                            </div>
                            <div class="col-6">
                            <div style={{marginTop:"10%",marginLeft:"70%",color: "grey"}}>
                            <RefreshIcon float="right"/>
                            <MinimizeIcon float="right"/>
                            <CloseIcon float="right"/>
                            </div>
                            </div>
                            </div>
                        
                            
                        <Box marginTop="5%">
                            <h7>
                                No current active orders placed by CryptoHopper
                            </h7>
                        </Box>
                        <div style={{
                            marginTop:"9%",
                            padding:"0%"
                        }}>
                        <ul class="nav">
                            <li class="nav-item">
                            <a class="nav-link active " href="#">Open Position</a>
                            </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Short Position</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Reserved Funds</a>
                        </li>
                        </ul>
                        </div>
                        
                        <div class="row">
                            <div class="col-6">
                            <Box paddingTop="25%" >
                            <h6 paddingBottom= "5%" >
                                Latest 5 sells
                            </h6>
                            
                            </Box>
                        </div>
                        <div class="col-6">
                        <div style={{marginTop:"25%",marginLeft: "70%"}}>
                            <RefreshIcon float="right"/>
                            <MinimizeIcon float="right"/>
                            <CloseIcon float="right"/>
                        </div>
                        </div>
                        </div>
                        <Box>
                        <h7 paddingBottom = "15%">
                               No sell trades made yet
                            </h7>
                        </Box>

                        
                        
                        </div> 
                    <div class="col-4">
                        

                        <Box marginTop="5%">
                        <div class="row">
                            <div class="col-2">
                            <TrendingUpIcon/>
                    </div>
                        <div class="col-10">
                            <h6>
                                BTC INVESTED:
                            </h6>
                            <h6>
                                0.00000000000
                            </h6>
                            <h6>
                                TOTAL BTC RETURNS:
                            </h6>
                            <h6>
                                0.00000000000(0%)
                            </h6>
                            <a href="url">reset   | </a>
                            
                            <a href="url">info</a>
                            </div>
                            </div>
                        </Box>
                        <Divider marginTop = "5%"/>
                        <Box marginTop = "10%">
                        <div class="row">
                            <div class="col-2">
                        <AccountBalanceWalletIcon/>
                            </div>
                            <div class="col-10">
                            <h6>
                                Total BTC in assets on exchange:
                            </h6>
                            <h6>
                                0.00000000000(0%)  
                            </h6>
                            <h6>
                                Start balance:0.00000000
                                <a href="url">edit </a>
                            </h6>
                            
                            </div>
                        </div>
                        </Box>
                        <Divider/>

                        <Box marginTop = "10%">
                        <div class="row">
                            <div class="col-2">
                                <TrafficIcon/>
                            </div>
                            <div class="col-10">
                                <h6>
                                    Hopper is enabled
                                </h6>
                                <ToggleOnIcon></ToggleOnIcon>
                            </div>
                        </div>
                        <Divider/>
                        </Box>
                        <Box marginTop = "10%">
                        <div class="row">
                            <div class="col-2">
                                <GetAppIcon/>
                            </div>
                            <div class="col-10">
                                <h6>
                                    Buying is enabled
                                </h6>
                                <ToggleOnIcon></ToggleOnIcon>
                            </div>
                        </div>
                        <Divider/>
                        </Box>
                        <Box marginTop = "10%">
                        <div class="row">
                            <div class="col-2">
                                <PublishIcon/>
                            </div>
                            <div class="col-10">
                                <h6>
                                    Selling is enabled
                                </h6>
                                <ToggleOnIcon></ToggleOnIcon>
                            </div>
                        </div>
                        </Box>
                        </div>
                </div>
                
            </div>
        )
    }
}
export default Dashboard ;