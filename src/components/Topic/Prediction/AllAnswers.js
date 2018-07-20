import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'

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

class AllAnswers extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      showAll: false,
      optionsMap: props.options.reduce((acc, o) => {
        acc[o.value] = o.label
        return acc
      }, {})
    }
  }

  toggleShowAll = () => {
    this.setState({
      showAll: !this.state.showAll
    })
  }

  render () {
    const { classes } = this.props
    const {
      showAll,
      optionsMap
    } = this.state

    const answers = showAll ? this.props.answers : this.props.answers.slice(0, 10)

    return (
      <div className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow className={classes.row}>
              <Cell>Rank</Cell>
              <Cell>User</Cell>
              <Cell>Answer</Cell>
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
                    {n.user}
                  </Cell>
                  <Cell>
                    {optionsMap[n.answer]}
                  </Cell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
        <Button className={classes.button} onClick={this.toggleShowAll}>
          {showAll ? 'Show Less' : 'Show All'}
        </Button>
      </div>
    )
  }
}

export default withStyles(styles)(AllAnswers)
