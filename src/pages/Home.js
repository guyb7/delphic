import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Divider from '@material-ui/core/Divider'

const styles = theme => {
  return {
    root: {
    },
    container: {
      ...theme.utils.container,
      maxWidth: 900,
      padding: theme.spacing.double,
      paddingTop: theme.spacing.big,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    headlineContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'stretch',
      marginBottom: theme.spacing.huge
    },
    headline: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 2,
      paddingRight: theme.spacing.double
    },
    img: {
      maxWidth: 300,
      marginTop: theme.spacing.double
    },
    signup: {
      flexGrow: 1,
      textAlign: 'center',
      padding: theme.spacing.double,
      maxWidth: 350
    },
    loginButtons: {
      marginTop: theme.spacing.unit,
      marginBottom: theme.spacing.double
    },
    loginButton: {
      margin: theme.spacing.unit
    },
    signupDividerContainer: {
      display: 'flex',
      alignItems: 'center',
      marginTop: theme.spacing.triple,
      marginBottom: theme.spacing.triple
    },
    signupDivider: {
      flexGrow: 1
    },
    signupDividerText: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit
    },
    textField: {
      fontSize: 13,
      marginBottom: theme.spacing.unit
    }
  }
}

class Home extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.headlineContainer}>
            <div className={classes.headline}>
              <Typography variant='headline' component='h3'>
                Delphic
              </Typography>
              <Typography variant='subheading' component='h4'>
                Make predictions about things you know about
              </Typography>
              <img className={classes.img} src='/static/home-illustration.png' alt='Delphic Illustration' />
            </div>
            <Paper className={classes.signup}>
              <Typography variant='body2'>
                Sign up with one click
              </Typography>
              <Typography variant='caption'>
                We won’t share anything without your permission
              </Typography>
              <div className={classes.loginButtons}>
                <Button variant='outlined' color='primary' className={classes.loginButton}>
                  Google
                </Button>
                <Button variant='outlined' color='primary' className={classes.loginButton}>
                  Facebook
                </Button>
              </div>
              <div className={classes.signupDividerContainer}>
                <Divider className={classes.signupDivider} />
                <Typography className={classes.signupDividerText} variant='caption'>
                  or
                </Typography>
                <Divider className={classes.signupDivider} />
              </div>
              <Typography variant='body2'>
                Sign up with your email
              </Typography>
              <TextField
                fullWidth
                placeholder='Email'
                className={classes.textField}
              />
              <TextField
                fullWidth
                placeholder='Password'
                className={classes.textField}
                type='password'
              />
              <Button variant='contained' color='primary' className={classes.signupButton}>
                Create Account
              </Button>
            </Paper>
          </div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to={`/a/nba`}>NBA Arena</Link>
            </li>
            <li>
              <Link to={`/a/nba/topics/nba-finals-2018`}>NBA Finals 2018 Topic</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Home)
