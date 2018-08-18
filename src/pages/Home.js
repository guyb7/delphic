import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'

import Signup from '../components/Signup'

const styles = theme => {
  return {
    root: {
    },
    container: {
      ...theme.utils.container,
      maxWidth: 900,
      padding: theme.spacing.double,
      paddingTop: theme.spacing.big,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    headlineContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'stretch',
      marginBottom: theme.spacing.huge
    },
    headline: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 2,
      paddingRight: theme.spacing.double
    },
    img: {
      maxWidth: 300,
      marginTop: theme.spacing.double
    }
  }
}

class Home extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.headlineContainer}>
            <div className={classes.headline}>
              <Typography variant='headline' component='h3'>
                Delphic
              </Typography>
              <Typography variant='subheading' component='h4'>
                Make predictions about things you know about
              </Typography>
              <img className={classes.img} src='/static/home-illustration.png' alt='Delphic Illustration' />
            </div>
            <Signup />
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Home)
