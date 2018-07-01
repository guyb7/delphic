import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const styles = theme => {
  return {
    root: {
      width: '100%',
      padding: theme.spacing.double
    }
  }
}

class TopicPredictions extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <Paper className={classes.root} elevation={1}>
        <Typography variant='headline' component='h3'>
          Predictions
        </Typography>
      </Paper>
    )
  }
}

export default withStyles(styles)(TopicPredictions)
