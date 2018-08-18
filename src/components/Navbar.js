import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

import AccountIcon from 'mdi-material-ui/Account'
import SettingsIcon from 'mdi-material-ui/Settings'
import LogoutIcon from 'mdi-material-ui/Logout'

import Logo from './Logo'
import LoginDialog from './LoginDialog'

const styles = theme => {
  return {
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: theme.spacing.penta,
      backgroundColor: theme.palette.background.paper
    },
    logoContainer: {
      ...theme.utils.link,
      padding: theme.spacing.unit,
      paddingLeft: theme.spacing.double,
      paddingRight: theme.spacing.double,
      display: 'flex',
      alignItems: 'center'
    },
    logo: {
      marginRight: theme.spacing.unit
    },
    buttons: {
      display: 'flex'
    },
    button: {
      fontSize: theme.typography.button.fontSize,
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit
    },
    userMenuButton: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark
      }
    },
    userMenu: {
      '&:focus': {
        outline: 'none'
      }
    },
    userMenuText: {
      fontSize: theme.typography.fontSize
    },
    userMenuIcon: {
      fontSize: theme.typography.title.fontSize,
      marginRight: 0
    }
  }
}

class Navbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      userMenuAnchorEl: null,
      isLoginOpen: false,
      isLoggedIn: false
    }
  }

  onUserMenuClick = e => {
    this.setState({ userMenuAnchorEl: e.currentTarget })
  }

  onUserMenuClose = () => {
    this.setState({ userMenuAnchorEl: null })
  }

  onLoginOpen = () => {
    this.setState({ isLoginOpen: true })
  }

  onLoginClose = () => {
    this.setState({ isLoginOpen: false })
  }

  getUserMenu () {
    const { classes } = this.props
    const { userMenuAnchorEl } = this.state
    return <div>
      <Button
        className={`${classes.button} ${classes.userMenuButton}`}
        onClick={this.onUserMenuClick}
      >
        Username
      </Button>
      <Menu
        open={Boolean(userMenuAnchorEl)}
        onClose={this.onUserMenuClose}
        anchorEl={userMenuAnchorEl}
        transitionDuration={0}
        className={classes.userMenu}
      >
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.userMenuIcon}>
            <AccountIcon />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.userMenuText }} inset primary='My Profile' />
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.userMenuIcon}>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.userMenuText }} inset primary='User Settings' />
        </MenuItem>
        <Divider />
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.userMenuIcon}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.userMenuText }} inset primary='Log out' />
        </MenuItem>
      </Menu>
    </div>
  }

  getGuestButton () {
    const { classes } = this.props
    const { isLoginOpen } = this.state
    return <div>
      <Button
        className={`${classes.button} ${classes.userMenuButton}`}
        onClick={this.onLoginOpen}
      >
        Sign In
      </Button>
      <LoginDialog
        isOpen={isLoginOpen}
        onClose={this.onLoginClose}
      />
    </div>
  }

  render () {
    const { classes } = this.props
    const { isLoggedIn } = this.state
    return (
      <div className={classes.root}>
        <Link className={classes.logoContainer} to='/'>
          <Logo className={classes.logo} /> Delphic
        </Link>
        <div className={classes.buttons}>
          <Button className={classes.button} component={Link} to='/arenas'>
            Arenas
          </Button>
          {
            isLoggedIn && this.getUserMenu()
          }
          {
            !isLoggedIn && this.getGuestButton()
          }
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Navbar)
