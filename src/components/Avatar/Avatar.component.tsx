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
            <Link href="https://www.wizeline.com/" onClick={redirectToWizeline} color="inherit">
              @Wizeline
            </Link>
            {`. Software Engineer who loves all the related stuff with computer science.
            I consider myself a Fullstack developer.
            I'm a React and JavaScript fan (this is why this site has been built on that technology).
            Also, I'm TypeScript enthusiastic and competitive programmer amateur.`}
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default AvatarComponent;
