import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'

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
    return (
      <div className={classes.root}>
        <Typography>{question}</Typography>
        {
          questionFormat === 'radio' &&
          <FormControl component='fieldset' className={classes.formControl}>
            <RadioGroup
              className={classes.group}
              value={answer}
              onChange={() => {}}
            >
              {
                options.map(o =>
                  <FormControlLabel
                    key={o.value}
                    value={o.value}
                    control={<Radio />}
                    label={o.label}
                    disabled={disabled}
                  />
                )
              }
            </RadioGroup>
          </FormControl>
        }
      </div>
    )
  }
}

export default withStyles(styles)(Question)
