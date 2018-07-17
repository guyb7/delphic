import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import ChevronDownIcon from 'mdi-material-ui/ChevronDown'

import StatusCounter from './StatusCounter'

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
          <div className={classes.question}>
            <Typography>{question}</Typography>
            {
              questionFormat === 'radio' &&
              <FormControl component='fieldset' required className={classes.formControl}>
                <RadioGroup
                  className={classes.group}
                  value={answer}
                  onChange={() => {}}
                >
                  {
                    options.map(o =>
                      <FormControlLabel key={o.value} value={o.value} control={<Radio />} label={o.label} />
                    )
                  }
                </RadioGroup>
              </FormControl>
            }
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}

export default withStyles(styles)(Prediction)
