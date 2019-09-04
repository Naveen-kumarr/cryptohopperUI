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
            Config
        </h2>
		</div>
		 <h5>
          Hopper configuration
        </h5>
        <form>
  <div class="form-group">
    <label for="hoppername">Hopper Name</label>
    <input type="text" class="form-control" id="hoppername" aria-describedby="emailHelp"/>
    
  </div>
  <div class="form-group">
    <label for="exchange">Exchange</label>
    <input type="text" class="form-control" id="exchange"/>
  </div>
  <div class="form-group">
    <label for="percentagebid">Percentage Bid</label>
    <input type="text" class="form-control" id="percentagebid"/>
  </div>
  <div class="form-group">
    <label for="Maxbuy">Max open time to buy</label>
    <input type="text" class="form-control" id="Maxbuy"/>
  </div>
  <div class="form-group">
    <label for="maxposition">Max open position</label>
    <input type="text" class="form-control" id="maxposition"/>
  </div>
  <div class="form-group">
    <label for="Maxopen">Max percentage open position per coin</label>
    <input type="text" class="form-control" id="Maxopen"/>
  </div>
  <div class="form-group">
    <label for="coins">Coins</label>
    <input type="text" class="form-control" id="coins"/>
  </div>
  <div class="form-group">
    <label for="strategy">Strategy</label>
    <input type="text" class="form-control" id="strategy"/>
  </div>
  <div class="form-group">
    <label for="takeprofiy">Take Profit</label>
    <input type="text" class="form-control" id="takeprofiy"/>
  </div>
  <div class="form-group">
    <label for="maxsell">Max Open Time to sell</label>
    <input type="text" class="form-control" id="maxsell"/>
  </div>
  <div class="form-group">
    <label for="percentageask">Percentage Ask</label>
    <input type="text" class="form-control" id="percentageask"/>
  </div>
  
  <button type="submit" class="btn btn-primary" style={{backgroundColor: "#0D1F47"}}>Save</button>
</form>
      </main>
    </div>
  );
}