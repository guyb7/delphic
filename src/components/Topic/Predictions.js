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
          userAnswer: 'houston',
          correctAnswer: 'houston',
          stats: {
            houston: 273,
            los_angeles: 191
          }
        }, {
          id: 'aBc1W4',
          title: 'Game 2',
          status: 'answered',
          createdAt: 1531602000,
          lockTime: 1531602000,
          answerTime: 1531602000,
          resolveTime: 1531602000,
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
          userAnswer: 'houston',
          correctAnswer: 'los_angeles',
          stats: {
            houston: 223,
            los_angeles: 210
          }
        }, {
          id: 'aBc1W5',
          title: 'Game 3',
          status: 'answered',
          createdAt: 1531602000,
          lockTime: 1532120400,
          answerTime: 1532120400,
          resolveTime: 1532167200,
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
          userAnswer: 'los_angeles',
          correctAnswer: null,
          stats: null
        }, {
          id: 'aBc1W0',
          title: 'Game 4',
          status: 'open',
          createdAt: 1531602000,
          lockTime: 1532120400,
          answerTime: null,
          resolveTime: 1532167200,
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
          userAnswer: null,
          correctAnswer: null,
          stats: null
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
