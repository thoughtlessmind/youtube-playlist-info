import React, { useContext, useEffect } from 'react'
import { Box, makeStyles, createStyles, Grid } from '@material-ui/core'
import {
  PlaylistSummary,
  PlaylistTime,
  SearchBar,
  PlaylistVideosNew,
  VideoPlayer,
} from 'components'
import { globalStore } from 'global/Contexts/PlaylistDataContext'
import clsx from 'clsx'
// import PlaylistVideos from 'components/PlaylistVideos/PlaylistVideos'

const PageContainer = () => {
  const classes = useStyles()
  const { playingVideo } = useContext(globalStore)

  useEffect(()=>{
    console.log('playingVideo---0-bbbbbbbbbbbbbbbbbbbbbbbbbbbbb--------',playingVideo)
  },[playingVideo])

  console.log('///////////---------',Object.keys(playingVideo).length >0)

  return (
    <Box className={classes.mainContainer}>
      <SearchBar />
      <Grid spacing={2} direction="row" container>
        <Grid item xs={12} sm={6}>
          <PlaylistTime />
        </Grid>
        <Grid item xs={12} sm={6}>
          <PlaylistSummary />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={Object.keys(playingVideo).length >0  ? 6 : 12}>
          <PlaylistVideosNew />
        </Grid>
        <Grid
          item
          xs={6}
          className={clsx({ [classes.hide]: Object.keys(playingVideo).length ===0 })}
        >
          <VideoPlayer videoData={playingVideo} />
        </Grid>
      </Grid>
    </Box>
  )
}

const useStyles = makeStyles((theme) =>
  createStyles({
    mainContainer: {
      padding: `0 ${theme.spacing(8)}px`,
      width: '90vw',
      margin: '0 auto',
      maxWidth: '1200px',
    },
    [theme.breakpoints.down('md')]: {
      mainContainer: {
        padding: `0 ${theme.spacing(4)}px`,
        width: '99vw',
      },
    },
    [theme.breakpoints.down('xs')]: {
      mainContainer: {
        padding: `0 ${theme.spacing(1.5)}px`,
        width: '100vw',
      },
    },
    hide: {
      display: 'none',
    },
  })
)

export default PageContainer
