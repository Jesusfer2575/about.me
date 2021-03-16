import React, { MouseEvent } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import meImage from '../../assets/img/me.jpg';
import { useStyles } from './Avatar.styles';

interface CenteredTextProps {
  sectionClass: string;
  children: React.ReactNode;
}

const CenteredText: React.FC<CenteredTextProps> = ({ sectionClass, children }: CenteredTextProps) => {
  return (
    <div className={sectionClass}>
      <Typography variant="h6" gutterBottom align="center" color="secondary">
        {children}
      </Typography>
    </div>
  );
};

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
        <CenteredText sectionClass={classes.section3}>
          <>
            {`Currently working at `}
            <Link href="https://www.wizeline.com/" onClick={redirectToWizeline} color="primary">
              @Wizeline
            </Link>
            {`. Computer science is my profession and passion.
                I’m a software engineer with more than 6 years of professional experience working with 
                different teams developing smart solutions on the IT sector.
                `}
          </>
        </CenteredText>
        <CenteredText sectionClass={classes.section3}>
          {`
            I’m experienced in JavaScript/TypeScript, I’ve been involved in professional projects 
            using React and Angular on frontend and NodeJS, .NET/.NET Core on backend.
            I’m very passionate about algorithms and competitive programming. 
          `}
        </CenteredText>
        <CenteredText sectionClass={classes.section3}>
          {`
              I'm a Go/React fan.
              I built this site using React.
              I'm TypeScript enthusiastic.
            `}
        </CenteredText>
      </Grid>
    </Grid>
  );
};

export default AvatarComponent;
