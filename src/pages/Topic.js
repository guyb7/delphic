import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

import TopicHeader from '../components/Topic/Header'
import Overview from '../components/Topic/Overview'
import Predictions from '../components/Topic/Predictions'
import Leaderboard from '../components/Topic/Leaderboard'
import Rules from '../components/Topic/Rules'

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
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <TopicHeader />
        <Switch>
          <Route exact path='/arenas/:arena/:topic/overview' component={Overview} />
          <Route exact path='/arenas/:arena/:topic/predictions' component={Predictions} />
          <Route exact path='/arenas/:arena/:topic/leaderboard' component={Leaderboard} />
          <Route exact path='/arenas/:arena/:topic/rules' component={Rules} />
        </Switch>
      </div>
    )
  }
}

export default withStyles(styles)(TopicPage)