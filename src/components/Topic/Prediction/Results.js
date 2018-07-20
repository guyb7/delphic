import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.palette.grey[600],
      backgroundColor: theme.palette.grey[100]
    }
  }
}

class Results extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    const {
      classes
    } = this.props
    return (
      <div className={classes.root}>
        Results
      </div>
    )
  }
}

export default withStyles(styles)(Results)
