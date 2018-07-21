import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'

const styles = theme => {
  return {
    root: {
    },
    container: {
      ...theme.utils.container,
      padding: theme.spacing.huge,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    headline: {
      marginBottom: theme.spacing.huge
    }
  }
}

class Home extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <Typography className={classes.headline} variant='headline' component='h3'>
            Delphic
          </Typography>
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
