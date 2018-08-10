import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'

import ArenasHeader from '../components/Arenas/Header'
import ArenaItem from '../components/Arenas/ArenaItem'

const styles = theme => {
  return {
    root: {},
    container: {
      ...theme.utils.container,
      padding: theme.spacing.unit,
      paddingTop: theme.spacing.double,
      marginTop: theme.spacing.double
    }
  }
}

const arenas = [
  {
    id: 'nba',
    title: 'NBA',
    description: 'All things NBA basketball',
    imageUrl: '/static/nba.png'
  }, {
    id: 'StockMarket',
    title: 'Stock Market',
    description: 'Long term, short term, we cover them all',
    imageUrl: '/static/finance.png'
  }, {
    id: 'oscars',
    title: 'The Oscars',
    description: 'Predictions for the Oscars, Emmy, and other awards',
    imageUrl: '/static/oscars.png'
  }, {
    id: 'gaming',
    title: 'Gaming',
    description: 'eSports predictions',
    imageUrl: '/static/gaming.png'
  }
]

class ArenasPage extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <ArenasHeader />
        <Paper className={classes.container} elevation={1}>
          {
            arenas.map(t => <ArenaItem key={t.id} {...t} />)
          }
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(ArenasPage)
