import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Divider from '@material-ui/core/Divider'

const styles = theme => {
  return {
    root: {
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
      marginBottom: theme.spacing.double,
      maxWidth: 200
    }
  }
}

class LoginDialog extends React.PureComponent {
  render () {
    const { classes } = this.props
    return (
      <Paper className={classes.root}>
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
    )
  }
}

export default withStyles(styles)(LoginDialog)
