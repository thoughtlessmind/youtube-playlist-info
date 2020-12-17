import React from 'react'
import {
  makeStyles,
  createStyles,
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core'

const AppName = 'YouTube Playlist Info'

/**
 * App header bar
 */
const Appbar = () => {
  const classes = useStyles()
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          component={'a'}
          href="/"
          className={classes.appNameStyle}
          variant="h1"
        >
          {AppName}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    appNameStyle: {
      fontSize: '1.3rem',
      wordSpacing: '1.5px',
      letterSpacing: '0.3px',
      textDecoration: 'none',
      color: '#fff',
    },
  })
)

export default Appbar
