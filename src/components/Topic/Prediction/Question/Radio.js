import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const styles = theme => {
  return {
    root: {
    }
  }
}

class Question extends React.PureComponent {
  render () {
    const {
      classes,
      options,
      answer,
      disabled,
      onChange
    } = this.props
    return (
      <RadioGroup
        className={classes.root}
        value={answer}
        onChange={e => onChange(e.target.value)}
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
    )
  }
}

export default withStyles(styles)(Question)
