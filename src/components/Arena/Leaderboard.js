import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import InlineUser from '../User/Inline'

const styles = theme => {
  return {
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    table: {
      fontSize: 12
    },
    row: {
      height: 'auto'
    },
    cell: {
      padding: theme.spacing.unitHalf,
      borderBottom: '1px solid ' + theme.palette.grey[100]
    },
    button: {
      marginTop: theme.spacing.double
    }
  }
}

class UnstyledCell extends React.PureComponent {
  render () {
    const { classes, children, ...rest } = this.props
    return <TableCell className={classes.cell} {...rest}>{children}</TableCell>
  }
}
const Cell = withStyles(styles)(UnstyledCell)

class ArenaLeaderboard extends React.PureComponent {
  render () {
    const { classes, match } = this.props
    const { arena, topic } = match.params

    const answers = [
      {
        user: 'bob1',
        predictions: {
          correct: 4,
          incorrect: 1,
          unresolved: 2
        },
        score: 19
      }, {
        user: 'pepe',
        predictions: {
          correct: 4,
          incorrect: 1,
          unresolved: 1
        },
        score: 18
      }, {
        user: 'george',
        predictions: {
          correct: 3,
          incorrect: 0,
          unresolved: 2
        },
        score: 15
      }, {
        user: 'hector2',
        predictions: {
          correct: 3,
          incorrect: 1,
          unresolved: 2
        },
        score: 12
      }, {
        user: 'smetana',
        predictions: {
          correct: 2,
          incorrect: 3,
          unresolved: 1
        },
        score: 9
      }, {
        user: 'spat',
        predictions: {
          correct: 1,
          incorrect: 5,
          unresolved: 0
        },
        score: 5
      }
    ]
    const userContext = { arena, topic }

    return (
      <Paper className={classes.root} elevation={1}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow className={classes.row}>
              <Cell>Rank</Cell>
              <Cell>User</Cell>
              <Cell>Correct</Cell>
              <Cell>Incorrect</Cell>
              <Cell>Unresolved</Cell>
              <Cell>Score</Cell>
            </TableRow>
          </TableHead>
          <TableBody>
            {answers.map((n, i) => {
              return (
                <TableRow key={n.user} className={classes.row}>
                  <Cell component='th' scope='row'>
                    {i + 1}
                  </Cell>
                  <Cell>
                    <InlineUser username={n.user} context={userContext} />
                  </Cell>
                  <Cell>
                    {n.predictions.correct}
                  </Cell>
                  <Cell>
                    {n.predictions.incorrect}
                  </Cell>
                  <Cell>
                    {n.predictions.unresolved}
                  </Cell>
                  <Cell>
                    {n.score}
                  </Cell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(ArenaLeaderboard)
