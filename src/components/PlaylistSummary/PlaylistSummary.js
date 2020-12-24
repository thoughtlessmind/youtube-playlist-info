import React, { useContext, useEffect } from 'react'
import {
  Box,
  makeStyles,
  createStyles,
  Typography,
  Paper,
} from '@material-ui/core'
import { globalStore } from 'global/Contexts/PlaylistDataContext'
import { abbrNumber, calculateTotalViews, getProperty } from 'utils'

const PlaylistSummary = () => {
  const classes = useStyles()
  const { playlistSearchData, videosSearchData } = useContext(globalStore)

  useEffect(() => {
    calculateTotalViews(getProperty(videosSearchData, '.items', []))
  }, [videosSearchData])

  return (
    <Box component={Paper} className={classes.mainContainer}>
      <Typography variant="h5">Playlist Summary</Typography>
      <Box>
        <Box className={classes.infoContainer}>
          <Typography color={"textSecondary"}>Videos - </Typography>
          <Typography>
            {getProperty(playlistSearchData, '.pageInfo.totalResults', '0')}
          </Typography>
        </Box>
        <Box className={classes.infoContainer}>
          <Typography color={"textSecondary"}>Total Views - </Typography>
          <Typography>
            {abbrNumber(
              calculateTotalViews(getProperty(videosSearchData, '.items', [])),
              2
            )}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme) =>
  createStyles({
    mainContainer: {
      padding: theme.spacing(4),
      height: '100%',
      // backgroundColor: theme.custom.lightTransparentBackground,
    },
    infoContainer: {
      display: 'flex',
      alignItems: 'center',
    },
  })
)

export default PlaylistSummary
