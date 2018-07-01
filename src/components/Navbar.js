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

const styles = theme => {
  return {
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: theme.spacing.penta,
      backgroundColor: theme.palette.background.paper
    },
    logo: {
      ...theme.utils.link,
      padding: theme.spacing.unit,
      paddingLeft: theme.spacing.double,
      paddingRight: theme.spacing.double
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
      userMenuAnchorEl: null
    }
  }

  onUserMenuClick = e => {
    this.setState({ userMenuAnchorEl: e.currentTarget })
  }

  onUserMenuClose = () => {
    this.setState({ userMenuAnchorEl: null })
  }

  render () {
    const { classes } = this.props
    const { userMenuAnchorEl } = this.state
    return (
      <div className={classes.root}>
        <Link className={classes.logo} to='/'>
          Delphic
        </Link>
        <div className={classes.buttons}>
          <Button className={classes.button} component={Link} to='/arenas'>
            Arenas
          </Button>
          <Button className={classes.button} component={Link} to='/leaderboard'>
            Leaderboard
          </Button>
          <div>
            <Button
              className={`${classes.button} ${classes.userMenuButton}`}
              onClick={this.onUserMenuClick}
            >
              Sign In
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
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Navbar)
