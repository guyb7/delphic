import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

import Breadcrumbs from '../components/Breadcrumbs'
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
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }
}

class ArenaPage extends React.Component {
  render () {
    const { classes, match } = this.props
    const { arena } = match.params
    const breadcrumbsItems = [
      {
        title: 'home',
        path: '/'
      }, {
        title: arena,
        path: null
      }
    ]
    return (
      <div className={classes.root}>
        <Breadcrumbs items={breadcrumbsItems} />
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
