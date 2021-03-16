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
import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar';

import { useStyles } from './Navbar.styles';
import { Grid } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import useUserPreferencesContext from '../../store/UserPreferences/useUserPreferencesContext';

export interface State extends SnackbarOrigin {
  open: boolean;
}

interface NavbarProps {
  toggleDrawer: Dispatch<SetStateAction<boolean>>;
}

const email = 'ing.adrian94fdz@gmail.com';

const Navbar: React.FC<NavbarProps> = ({ toggleDrawer }: NavbarProps) => {
  const classes = useStyles();
  const { theme, setInverseTheme } = useUserPreferencesContext();
  const [isSwitchOn, setIsSwitchOn] = useState(theme === 'dark' ? true : false);
  const [snackbar, setSnackbar] = useState<State>({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = snackbar;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setSnackbar({ open: true, ...newState });
  };

  const handleClose = () => {
    setSnackbar({ ...snackbar, open: false });
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
                onClick={() => window.open('https://twitter.com/fernandzad')}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="linkedin.com"
                onClick={() => window.open('https://www.linkedin.com/in/fernandzad')}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="github.com"
                onClick={() => window.open('https://github.com/fernandzad')}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton color="primary" aria-label="email">
                <EmailIcon onClick={handleClick({ vertical: 'top', horizontal: 'center' })} />
                <Snackbar
                  anchorOrigin={{ vertical, horizontal }}
                  open={open}
                  onClose={handleClose}
                  ContentProps={{
                    'aria-describedby': 'email-id',
                  }}
                  message={<span id="email-id">{email}</span>}
                  key={vertical + horizontal}
                  color="primary"
                />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </Grid>
    </div>
  );
};

export default Navbar;
