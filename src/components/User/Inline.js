import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

import numeral from 'numeral'

import Tooltip from '@material-ui/core/Tooltip'
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = theme => {
  return {
    root: {
    },
    link: {
      ...theme.utils.link
    },
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.text.primary,
      boxShadow: theme.shadows[1],
      fontSize: 11,
      opacity: '1 !important'
    },
    tooltipList: {
      margin: 0,
      padding: 0,
      listStyleType: 'none'
    },
    tooltipListItem: {
      '& .title': {
        marginRight: theme.spacing.unit,
        fontWeight: 500
      }
    }
  }
}

class UserTooltip extends React.PureComponent {
  render () {
    const { classes, userData } = this.props
    if (!userData) {
      return <div>
        <CircularProgress size={14} />
      </div>
    }
    return (
      <div>
        <ul className={classes.list}>
          {
            userData.items.map(i => (
              <li key={i.title} className={classes.listItem}>
                <span className='title'>{i.title}:</span>
                <span>{numeral(i.value).format('0,0')}</span>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

class InlineUser extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      userData: null
    }
  }

  getUserData = () => {
    if (this.state.userData) {
      return
    }
    const { context } = this.props
    console.log('Fetch user data', { context })
    this.setState({
      userData: {
        items: [
          { title: 'XP', value: 1230 },
          { title: 'NBA Rank', value: 41 },
          { title: 'NBA Finals 2018 Rank', value: 7 }
        ]
      }
    })
  }

  render () {
    const { classes, username } = this.props
    const { userData } = this.state
    const userUrl = '/u/' + username
    return (
      <span className={classes.root} onMouseEnter={this.getUserData}>
        <Tooltip
          title={
            <UserTooltip
              classes={{
                list: classes.tooltipList,
                listItem: classes.tooltipListItem
              }}
              userData={userData}
            />
          }
          enterDelay={800}
          leaveDelay={200}
          disableFocusListener
          disableTouchListener
          classes={{ tooltip: classes.tooltip }}
        >
          <Link className={classes.link} to={userUrl}>
            {username}
          </Link>
        </Tooltip>
      </span>
    )
  }
}

export default withStyles(styles)(InlineUser)
