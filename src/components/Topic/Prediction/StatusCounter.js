import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import moment from 'moment'

const styles = theme => {
  return {
    root: {
      fontSize: 11
    },
    open: {
      color: theme.palette.text.primary
    },
    answered: {
      color: theme.palette.text.primary
    },
    correct: {
      color: theme.palette.green[50],
      backgroundColor: theme.palette.green[500],
      borderRadius: '1em',
      padding: theme.spacing.half,
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit
    },
    incorrect: {
      color: theme.palette.red[50],
      backgroundColor: theme.palette.red[500],
      borderRadius: '1em',
      padding: theme.spacing.half,
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit
    }
  }
}

class StatusCounter extends React.PureComponent {
  statusCorrect () {
    const { classes } = this.props
    return (
      <div className={`${classes.root} ${classes.correct}`}>
        Correct
      </div>
    )
  }

  statusResolved () {
    const { classes, isCorrect } = this.props
    let className = 'unknown'
    let text = 'Resolves soon'
    if (isCorrect === true) {
      className = classes.correct
      text = 'Correct'
    } else if (isCorrect === false) {
      className = classes.incorrect
      text = 'Incorrect'
    }
    return (
      <div className={`${classes.root} ${className}`}>
        {text}
      </div>
    )
  }

  countDown (toTimestamp, text, className) {
    const { classes } = this.props
    const timeLeft = moment(toTimestamp, 'X').fromNow(true)
    return (
      <div className={`${classes.root} ${className}`}>
        {text}: {timeLeft}
      </div>
    )
  }

  render () {
    const {
      classes,
      status,
      lockTime,
      resolveTime,
      isCorrect
    } = this.props
    if (isCorrect !== null) {
      return this.statusResolved()
    } else if (status === 'open') {
      return this.countDown(lockTime, 'Time to answer', classes.answered)
    } else if (status === 'answered') {
      return this.countDown(resolveTime, 'Result in', classes.answered)
    } else {
      console.error('Unknown status', status)
      return status
    }
  }
}

export default withStyles(styles)(StatusCounter)
