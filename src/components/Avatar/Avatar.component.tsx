import React, { MouseEvent } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import meImage from '../../assets/img/me.jpg';
import { useStyles } from './Avatar.styles';

const AvatarComponent: React.FC = () => {
  const classes = useStyles();
  const redirectToWizeline = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.open('https://www.wizeline.com/');
  };

  return (
    <Grid className={classes.root} container spacing={0} direction="column" alignItems="center" justify="center">
      <Grid item xs={12}>
        <div className={classes.avatar}>
          <Avatar alt="Ad Fernadez" src={meImage} className={classes.large} variant="circle" />
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.section2}>
          <Typography variant="h3" gutterBottom align="center" color="secondary">
            Adrián Fernández Ramírez
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.section3}>
          <Typography variant="h6" gutterBottom align="center" color="secondary">
            {`Currently working at `}
            <Link href="https://www.wizeline.com/" onClick={redirectToWizeline} color="primary">
              @Wizeline
            </Link>
            {`. Software Engineer who loves all the related stuff with computer science.
            Mostly web developer, fullstack
            I'm a React fan, so I try to use it as far as I can.
            Last year trying Node Js on backed.
            Also, I'm TypeScript enthusiastic and an amateur competitive programmer.`}
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default AvatarComponent;
