import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

import RightIcon from 'mdi-material-ui/ChevronRight'

const styles = theme => {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.spacing.unit,
      marginLeft: theme.spacing.unit,
      fontSize: 12
    },
    item: {
      '&:not(:hover)': {
        opacity: 0.9
      }
    },
    link: {
      ...theme.utils.link,
      '&:not(:hover)': {
        opacity: 0.7
      }
    },
    icon: {
      fontSize: 16,
      marginLeft: theme.spacing.half,
      marginRight: theme.spacing.half
    }
  }
}

class Breadcrumbs extends React.PureComponent {
  render () {
    const { classes, items } = this.props
    return (
      <div className={classes.root}>
        {
          items.map((i, n) => {
            return (
              <React.Fragment key={n}>
                {
                  n > 0 && <RightIcon key={'icon' + n} className={classes.icon} />
                }
                {
                  i.path && (
                    <Link key={i.title} className={classes.link + ' ' + classes.item} to={i.path}>
                      {i.title}
                    </Link>
                  )
                }
                {
                  !i.path && (
                    <span key={i.title} className={classes.item}>
                      {i.title}
                    </span>
                  )
                }
              </React.Fragment>
            )
          })
        }
      </div>
    )
  }
}

export default withStyles(styles)(Breadcrumbs)
