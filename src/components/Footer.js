import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => {
  return {
    root: {
      ...theme.typography.caption,
      ...theme.utils.container,
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: theme.spacing.unit,
      minHeight: theme.spacing.huge
    },
    text: {
      padding: theme.spacing.unit,
      paddingLeft: 0
    },
    link: {
      ...theme.utils.link,
      padding: theme.spacing.unit,
      ...theme.typography.caption
    }
  }
}

class Footer extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.text}>
          &#169; 2018 Delphic
        </div>
        <div>
          <Link to='/about' className={classes.link}>About</Link>
          <Link to='/terms' className={classes.link}>Terms</Link>
          <Link to='/privacy' className={classes.link}>Privacy</Link>
          <Link to='/contact' className={classes.link}>Contact</Link>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Footer)
