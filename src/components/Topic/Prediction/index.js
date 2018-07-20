import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ChevronDownIcon from 'mdi-material-ui/ChevronDown'

import StatusCounter from './StatusCounter'
import Question from './Question/'
import Results from './Results'

const styles = theme => {
  return {
    root: {
      width: '100%',
      padding: theme.spacing.double
    },
    heading: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    question: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 2
    },
    results: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.palette.grey[400],
      backgroundColor: theme.palette.grey[100]
    }
  }
}

class Prediction extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      status: props.status,
      userAnswer: props.userAnswer,
      isSubmitting: false
    }
  }

  onChange = value => {
    console.log('Change', value)
    this.setState({
      userAnswer: value
    })
  }

  onSubmit = e => {
    e.preventDefault()
    this.setState({
      isSubmitting: true
    }, () => {
      console.log('Submit', this.props.id, this.state.userAnswer)
      setTimeout(() => {
        this.setState({
          isSubmitting: false,
          status: 'answered'
        })
      }, 800)
    })
  }

  render () {
    const {
      classes,
      title,
      createdAt,
      lockTime,
      answerTime,
      resolveTime,
      question,
      questionFormat,
      options,
      correctAnswer,
      stats
    } = this.props
    const {
      userAnswer,
      status,
      isSubmitting
    } = this.state
    const statusProps = {
      status,
      createdAt,
      lockTime,
      answerTime,
      resolveTime,
      isCorrect: correctAnswer ? userAnswer === correctAnswer : null
    }
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ChevronDownIcon />}>
          <div className={classes.heading}>
            <Typography>{title}</Typography>
            <StatusCounter {...statusProps} />
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Question
            className={classes.question}
            question={question}
            questionFormat={questionFormat}
            options={options}
            userAnswer={userAnswer}
            correctAnswer={correctAnswer}
            stats={stats}
            disabled={status !== 'open'}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            isSubmitting={isSubmitting}
          />
          {
            stats && <Results />
          }
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}

export default withStyles(styles)(Prediction)
