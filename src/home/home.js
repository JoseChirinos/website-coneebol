import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { HomeStyle } from './home.styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Home = (props)=>{
  const { classes } = props;
  return(
    <div>
      <Grid container>
        <Grid item xs={12} className={ classes.content }>
          <Grid container>
            <Grid item xs={12} className={ classes.headerImage }>
              <img
                className={ classes.headerLogo } 
                src="/assets/images/logo-new-oficial-strake.png"
                alt=""
              />
            </Grid>
            <Grid item xs={12} className={ classes.headerTitle }>
              <Typography variant="title" color="inherit" className={classes.headerTitle}>
                Congreso Nacional de Ingenieria Electrica y Electronica
              </Typography>
            </Grid>
            <Grid item xs={12} className={ classes.headerDate }>
              <Typography variant="title" color="inherit" className={classes.headerDate}>
                08 - 12
              </Typography>
              <Typography variant="title" color="inherit" className={classes.headerMonth}>
                Octubre
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
};

export default withStyles(HomeStyle)(Home);