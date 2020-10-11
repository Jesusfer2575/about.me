import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { useStyles } from './Navbar.styles';
import { Container, Grid } from '@material-ui/core';

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid justify="center" xs={12}>
          <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Ad Fernández
              </Typography>
              <div className={classes.icon}>
                <IconButton aria-label="twitter.com" onClick={() => window.open('https://twitter.com/adfernvndez')}>
                  <TwitterIcon />
                </IconButton>
                <IconButton
                  aria-label="instagram.com"
                  onClick={() => window.open('https://www.instagram.com/adfernvndez/?hl=es')}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  aria-label="github.com"
                  onClick={() => window.open('https://github.com/Jesusfer2575?tab=repositories')}
                >
                  <GitHubIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
        </Grid>
      </Container>
    </div>
  );
}
