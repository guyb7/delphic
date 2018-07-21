import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import CssBaseline from '@material-ui/core/CssBaseline'
import { withStyles } from '@material-ui/core/styles'
import Theme from './Theme'

import Home from './pages/Home'
import Arena from './pages/Arena'
import Topic from './pages/Topic'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const styles = () => {
  return {
    root: {
      height: '100%',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: Theme.typography.fontSize
    }
  }
}

class App extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <MuiThemeProvider theme={Theme}>
        <CssBaseline />
        <Router>
          <div className={classes.root}>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Redirect exact from='/a/:arena' to='/a/:arena/topics' />
              <Route exact path='/a/:arena/:section' component={Arena} />
              <Redirect exact from='/a/:arena/topics/:topic' to='/a/:arena/topics/:topic/overview' />
              <Route exact path='/a/:arena/topics/:topic/:section' component={Topic} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default withStyles(styles)(App)
