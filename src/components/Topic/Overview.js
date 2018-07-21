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

class TopicOverview extends React.Component {
  render () {
    const { classes } = this.props
    const overviewMd = `
# NBA Finals 2018
Predictions for the 2018 finals: Cleveland vs Golden State

## Games

| Game    | Date    | Time | Home     | Away     |
| ------- | ------- | ---- | -------- | -------- |
| Game 1  | May 31  | 9 PM | Warriors | Cavs     |
| Game 2  | June 3  | 8 PM | Warriors | Cavs     |
| Game 3  | June 6  | 9 PM | Cavs     | Warriors |
| Game 4  | June 8  | 9 PM | Cavs     | Warriors |
| Game 5* | June 11 | 9 PM | Warriors | Cavs     |
| Game 6* | June 14 | 9 PM | Cavs     | Warriors |
| Game 7* | June 17 | 8 PM | Warriors | Cavs     |

_*If necessary._

Links for information and more on [GitHub](https://github.com/)

---------------

Footnote links: [Link 1](http://google.com/) [Link 2](http://google.com/) [Link 3](http://google.com/)

`

    return (
      <Paper className={classes.root} elevation={1}>
        <ReactMarkdown source={overviewMd} renderers={ThemeMd} />
      </Paper>
    )
  }
}

export default withStyles(styles)(TopicOverview)
