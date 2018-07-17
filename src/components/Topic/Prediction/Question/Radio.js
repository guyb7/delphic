import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'

const styles = theme => {
  return {
    root: {
    }
  }
}

class Question extends React.PureComponent {
  render () {
    const { classes, options, answer, disabled } = this.props
    return (
      <FormControl component='fieldset' className={classes.root}>
        <RadioGroup
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
    )
  }
}

export default withStyles(styles)(Question)
