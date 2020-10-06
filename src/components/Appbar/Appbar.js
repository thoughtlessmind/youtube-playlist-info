import React from 'react'
import {
  makeStyles,
  createStyles,
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core'

const AppName = process.env.REACT_APP_NAME

/**
 * App header bar
 */
const Appbar = () => {
  const classes = useStyles()
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>{AppName}</Typography>
      </Toolbar>
    </AppBar>
  )
}

const useStyles = makeStyles(() => createStyles({}))

export default Appbar
