import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const styles = theme => {
  return {
    root: {
      display: 'flex'
    },
    correct: {
      '& *': {
        color: theme.palette.green[500] + ' !important'
      }
    },
    checked: {
      '& *': {
        color: theme.palette.primary[500] + ' !important'
      }
    },
    label: {
      flexGrow: 1
    },
    optionWithStats: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    stats: {
      fontSize: 12,
      minWidth: 100,
      textAlign: 'right'
    }
  }
}

class Question extends React.PureComponent {
  render () {
    const {
      classes,
      options,
      userAnswer,
      correctAnswer,
      disabled,
      stats,
      onChange
    } = this.props
    let totalAnswers = 0
    if (stats) {
      for (let k in stats) {
        totalAnswers += stats[k]
      }
    }
    return (
      <RadioGroup
        className={classes.root}
        value={userAnswer}
        onChange={e => onChange(e.target.value)}
      >
        {
          options.map(o => {
            const isCorrect = correctAnswer && o.value === correctAnswer
            let label = o.label
            if (stats) {
              const answers = stats[o.value]
              const answersPercent = totalAnswers === 0 ? 0 : Math.round(answers / totalAnswers * 100)
              label = <div className={classes.optionWithStats}>
                <span>{label}</span>
                <span className={classes.stats}>
                  {answers} users, {answersPercent}%
                </span>
              </div>
            }
            return <FormControlLabel
              key={o.value}
              className={classes.root}
              classes={{
                root: classes.root + ' ' + (isCorrect ? classes.correct : ''),
                label: classes.label
              }}
              value={o.value}
              control={
                <Radio classes={{ checked: disabled ? '' : classes.checked }} />
              }
              label={label}
              disabled={disabled}
            />
          }
          )
        }
      </RadioGroup>
    )
  }
}

export default withStyles(styles)(Question)
