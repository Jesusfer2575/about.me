import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import { useStyles } from './Setup.styles';
import mySetupImg from '../../assets/img/setup.jpg';
import { CardContent } from '@material-ui/core';

const Setup: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.root} container spacing={0} direction="column" alignItems="center" justify="center">
        <Grid item xs={12}>
          <div className={classes.section2}>
            <Typography variant="h3" gutterBottom align="center" color="secondary">
              My Developer Setup
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div>
            <Card className={classes.tabs}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  style={{ height: '100%', width: '100%' }}
                  image={mySetupImg}
                  title="My setup image"
                />
                <CardContent>
                  <Grid item xs={12}>
                    <div className={classes.section2}>
                      <Typography variant="h6" gutterBottom>
                        Hardware
                      </Typography>
                      <Typography variant="caption" gutterBottom>
                        <ul>
                          <li>Macbook Pro: 2020 13-inch, 2GHz Intel Core i5 4 cores</li>
                          <li>Keyboard Keychron K2</li>
                          <li>Magic mouse</li>
                          <li>BENQ 1920x1080</li>
                        </ul>
                      </Typography>
                    </div>
                    <div className={classes.section2}>
                      <Typography variant="h6" gutterBottom>
                        Software
                      </Typography>
                      <Typography variant="caption" gutterBottom>
                        <ul>
                          <li>
                            VS Code, some extensions:
                            <ul>
                              <li>ESLint</li>
                              <li>Prettier ESLint</li>
                              <li>Auto Close Tag/Auto Rename Tag</li>
                              <li>Bracket Pair Colorizer</li>
                              <li>GitLens — Git supercharged</li>
                              <li>Material Icon Theme</li>
                              <li>One Monokai Theme</li>
                            </ul>
                          </li>
                          <li>Git Kraken</li>
                          <li>iTerm</li>
                          <li>Postman</li>
                          <li>Android Studio</li>
                          <li>Altair GraphQL Client</li>
                          <li>Sublime Text 3</li>
                          <li>MySQL Server/Workbench</li>
                          <li>Slack</li>
                        </ul>
                      </Typography>
                    </div>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Setup;
