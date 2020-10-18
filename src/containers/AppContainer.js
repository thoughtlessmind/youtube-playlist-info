import React from 'react'
import { Box, createStyles, makeStyles } from '@material-ui/core'
// import Appbar from '../components/Appbar/Appbar'
import {
  PlaylistSeachSotre,
  StoreProvider,
} from 'global/Contexts/PlaylistDataContext'
import PageContainer from './PageContainer'
import { Appbar } from 'components'

const AppContainer = () => {
  const classes = useStyles()
  return (
    <StoreProvider>
      <Box className={classes.appContainerStyle}>
        <Appbar />
        <PageContainer  />
      </Box>
    </StoreProvider>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    appContainerStyle: {
      minHeight: '100vh',
    },
  })
)

export default AppContainer
