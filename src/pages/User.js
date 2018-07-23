import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import UserHeader from '../components/User/Header'

const styles = theme => {
  return {
    root: {
      ...theme.utils.container,
      padding: theme.spacing.unit,
      paddingTop: theme.spacing.double
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }
}

class TopicPage extends React.Component {
  render () {
    const { classes, match } = this.props
    const username = match.params.user
    return (
      <div className={classes.root}>
        <UserHeader username={username} />
      </div>
    )
  }
}

export default withStyles(styles)(TopicPage)
