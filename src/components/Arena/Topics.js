import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'

import TopicItem from './TopicItem'

const styles = theme => {
  return {
    root: {
      width: '100%',
      paddingTop: theme.spacing.double,
      paddingBottom: theme.spacing.double,
      display: 'flex',
      flexDirection: 'column'
    }
  }
}

class ArenaTopics extends React.Component {
  render () {
    const { classes } = this.props
    const topics = [
      {
        id: 'nba-finals-2018',
        title: 'NBA Finals 2018',
        description: 'Predictions for the 2018 finals: Cleveland vs Golden State',
        imageUrl: '/static/nba-finals.jpg',
        predictions: {
          total: 4,
          open: 2
        },
        leader: {
          username: 'bob',
          points: 14
        }
      }, {
        id: 'nba-finals-2017',
        title: 'NBA Finals 2017',
        description: 'Predictions for the 2017 finals: Cleveland vs Golden State',
        imageUrl: '/static/nba-finals-3.jpg',
        predictions: {
          total: 5,
          open: 1
        },
        leader: {
          username: 'pepe',
          points: 17
        }
      }, {
        id: 'nba-finals-2016',
        title: 'NBA Finals 2016',
        description: 'Predictions for the 2016 finals: Cleveland vs Golden State',
        imageUrl: '/static/nba-finals-2.png',
        predictions: {
          total: 4
        },
        leader: {
          username: 'bob',
          points: 19
        }
      }
    ]
    return (
      <Paper className={classes.root} elevation={1}>
        {
          topics.map(t => <TopicItem key={t.id} {...t} />)
        }
      </Paper>
    )
  }
}

export default withStyles(styles)(ArenaTopics)
