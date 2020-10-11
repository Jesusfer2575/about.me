import React, { MouseEvent } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import meImage from '../../assets/img/me.jpg';
import { useStyles } from './Avatar.styles';

export default function ImageAvatars() {
  const classes = useStyles();
  const redirectToWizeline = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.open('https://www.wizeline.com/');
  };

  return (
    <Grid className={classes.root} container spacing={0} direction="column" alignItems="center" justify="center">
      <Grid item xs={12}>
        <div className={classes.avatar}>
          <Avatar alt="Remy Sharp" src={meImage} className={classes.large} variant="circle" srcSet={meImage} />
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.section2}>
          <Typography variant="h3" gutterBottom align="center">
            Adrián Fernández Ramírez
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.section3}>
          <Typography variant="h6" gutterBottom align="center">
            {`Currently working at `}
            <Link href="https://www.wizeline.com/" onClick={redirectToWizeline} color="inherit">
              @Wizeline
            </Link>
            {`. Software Engineer who loves all the related stuff with computer science.
            Currently considering myself a Fullstack developer.
            I'm a React fan so this is why this site is built on that technology.
            Also, I'm TypeScript/Unit tester enthusiastic and competitive programmer amateur.`}
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
}
