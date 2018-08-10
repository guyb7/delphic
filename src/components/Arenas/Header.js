import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Header from '../Header'

const styles = theme => {
  return {
    root: {},
    title: {
      paddingTop: theme.spacing.quad,
      paddingBottom: theme.spacing.quad,
      marginBottom: 0
    }
  }
}

class ArenasHeader extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <Header
        title='Arenas'
        classes={{
          root: classes.root,
          title: classes.title
        }}
      />
    )
  }
}

export default withStyles(styles)(ArenasHeader)
