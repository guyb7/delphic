import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import RightIcon from 'mdi-material-ui/ChevronRight'

import get from 'lodash/get'

const styles = theme => {
  return {
    root: {
      marginBottom: theme.spacing.quad
    },
    actions: {
      paddingBottom: 0
    },
    breadcrumbs: {
      display: 'flex',
      alignItems: 'center'
    },
    link: {
      ...theme.utils.link
    },
    breadcrumbsIcon: {
      fontSize: 28,
      marginLeft: theme.spacing.half,
      marginRight: theme.spacing.half
    }
  }
}

class TopicHeader extends React.Component {
  onTabChange = (event, value) => {
    const { url } = this.props.match
    const newUrl = url.replace(/\/[a-z]+$/, '/' + value)
    this.props.history.push(newUrl)
  }

  render () {
    const { classes } = this.props
    const tab = get(this.props, 'match.params.section', 'overview')
    return (
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.breadcrumbs} gutterBottom variant='headline' component='h2'>
            <Link className={classes.link} to='/a/nba'>
              NBA
            </Link>
            <RightIcon className={classes.breadcrumbsIcon} />
            NBA Finals 2018
          </Typography>
          <Typography component='p'>
            Predictions for the 2018 finals: Cleveland vs Golden State
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <Tabs
            value={tab}
            indicatorColor='primary'
            textColor='primary'
            onChange={this.onTabChange}
            scrollable
            scrollButtons='off'
          >
            <Tab label='Overview' value='overview' />
            <Tab label='Predictions' value='predictions' />
            <Tab label='Discussion' value='discussion' disabled />
            <Tab label='Leaderboard' value='leaderboard' />
            <Tab label='Rules' value='rules' />
          </Tabs>
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(styles)(withRouter(TopicHeader))
