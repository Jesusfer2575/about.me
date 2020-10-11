import React, { Dispatch, SetStateAction } from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { useStyles } from './Navbar.styles';
import { Grid } from '@material-ui/core';

interface NavbarProps {
  toggleDrawer: Dispatch<SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ toggleDrawer }: NavbarProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => toggleDrawer(true)}
            >
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
                onClick={() => window.open('https://www.linkedin.com/in/adri%C3%A1n-fern%C3%A1ndez-aa5b78a4/')}
              >
                <LinkedInIcon />
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
    </div>
  );
};

export default Navbar;
