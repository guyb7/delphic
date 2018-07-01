import React from 'react'
import { withStyles } from '@material-ui/core/styles'

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

class ArenaPage extends React.PureComponent {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          404 :(
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(ArenaPage)
