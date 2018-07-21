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
          },
          allAnswers: [
            {
              user: 'pepe31',
              answer: 'houston'
            }, {
              user: 'Papa',
              answer: 'los_angeles'
            }, {
              user: 'george',
              answer: 'los_angeles'
            }, {
              user: 'gtgtgt',
              answer: 'houston'
            }, {
              user: 'pepe311',
              answer: 'houston'
            }, {
              user: 'Papa1',
              answer: 'los_angeles'
            }, {
              user: 'george1',
              answer: 'los_angeles'
            }, {
              user: 'gtgtgt1',
              answer: 'houston'
            }, {
              user: 'pepe312',
              answer: 'houston'
            }, {
              user: 'Papa2',
              answer: 'los_angeles'
            }, {
              user: 'george2',
              answer: 'los_angeles'
            }, {
              user: 'gtgtgt2',
              answer: 'houston'
            }, {
              user: 'pepe313',
              answer: 'houston'
            }, {
              user: 'Papa3',
              answer: 'los_angeles'
            }, {
              user: 'george3',
              answer: 'los_angeles'
            }, {
              user: 'gtgtgt3',
              answer: 'houston'
            }, {
              user: 'pepe314',
              answer: 'houston'
            }, {
              user: 'Papa4',
              answer: 'los_angeles'
            }, {
              user: 'george4',
              answer: 'los_angeles'
            }, {
              user: 'gtgtgt4',
              answer: 'houston'
            }
          ]
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
    const { classes, match } = this.props
    const { arena, topic } = match.params
    return (
      <div className={classes.root}>
        {
          this.state.predictions.map(p => <Prediction key={p.id} {...p} arena={arena} topic={topic} />)
        }
      </div>
    )
  }
}

export default withStyles(styles)(TopicPredictions)
