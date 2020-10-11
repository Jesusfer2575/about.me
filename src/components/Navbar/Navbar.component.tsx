import React, { Dispatch, SetStateAction, useState } from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import EmailIcon from '@material-ui/icons/Email';
import Tooltip from '@material-ui/core/Tooltip';

import { useStyles } from './Navbar.styles';
import { Grid } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import useUserPreferencesContext from '../../store/UserPreferences/useUserPreferencesContext';

interface NavbarProps {
  toggleDrawer: Dispatch<SetStateAction<boolean>>;
}

const email = 'ing.adrian94fdz@gmail.com';

const Navbar: React.FC<NavbarProps> = ({ toggleDrawer }: NavbarProps) => {
  const classes = useStyles();
  const { theme, setInverseTheme } = useUserPreferencesContext();
  const [isSwitchOn, setIsSwitchOn] = useState(theme === 'dark' ? true : false);

  const handleAlert = () => {
    alert(email);
  };

  const handleChange = () => {
    theme === 'light' ? setInverseTheme('dark') : setInverseTheme('light');
    const isOn = isSwitchOn;
    setIsSwitchOn(!isOn);
  };

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="primary"
              aria-label="menu"
              onClick={() => toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title} color="secondary">
              {`() => 'Welcome!'`}
            </Typography>
            <FormControlLabel
              control={<Switch color="primary" checked={isSwitchOn} onChange={handleChange} />}
              label="Switch theme"
            />

            <div className={classes.icon}>
              <IconButton
                color="primary"
                aria-label="twitter.com"
                onClick={() => window.open('https://twitter.com/adfernvndez')}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="linkedin.com"
                onClick={() => window.open('https://www.linkedin.com/in/adri%C3%A1n-fern%C3%A1ndez-aa5b78a4/')}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="github.com"
                onClick={() => window.open('https://github.com/Jesusfer2575?tab=repositories')}
              >
                <GitHubIcon />
              </IconButton>
              <Tooltip title={email}>
                <IconButton color="primary" aria-label="email" onClick={handleAlert}>
                  <EmailIcon />
                </IconButton>
              </Tooltip>
            </div>
          </Toolbar>
        </AppBar>
      </Grid>
    </div>
  );
};

export default Navbar;
