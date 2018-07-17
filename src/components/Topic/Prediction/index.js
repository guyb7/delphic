import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ChevronDownIcon from 'mdi-material-ui/ChevronDown'

import StatusCounter from './StatusCounter'
import Question from './Question/'

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
      flexDirection: 'column'
    }
  }
}

class Prediction extends React.PureComponent {
  render () {
    const {
      classes,
      title,
      status,
      createdAt,
      lockTime,
      answerTime,
      resolveTime,
      result,
      question,
      questionFormat,
      options,
      answer
    } = this.props
    const statusProps = {
      status,
      createdAt,
      lockTime,
      answerTime,
      resolveTime,
      result
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
            question={question}
            questionFormat={questionFormat}
            options={options}
            answer={answer}
            disabled={status !== 'open'}
          />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}

export default withStyles(styles)(Prediction)
