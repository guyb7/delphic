import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import WinnerIcon from 'mdi-material-ui/Crown'

const styles = theme => {
  return {
    root: {
      width: '100%',
      paddingTop: theme.spacing.double,
      paddingBottom: theme.spacing.double,
      display: 'flex',
      flexDirection: 'column'
    },
    topic: {
      display: 'flex',
      justifyContent: 'space-between',
      textDecoration: 'none',
      padding: theme.spacing.double,
      paddingTop: theme.spacing.triple,
      paddingBottom: theme.spacing.triple,
      '&:hover': {
        backgroundColor: theme.palette.grey[100]
      }
    },
    topicMain: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    leader: {
      width: theme.spacing.big * 1.5,
      color: theme.palette.text.primary,
      textDecoration: 'none',
      textAlign: 'center'
    },
    leaderTitle: {
      color: theme.palette.text.hint,
      fontSize: 12,
      marginBottom: theme.spacing.double
    },
    winnerIcon: {
      color: theme.palette.amber[500],
      marginBottom: theme.spacing.unit
    },
    leaderName: {
      fontSize: 14,
      marginBottom: theme.spacing.unit
    },
    leaderPoints: {
      fontSize: 13,
      color: theme.palette.text.primary
    },
    image: {
      height: theme.spacing.big * 1.5,
      width: theme.spacing.big * 1.5,
      marginRight: theme.spacing.double,
      borderRadius: 0
    },
    statusPredictions: {
      color: theme.palette.text.primary,
      fontSize: 12,
      marginRight: theme.spacing.double
    },
    statusOpen: {
      fontSize: 12,
      color: theme.palette.common.white,
      backgroundColor: theme.palette.green[500],
      borderRadius: '1em',
      padding: theme.spacing.half,
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit
    }
  }
}

class Topic extends React.PureComponent {
  render () {
    const {
      classes,
      id,
      title,
      imageUrl,
      description,
      predictions,
      leader
    } = this.props
    return (
      <Link className={classes.topic} to={'./topics/' + id}>
        <Avatar
          src={imageUrl}
          className={classes.image}
        />
        <div className={classes.topicMain}>
          <div>
            <Typography variant='subheading' component='h3'>
              {title}
            </Typography>
            <Typography noWrap component='p'>
              {description}
            </Typography>
          </div>
          <div>
            <span className={classes.statusPredictions}>{predictions.total} Predictions</span>
            {
              predictions.open &&
              <span className={classes.statusOpen}>{predictions.open} Open</span>
            }
          </div>
        </div>
        {
          leader &&
          <div className={classes.leader}>
            {
              predictions.open
                ? <div className={classes.leaderTitle}>Current Leader</div>
                : <WinnerIcon className={classes.winnerIcon} />
            }
            <div className={classes.leaderName}>
              {leader.username}
            </div>
            <div className={classes.leaderPoints}>
              {leader.points} points
            </div>
          </div>
        }
      </Link>
    )
  }
}
const StyledTopic = withStyles(styles)(Topic)

class ArenaTopics extends React.Component {
  render () {
    const { classes } = this.props
    const topics = [
      {
        id: 'nba-finals-2018',
        title: 'NBA Finals 2018',
        description: 'Predictions for the 2018 finals: Cleveland vs Golden State',
        imageUrl: '/static/nba-finals.jpg',
        predictions: {
          total: 4,
          open: 2
        },
        leader: {
          username: 'bob',
          points: 14
        }
      }, {
        id: 'nba-finals-2017',
        title: 'NBA Finals 2017',
        description: 'Predictions for the 2017 finals: Cleveland vs Golden State',
        imageUrl: '/static/nba-finals-3.jpg',
        predictions: {
          total: 5,
          open: 1
        },
        leader: {
          username: 'pepe',
          points: 17
        }
      }, {
        id: 'nba-finals-2016',
        title: 'NBA Finals 2016',
        description: 'Predictions for the 2016 finals: Cleveland vs Golden State',
        imageUrl: '/static/nba-finals-2.png',
        predictions: {
          total: 4
        },
        leader: {
          username: 'bob',
          points: 19
        }
      }
    ]
    return (
      <Paper className={classes.root} elevation={1}>
        {
          topics.map(t => <StyledTopic key={t.id} {...t} />)
        }
      </Paper>
    )
  }
}

export default withStyles(styles)(ArenaTopics)
