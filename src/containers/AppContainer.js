import React from 'react'
import { Box, createStyles, makeStyles } from '@material-ui/core'
import SearchBar from '../components/SearchBar/SearchBar'
import Appbar from '../components/Appbar/Appbar'
import PlaylistTime from '../components/PlaylistTime/PlaylistTime'
import { PlaylistSeachSotre } from '../global/Contexts/PlaylistDataContext'

const AppContainer = () => {
  const classes = useStyles()
  return (
    <Box className={classes.containerStyle}>
      <Appbar />
      <PlaylistSeachSotre>
        <SearchBar />
        <PlaylistTime />
      </PlaylistSeachSotre>
    </Box>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    containerStyle: {
      minHeight: '100vh',
    },
  })
)

export default AppContainer
