import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'

const styles = theme => {
  return {
    root: {
      ...theme.utils.container,
      padding: theme.spacing.unit,
      paddingTop: theme.spacing.double
    }
  }
}

class ArenasPage extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Typography variant='headline' component='h3'>
          Arenas
        </Typography>
      </div>
    )
  }
}

export default withStyles(styles)(ArenasPage)
