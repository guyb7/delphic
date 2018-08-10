import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'

const styles = theme => {
  return {
    root: {
      width: '100%',
      backgroundColor: theme.palette.primary.dark
    },
    container: {
      ...theme.utils.container,
      paddingLeft: theme.spacing.double,
      paddingRight: theme.spacing.double
    },
    title: {
      color: theme.palette.primary.contrastText,
      paddingTop: theme.spacing.quad
    },
    description: {
      color: theme.palette.primary.contrastText,
      paddingBottom: theme.spacing.double
    }
  }
}

class Header extends React.PureComponent {
  render () {
    const { classes, title, description, bottom } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <Typography className={classes.title} gutterBottom variant='headline' component='h2'>
            {title}
          </Typography>
          {
            description && (
              <Typography className={classes.description} component='p'>
                {description}
              </Typography>
            )
          }
          {bottom}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Header)
