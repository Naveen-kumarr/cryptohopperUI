import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
      <>
         
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
    </>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
      <>
    <div className="Your Hoppers py-3 row">
        <div className="col-md-6">
    <h1>Your Hoppers</h1>
    </div>
    <div className="col-md-6" >
        <div className="float" style={{float:"right"}}>
    <button type="button" class="btn btn-primary mr-2" style={{backgroundColor:'#0D1F47'}}>Subsciptions</button>
<button type="button" class="btn btn-secondary mr-2" style={{backgroundColor:'#0D1F47'}}>New</button>
<button type="button" class="btn btn-success" style={{backgroundColor:'#0D1F47'}}>Config Wizard</button>
</div>
    </div>
    </div>

    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Your Hoppers" {...a11yProps(0)} />
          <Tab label="Your Templates" {...a11yProps(1)} />
          <Tab label="Markets Templates" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <div class="card" style={{width: "18rem"}}>
 
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary" style={{backgroundColor:'#0D1F47'}}>Select</a>
    <a href="#" class="btn btn-primary ml-2" style={{backgroundColor:'#0D1F47'}}>Template Info.</a>
  </div>
</div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Your Templates
      </TabPanel>
      <TabPanel value={value} index={2}>
        Markets Templates
      </TabPanel>
    </div>
   </>
  );
}
