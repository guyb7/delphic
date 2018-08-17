import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

const styles = theme => {
  return {
    form: {
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing.big,
      paddingTop: 0,
      paddingBottom: theme.spacing.quad
    },
    textField: {
      marginBottom: theme.spacing.double,
      maxWidth: 200
    },
    divider: {
      marginTop: theme.spacing.quad,
      marginBottom: theme.spacing.quad
    },
    forgotButton: {
      ...theme.utils.link
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
        <DialogTitle>Log in to Delphic</DialogTitle>
        <DialogContent>
          <div className={classes.form}>
            <TextField
              fullWidth
              autoFocus
              placeholder='Email'
              className={classes.textField}
            />
            <TextField
              fullWidth
              placeholder='Password'
              className={classes.textField}
              type='password'
            />
            <Button
              variant='contained'
              color='primary'
              className={classes.signupButton}
              onClick={onClose}
            >
              Log in
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }
}

export default withStyles(styles)(LoginDialog)
