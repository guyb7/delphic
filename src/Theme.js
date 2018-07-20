import { createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import deepOrange from '@material-ui/core/colors/deepOrange'
import green from '@material-ui/core/colors/green'
import red from '@material-ui/core/colors/red'

const Theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: deepOrange,
    green,
    red,
    background: {
      paper: '#fff',
      default: '#dae0e6'
    },
    text: {
      primary: '#1a1a1b'
    }
  },
  spacing: {
    half: 4,
    unit: 8,
    unitHalf: 12,
    double: 16,
    triple: 24,
    quad: 32,
    penta: 48,
    big: 64,
    huge: 128
  },
  typography: {
    fontSize: 14,
    button: {
      fontSize: 13,
      textTransform: 'none'
    }
  },
  utils: {
    container: {
      maxWidth: 960,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    link: {
      textDecoration: 'none',
      color: '#1a1a1b',
      '&:hover': {
        color: blue[500]
      }
    }
  }
})

export default Theme
