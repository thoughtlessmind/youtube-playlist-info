import React from 'react'
import { Box, createStyles, makeStyles } from '@material-ui/core'
import SearchBar from '../components/SearchBar/SearchBar'
import Appbar from '../components/Appbar/Appbar'
import PlaylistTime from '../components/PlaylistTime/PlaylistTime'
import {
  PlaylistSeachSotre,
  StoreProvider,
} from '../global/Contexts/PlaylistDataContext'

const AppContainer = () => {
  const classes = useStyles()
  return (
    <StoreProvider>
      <Box className={classes.containerStyle}>
        <Appbar />
        <SearchBar />
        <PlaylistTime />
      </Box>
    </StoreProvider>
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
