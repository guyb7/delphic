import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'

import Radio from './Radio'

const styles = theme => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column'
    }
  }
}

class Question extends React.Component {
  render () {
    const { classes, question, questionFormat, options, answer, disabled } = this.props
    let QuestionComponent
    if (questionFormat === 'radio') {
      QuestionComponent = Radio
    } else {
      QuestionComponent = <div />
    }
    return (
      <div className={classes.root}>
        <Typography>{question}</Typography>
        <QuestionComponent
          options={options}
          answer={answer}
          disabled={disabled}
        />
      </div>
    )
  }
}

export default withStyles(styles)(Question)
