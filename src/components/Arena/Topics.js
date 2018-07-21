import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'

const styles = theme => {
  return {
    root: {
      width: '100%',
      padding: theme.spacing.double
    }
  }
}

class ArenaTopics extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <Paper className={classes.root} elevation={1}>
        <Link to='./topics/nba-finals-2018'>
          NBA Finals 2018
        </Link>
      </Paper>
    )
  }
}

export default withStyles(styles)(ArenaTopics)
