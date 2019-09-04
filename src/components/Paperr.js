import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import RefreshIcon from '@material-ui/icons/Refresh';
import MinimizeIcon from '@material-ui/icons/Minimize';
import CloseIcon from '@material-ui/icons/Close';
import Tabss from './Tabss';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3,2),
    marginRight: '20%'
    
  },
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="inherit" component="h3">
          Open Orders  <RefreshIcon />  <MinimizeIcon/>   <CloseIcon/> 
        </Typography>

        
        
       
        
        <Typography component="p">
         No current active/open orders placed by CryptoHopper
        </Typography>
      </Paper>
      <br></br>

      <Tabss/>
      <br></br>
      <Paper className={classes.root}>
        <Typography variant="inherit" component="h3">
          Latest 5 sells      <RefreshIcon />
        <MinimizeIcon/>
        <CloseIcon/>    
        </Typography>

       
        
        <Typography component="p">
         No sell trades made yet
        </Typography>
      </Paper>

    </div>
  );
}