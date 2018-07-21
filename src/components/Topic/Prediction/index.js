import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ChevronDownIcon from 'mdi-material-ui/ChevronDown'

import StatusCounter from './StatusCounter'
import Question from './Question/'
import AllAnswers from './AllAnswers'

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
    body: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
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
      arena,
      topic,
      title,
      createdAt,
      lockTime,
      answerTime,
      resolveTime,
      question,
      questionFormat,
      options,
      correctAnswer,
      stats,
      allAnswers
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
        <ExpansionPanelDetails className={classes.body}>
          <Question
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
            allAnswers && <AllAnswers
              options={options}
              answers={allAnswers}
              arena={arena}
              topic={topic}
            />
          }
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}

export default withStyles(styles)(Prediction)
