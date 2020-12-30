import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,IconButton,Typography,Button,Toolbar,Grid,Slide} from '@material-ui/core';
import coverPic from './image/cover.jpg';
import CRCP from './component/CRCP'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  titleNav: {
    flexGrow: 1,
  },
  title: {
    color: 'white'
  },
  cover: {
    width:'100%',
    position:'fixed',
    background: `linear-gradient(0deg,rgba(0,0,0,0) 0,#000 100%), url(${coverPic}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    height: '100vh',
    overflow: 'hidden',
    zIndex: -1
  },
}));

function App() {
  const [page, setPage] = React.useState('home');
  const classes = useStyles();
  return (
    <div >
      <div className={classes.cover}></div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.titleNav}>
            TxCRCP-ME
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.root}>
        <Slide direction="up" in={page==='home'} mountOnEnter unmountOnExit>
          <Grid container spacing={5} alignItems="center" justify="center" direction={"column"} style={{height: 'calc(100vh - 64px)',width:'100%'}}>
            <Grid item>
              <Typography variant="h3" className={classes.title}>
                TxDOT Mechanistic-Empirical CRCP Design System
              </Typography>
            </Grid>
            <Grid container item alignItems="stretch" justify="center" direction={"column"} spacing={3} style={{width:'fit-content'}}>
              <Grid item>
                <Button variant="contained" color="primary" style={{width:'100%'}} onClick={()=>setPage('CRCP')}>CRCP Design</Button>
              </Grid>
              <Grid item>
                <Button variant="contained" style={{width:'100%'}}>Slab Support</Button>
              </Grid>
              <Grid item>
                <Button variant="contained" style={{width:'100%'}}>Product Disclaimer</Button>
              </Grid>
            </Grid>
          </Grid>
        </Slide>
        <Slide direction="up" in={page==='CRCP'} mountOnEnter unmountOnExit>
          <CRCP
              toMenu={()=>setPage('home')}
          />
        </Slide>
      </div>
    </div>
  );
}

export default App;