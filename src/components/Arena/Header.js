import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router'
import get from 'lodash/get'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import Header from '../Header'

const styles = theme => {
  return {
    root: {},
    title: {},
    description: {},
    tabsRoot: {
      color: theme.palette.primary.contrastText
    },
    tabsIndicator: {
      backgroundColor: theme.palette.primary.contrastText,
      height: 3
    }
  }
}

class ArenaHeader extends React.Component {
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
        <Tab label='Topics' value='topics' />
        <Tab label='Discussion' value='discussion' disabled />
        <Tab label='Leaderboard' value='leaderboard' />
        <Tab label='Rules' value='rules' />
      </Tabs>
    )
  }

  render () {
    const { classes } = this.props
    return (
      <Header
        title='NBA'
        description='All things NBA basketball'
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

export default withStyles(styles)(withRouter(ArenaHeader))
