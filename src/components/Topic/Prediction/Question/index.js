import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Typography from '@material-ui/core/Typography'

import Radio from './Radio'

const styles = theme => {
  return {
    root: {
    },
    form: {
      display: 'flex',
      flexDirection: 'column'
    },
    submit: {
      alignSelf: 'start'
    }
  }
}

class Question extends React.PureComponent {
  render () {
    const {
      classes,
      className,
      question,
      questionFormat,
      options,
      answer,
      disabled,
      onChange,
      onSubmit,
      isSubmitting
    } = this.props
    let QuestionComponent
    if (questionFormat === 'radio') {
      QuestionComponent = Radio
    } else {
      QuestionComponent = <div />
    }
    return (
      <div className={`${className} ${classes.root}`}>
        <Typography>{question}</Typography>
        <form className={classes.form} onSubmit={onSubmit}>
          <FormControl component='fieldset'>
            <QuestionComponent
              options={options}
              answer={answer}
              disabled={disabled || isSubmitting}
              onChange={onChange}
            />
          </FormControl>
          {
            !disabled && (
              <Button
                variant='contained'
                color='primary'
                type='submit'
                className={classes.submit}
                disabled={answer === null || isSubmitting}
              >
               Submit
              </Button>
            )
          }
        </form>
      </div>
    )
  }
}

export default withStyles(styles)(Question)
