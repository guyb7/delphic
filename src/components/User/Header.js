import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const styles = theme => {
  return {
    root: {
      marginBottom: theme.spacing.quad
    }
  }
}

class UserHeader extends React.Component {
  render () {
    const { classes, username } = this.props
    return (
      <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant='headline' component='h2'>
            User: {username}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(withRouter(UserHeader))
