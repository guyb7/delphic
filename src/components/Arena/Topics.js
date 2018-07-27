import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'

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
      flexGrow: 1
    },
    topicRight: {
      color: theme.palette.text.primary,
      textDecoration: 'none',
      fontSize: 12
    },
    image: {
      height: theme.spacing.big * 1.5,
      width: theme.spacing.big * 1.5,
      marginRight: theme.spacing.double,
      borderRadius: 0
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
      description
    } = this.props
    return (
      <Link className={classes.topic} to={'./topics/' + id}>
        <Avatar
          src={imageUrl}
          className={classes.image}
        />
        <div className={classes.topicMain}>
          <Typography variant='subheading' component='h3'>
            {title}
          </Typography>
          <Typography noWrap component='p'>
            {description}
          </Typography>
        </div>
        <div className={classes.topicRight}>
          <div>81% Avg. Success</div>
          <div>4 Predictions</div>
          <div>1 Resolved</div>
          <div>2 Open</div>
        </div>
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
        imageUrl: '/static/nba-finals.jpg'
      }, {
        id: 'nba-finals-2017',
        title: 'NBA Finals 2017',
        description: 'Predictions for the 2017 finals: Cleveland vs Golden State',
        imageUrl: '/static/nba-finals-3.jpg'
      }, {
        id: 'nba-finals-2016',
        title: 'NBA Finals 2016',
        description: 'Predictions for the 2016 finals: Cleveland vs Golden State',
        imageUrl: '/static/nba-finals-2.png'
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
