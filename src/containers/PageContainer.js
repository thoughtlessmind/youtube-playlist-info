import React from 'react'
import { Box, makeStyles, createStyles, Grid } from '@material-ui/core'
import SearchBar from 'components/SearchBar/SearchBar'
import PlaylistTime from 'components/PlaylistTime/PlaylistTime'
import PlaylistSummary from 'components/PlaylistSummary/PlaylistSummary'

const PageContainer = () => {
  const classes = useStyles()
  return (
    <Box className={classes.mainContainer}>
      <SearchBar />
      <Grid spacing={2} direction="row" container>
        <Grid item md={6}>
          <PlaylistTime />
        </Grid>
        <Grid item md={6}>
          <PlaylistSummary />
        </Grid>
    </Box>
  )
}

const useStyles = makeStyles((theme) =>
  createStyles({
    mainContainer: {
      padding: `0 ${theme.spacing(8)}px`,
    },
  })
)

export default PageContainer
