import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import ReactPlaceholder from 'react-placeholder'

import Paper from '@material-ui/core/Paper'

import API from '../components/API/'
import ArenasHeader from '../components/Arenas/Header'
import ArenaItem from '../components/Arenas/Item'
import ArenasPlaceholder from '../components/Arenas/Placeholder'

const styles = theme => {
  return {
    root: {},
    container: {
      ...theme.utils.container,
      padding: theme.spacing.unit,
      paddingTop: theme.spacing.double,
      marginTop: theme.spacing.double
    }
  }
}

class ArenasPage extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      arenas: []
    }
  }

  componentDidMount () {
    API.get('/arenas')
      .then(res => {
        this.setState({ arenas: res.data, isLoading: false })
      })
  }

  render () {
    const { classes } = this.props
    const { isLoading, arenas } = this.state
    return (
      <div className={classes.root}>
        <ArenasHeader />
        <Paper className={classes.container} elevation={1}>
          <ReactPlaceholder
            customPlaceholder={ArenasPlaceholder}
            ready={!isLoading}
          >
            {
              arenas.map(t => <ArenaItem key={t.id} {...t} />)
            }
          </ReactPlaceholder>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(ArenasPage)
