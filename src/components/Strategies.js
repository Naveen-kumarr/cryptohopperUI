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
        <div className="heading">
        <h2>
            Strategies
        </h2>
		</div>
		 <button type="button" class="btn btn-raised btn-info float-right ml-3" style={{backgroundColor: "#0D1F47"}}>Documentation</button>
            <button type="button" class="btn btn-raised btn-info float-right " style={{backgroundColor: "#0D1F47"}}>New Strategy</button>
			 <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">My Strategies</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Market Strategies</a>
  </li>
  
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
    <h5>
      You do not have any Strategies
    </h5>
    <button type="button" class="btn btn-raised btn-primary" style={{backgroundColor: "#0D1F47"}}>Create a strategy now</button>
    <button type="button" class="btn btn-raised btn-secondary ml-2" style={{backgroundColor: "#0D1F47"}}>Read Documentation</button>
  </div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
    <h5>
      You have not downloaded any strategies from the Marketplace
    </h5>
    <button type="button" class="btn btn-raised btn-primary" style={{backgroundColor: "#0D1F47"}}>Go to the Marketplace</button>
    </div>
  
</div>
      </main>
    </div>
  );
}