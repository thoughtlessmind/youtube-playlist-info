import React, { useContext } from 'react'
import {
  makeStyles,
  createStyles,
  AppBar,
  Toolbar,
  Typography,
  Switch,
  Box,
} from '@material-ui/core'
import { globalStore } from 'global/Contexts/PlaylistDataContext'

const AppName = 'YouTube Playlist Info'

/**
 * App header bar
 */
const Appbar = () => {
  const classes = useStyles()
  const { dispatch, activeTheme } = useContext(globalStore)

  const handleThemeChange = (e) => {
    e.target.checked
      ? dispatch({ type: 'CHANGE_THEME', payload: 'dark' })
      : dispatch({ type: 'CHANGE_THEME', payload: 'light' })
  }
  
  return (
    <AppBar className={classes.appbarStyle} position="static">
      <Toolbar classes={{  root:  classes.toolbarRoot  }}>
        <Typography
          component={'a'}
          href="/"
          className={classes.appNameStyle}
          variant="h1"
        >
          {AppName}
        </Typography>
        <Box>
          {/* <Switch onChange={handleThemeChange} /> */}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

const useStyles = makeStyles((theme) =>
  createStyles({
    appbarStyle: {
      // backgroundColor: theme.palette.background.default,
    },
    appNameStyle: {
      fontSize: '1.3rem',
      wordSpacing: '1.5px',
      letterSpacing: '0.3px',
      textDecoration: 'none',
      color: '#fff',
    },
    toolbarRoot:   {
      justifyContent:   'space-between',
    },
  })
)

export default Appbar
