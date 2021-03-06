import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HistoryIcon from '@material-ui/icons/History';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            NvestHopper
			<span style={{ position: "absolute", right: "10px" }}>
              <i class="fa fa-moon-o" aria-hidden="true" ></i></span>
            <span style={{ position: "absolute", right: "45px" }}>
              <i class="fa fa-comments-o" aria-hidden="true"></i></span>
            <span style={{ position: "absolute", right: "80px" }}>
              <i class="fa fa-user" aria-hidden="true"></i>
            </span>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <List>
        <ul class="list-group">
		  <Link to="/hopperlist" class="list-group-item">Your Hoppers</Link>
      <Link to="/Drawerr" class="list-group-item">Dashboard</Link>
      <Link to="/TradeHistory" class="list-group-item">Trade History</Link>
      <Link to="/Stats" class="list-group-item">Stats</Link>
      <Link to="/Charts" class="list-group-item">Charts</Link>
      <Link to="/BackTesting" class="list-group-item">Back Testing</Link>
      <Link to="/Strategies" class="list-group-item">Strategies</Link>
      <Link to="/Marketplace" class="list-group-item">Marketplace</Link>
      <Link to="/Config" class="list-group-item">Config</Link>
      <Link to="/Documentation" class="list-group-item">Documentation</Link>
      <Link to="/Questions" class="list-group-item">Questions</Link>

    </ul>
        </List>
        
        
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        
         <>
            <div className="TradeHistory py-3 heading" style={{backgroundColor:"#f7f7fe"}}>
                <h2> Trade History</h2>
                
             
            </div>
            
            <div className="search mt-3">
              <div className="row">
			  <div className="col-md-6">
			  <form class="form-inline">
  <div class="form-group mb-2">
    
  </div>
  <div class="form-group sm-3 mb-2" style={{width:"80%"}}>
    <input type="text" class="form-control" id="inputPassword2" placeholder="Search" style={{width:"100%"}}/>
  </div>
  <button type="submit" class="btn btn-primary mb-2" style={{width:"20%",backgroundColor:"#0D1F47"}}>Search</button>
</form>
</div>
<div className="col-md-6">
<span>Advance Search</span>
<button type="submit" class="btn btn-primary mb-2" style={{float:"right",backgroundColor:"#0D1F47"}}>Export</button>
</div>
			  
			  </div>
                

                </div>
                <div className="table">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Currency</th>
      <th scope="col">Pair</th>
      <th scope="col">Type</th>
      <th scope="col">Date</th>
      <th scope="col">Amount</th>
      <th scope="col">Rate</th>
      <th scope="col">Fee</th>
      <th scope="col">Total</th>
      <th scope="col">Result</th>
      <th scope="col">Trigger</th>
      <th scope="col">View</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      
    </tr>
    <tr>
      <th scope="row">3</th>
     
    </tr>
  </tbody>
</table>
                </div>
                </>
      </main>
    </div>
  );
}