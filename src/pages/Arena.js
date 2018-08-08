import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

import ArenaHeader from '../components/Arena/Header'
import Topics from '../components/Arena/Topics'
import Leaderboard from '../components/Arena/Leaderboard'
import Rules from '../components/Arena/Rules'

const styles = theme => {
  return {
    root: {
      ...theme.utils.container,
      padding: theme.spacing.unit,
      paddingTop: theme.spacing.double
    }
  }
}

class ArenaPage extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <ArenaHeader />
        <Switch>
          <Route exact path='/a/:arena/topics' component={Topics} />
          <Route exact path='/a/:arena/leaderboard' component={Leaderboard} />
          <Route exact path='/a/:arena/rules' component={Rules} />
        </Switch>
      </div>
    )
  }
}

export default withStyles(styles)(ArenaPage)
