import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import Theme from './Theme'

// Styled-Components like styles
const styled = Component => {
  return (style, options) => {
    function StyledComponent (props) {
      const { classes, className, ...other } = props
      return <Component className={classes.root + ' ' + className} {...other} />
    }
    const styles =
      typeof style === 'function' ? theme => ({ root: style(theme) }) : { root: style }
    return withStyles(styles, options)(StyledComponent)
  }
}

const StyledLink = styled(Link)({
  color: Theme.palette.primary[500],
  '&:not(:hover)': {
    textDecoration: 'none'
  }
})

export default {
  heading: ({ level, children }) => {
    return (
      <Typography variant='headline' component={`h${level}`}>
        {children}
      </Typography>
    )
  },
  link: ({ href, children }) => {
    return (
      <StyledLink to={'/redirect?to=' + href}>
        {children}
      </StyledLink>
    )
  },
  thematicBreak: () => {
    return <Divider />
  },
  table: ({ children, columnAlignment }) => {
    return <Table>{children}</Table>
  },
  tableHead: ({ children, columnAlignment }) => {
    return <TableHead>{children}</TableHead>
  },
  tableBody: ({ children, columnAlignment }) => {
    return <TableBody>{children}</TableBody>
  },
  tableRow: ({ children, isHeader, align }) => {
    return <TableRow>{children}</TableRow>
  },
  tableCell: ({ children, isHeader, align }) => {
    return <TableCell>{children}</TableCell>
  }
}
