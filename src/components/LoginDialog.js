import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

const styles = theme => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: theme.spacing.double
    },
    loginButtons: {
      marginTop: theme.spacing.unit,
      marginBottom: theme.spacing.double
    },
    loginButton: {
      margin: theme.spacing.unit
    },
    signupDividerContainer: {
      width: '100%',
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
    const {
      classes,
      isOpen,
      onClose
    } = this.props
    return (
      <Dialog
        open={isOpen}
        onClose={onClose}
      >
        <DialogContent>
          <div className={classes.root}>
            <Typography variant='body2'>
            Log in to Delphic
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
              Log in with your email
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
              Log in
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }
}

export default withStyles(styles)(LoginDialog)
