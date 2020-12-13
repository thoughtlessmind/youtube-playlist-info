import React from 'react'
import { Box, makeStyles, createStyles, Grid } from '@material-ui/core'
import {
  PlaylistSummary,
  PlaylistTime,
  SearchBar,
  PlaylistVideosNew,
} from 'components'
import PlaylistVideos from 'components/PlaylistVideos/PlaylistVideos'

const PageContainer = () => {
  const classes = useStyles()
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
        <Grid item xs={12}>
          <PlaylistVideosNew />
        </Grid>
      </Grid>
    </Box>
  )
}

const useStyles = makeStyles((theme) =>
  createStyles({
    mainContainer: {
      padding: `0 ${theme.spacing(8)}px`,
      width: '80vw',
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
  })
)

export default PageContainer
