import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import get from 'lodash/get'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import RightIcon from 'mdi-material-ui/ChevronRight'

import Header from '../Header'

const styles = theme => {
  return {
    root: {
      marginBottom: theme.spacing.quad
    },
    tabsRoot: {
      color: theme.palette.primary.contrastText
    },
    tabsIndicator: {
      backgroundColor: theme.palette.primary.contrastText,
      height: 3
    },
    breadcrumbs: {
      display: 'flex',
      alignItems: 'center'
    },
    link: {
      ...theme.utils.link,
      color: theme.palette.primary.contrastText
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

  tabs () {
    const { classes } = this.props
    const tab = get(this.props, 'match.params.section', 'topics')
    return (
      <Tabs
        value={tab}
        classes={{
          root: classes.tabsRoot,
          indicator: classes.tabsIndicator
        }}
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
    )
  }

  title () {
    const { classes } = this.props
    return (
      <span className={classes.breadcrumbs}>
        <Link className={classes.link} to='/a/nba'>
          NBA
        </Link>
        <RightIcon className={classes.breadcrumbsIcon} />
        NBA Finals 2018
      </span>
    )
  }

  render () {
    const { classes } = this.props
    return (
      <Header
        title={this.title()}
        description='Predictions for the 2018 finals: Cleveland vs Golden State'
        classes={{
          root: classes.root,
          container: classes.container,
          title: classes.title,
          description: classes.description
        }}
        bottom={this.tabs()}
      />
    )
  }
}

export default withStyles(styles)(withRouter(TopicHeader))
