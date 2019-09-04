import React from 'react';
import logo from './logo.svg';
import {BrowserRouter,Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';
import Dashboard from './components/Dashboard';
//import { Drawer } from '@material-ui/core';
import Drawerr from './components/Drawerr';
import Strategies from './components/Strategies';
import Config from './components/Config';
import Questions from './components/Questions';
import Stats from './components/Stats';
import Documentation from './components/Documentation';
import Marketplace from './components/Marketplace';
import BackTesting from './components/BackTesting';
import Charts from './components/Charts';
import LandingPage from './components/LandingPage';
import TradeHistory from './components/TradeHistory';
import Hopperlist from './components/Hoppers';

function App() {
  return (
    <BrowserRouter>
    <div >
    <Route exact path="/" component={Drawerr} />
 <Route exact path="/hopperlist" component={Hopperlist} />
      <Route  exact path="/dashboard" component={Dashboard} />
      <Route exact path="/navbar" component={NavBar}/>
      <Route exact path="/drawerr" component={Drawerr}/>
      <Route exact path="/tradehistory" component={TradeHistory}/>
      <Route exact path="/config" component={Config}/>
      <Route exact path="/documentation" component={Documentation}/>
      <Route exact path="/marketplace" component={Marketplace}/>
      <Route exact path="/backtesting" component={BackTesting}/>
      <Route exact path="/charts" component={Charts}/>
      <Route exact path="/questions" component={Questions}/>
      <Route exact path="/strategies" component={Strategies}/>
      <Route exact path="/stats" component={Stats}/>
      



       
      
    </div>
    </BrowserRouter>
  );
}

export default App;
