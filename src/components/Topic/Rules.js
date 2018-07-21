import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import ReactMarkdown from 'react-markdown'

import Paper from '@material-ui/core/Paper'

import ThemeMd from '../../ThemeMd'

const styles = theme => {
  return {
    root: {
      width: '100%',
      padding: theme.spacing.double
    }
  }
}

class TopicRules extends React.Component {
  render () {
    const { classes } = this.props
    const rulesMd = `
# Rules

##### One account per participant
You cannot sign up to Delphic from multiple accounts and therefore you cannot submit from multiple accounts.


##### Submission Limits
You may submit a maximum of 1 prediction. Submissions are final and cannot be edited.

`

    return (
      <Paper className={classes.root} elevation={1}>
        <ReactMarkdown source={rulesMd} renderers={ThemeMd} />
      </Paper>
    )
  }
}

export default withStyles(styles)(TopicRules)
