import React, { MouseEvent } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import { useStyles } from './About.styles';

const About: React.FC = () => {
  const classes = useStyles();
  const redirectToIdom = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.open('https://www.idom.com/es/');
  };
  const redirectToWizeline = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.open('https://www.wizeline.com/');
  };

  return (
    <Grid className={classes.root} container spacing={0} direction="column" alignItems="center" justify="center">
      <Grid item xs={12}>
        <div className={classes.section1}>
          <Typography variant="h2">About me</Typography>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.section2}>
          <Typography variant="subtitle1" gutterBottom>
            {`Bachelor degree in Computer Systems Engineer, graduated from the Escuela Superior de Cómputo - 
            Instituto Politécnico Nacional.`}
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.section2}>
          <Typography variant="subtitle1" gutterBottom>
            {`With more than five years of professional experience as a Software Developer, 
            I love to keep learning new things, especially new programming technologies. 
            Most of my career I've been using .NET technoliges with C# as main language.`}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {`Now I work as software enginer `}
            <Link href="https://www.wizeline.com/" onClick={redirectToWizeline} color="inherit">
              @Wizeline
            </Link>
            {` and here I've been using on professional project JavaScript with libraries
            like React, Vue and recently on my last project with Angular on frontend.
            And in backend I've been using NodeJs with some other technologies, using GraphlQL
            to build API's, TypeScript with TypeGraphQL and TypeORM`}
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.section2}>
          <Typography variant="subtitle1" gutterBottom>
            {`I have worked for `}
            <Link onClick={redirectToIdom} color="inherit">
              @Idom Ingeniería
            </Link>
            {` as IT Consultant having client from government dependencies as the Secretaría de Economía.
            Previously I worked as Systems Analyst in Telcel developing on .NET technologies.`}
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.section2}>
          <Typography variant="subtitle1" gutterBottom>
            {`On my free time, I loves to solve competitive programming problems (Codechef, COJ, 
              Codeforces, etc.), I do have a study group in wizeline CDMX which consists of 
              solve this kind of problems every Friday.`}
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default About;
