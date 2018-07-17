import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Prediction from './Prediction/'

const styles = theme => {
  return {
    root: {
      width: '100%',
      padding: theme.spacing.double
    }
  }
}

class TopicPredictions extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      predictions: [
        {
          id: 'aBc1W3',
          title: 'Game 1',
          status: 'answered',
          createdAt: 1531602000,
          lockTime: 1531602000,
          answerTime: 1531602000,
          resolveTime: 1531602000,
          result: 'correct',
          question: 'Who will win?',
          questionFormat: 'radio',
          options: [
            {
              label: 'Houston',
              value: 'houston'
            }, {
              label: 'L.A.',
              value: 'los_angeles'
            }
          ],
          answer: 'houston'
        }, {
          id: 'aBc1W4',
          title: 'Game 2',
          status: 'answered',
          createdAt: 1531602000,
          lockTime: 1531602000,
          answerTime: 1531602000,
          resolveTime: 1531602000,
          result: 'incorrect',
          question: 'Who will win?',
          questionFormat: 'radio',
          options: [
            {
              label: 'Houston',
              value: 'houston'
            }, {
              label: 'L.A.',
              value: 'los_angeles'
            }
          ],
          answer: 'houston'
        }, {
          id: 'aBc1W5',
          title: 'Game 3',
          status: 'answered',
          createdAt: 1531602000,
          lockTime: 1532120400,
          answerTime: 1532120400,
          resolveTime: 1532167200,
          result: null,
          question: 'Who will win?',
          questionFormat: 'radio',
          options: [
            {
              label: 'Houston',
              value: 'houston'
            }, {
              label: 'L.A.',
              value: 'los_angeles'
            }
          ],
          answer: 'los_angeles'
        }, {
          id: 'aBc1W0',
          title: 'Game 4',
          status: 'open',
          createdAt: 1531602000,
          lockTime: 1532120400,
          answerTime: null,
          resolveTime: 1532167200,
          result: null,
          question: 'Who will win?',
          questionFormat: 'radio',
          options: [
            {
              label: 'Houston',
              value: 'houston'
            }, {
              label: 'L.A.',
              value: 'los_angeles'
            }
          ],
          answer: null
        }
      ]
    }
  }

  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        {
          this.state.predictions.map(p => <Prediction key={p.id} {...p} />)
        }
      </div>
    )
  }
}

export default withStyles(styles)(TopicPredictions)
