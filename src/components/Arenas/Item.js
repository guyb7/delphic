import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'

const styles = theme => {
  return {
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      textDecoration: 'none',
      padding: theme.spacing.double,
      '&:hover': {
        backgroundColor: theme.palette.grey[100]
      }
    },
    arenaMain: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    image: {
      height: theme.spacing.big * 1.5,
      width: theme.spacing.big * 1.5,
      marginRight: theme.spacing.double,
      borderRadius: 0
    }
  }
}

class ArenaItem extends React.PureComponent {
  render () {
    const {
      classes,
      id,
      title,
      imageUrl,
      description
    } = this.props
    return (
      <Link className={classes.root} to={'/a/' + id}>
        <Avatar
          src={imageUrl}
          className={classes.image}
        />
        <div className={classes.arenaMain}>
          <div>
            <Typography variant='subheading' component='h3'>
              {title}
            </Typography>
            <Typography noWrap component='p'>
              {description}
            </Typography>
          </div>
        </div>
      </Link>
    )
  }
}

export default withStyles(styles)(ArenaItem)
