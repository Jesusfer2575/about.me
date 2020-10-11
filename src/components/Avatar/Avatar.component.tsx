import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import meImage from '../../assets/img/me.jpg';
import { useStyles } from './Avatar.styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

export default function ImageAvatars() {
  const classes = useStyles();
  const preventDefault = (event: any) => event.preventDefault();

  return (
    <Grid
      className={classes.gridMinHeight}
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <div className={classes.root}>
        <Avatar alt="Remy Sharp" src={meImage} className={classes.large} />
      </div>
      <Divider variant="middle" style={{ borderBottom: '1px, solid' }} />
      <div className={classes.section2}>
        <Typography variant="h3">Adrián Fernández Ramírez</Typography>
      </div>
      <div className={classes.section3}>
        <Typography variant="body1" align="center" gutterBottom>
          {`Currently working at `}
          <Link href="https://www.wizeline.com/" onClick={preventDefault} color="inherit">
            @Wizeline
          </Link>
          {`. Software Engineer who loves all the related stuff with computer science.
          I consider my self a Fullstack developer (unicorn).
          I've been developing for more than 5 years web applications using .NET/.NET Core
          and recently using Js technologies (React, Vue, Node) on professional projects.
          I am TypeScript/Unit tester enthusiastic and competitive programmer amateur.
          I was graduated from the Escuela Superior de Computo - IPN.`}
        </Typography>
      </div>
    </Grid>
  );
}
