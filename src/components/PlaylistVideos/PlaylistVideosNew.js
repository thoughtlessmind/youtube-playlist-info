import React, { useContext } from 'react'
import {
  Paper,
  makeStyles,
  createStyles,
  Typography,
  Divider,
  Box,
} from '@material-ui/core'
import { getProperty } from 'utils'
import VideoCards from 'components/VideoCards/VideoCards'
import { globalStore } from 'global/Contexts/PlaylistDataContext'

const PlaylistVideosNew = () => {
  const classes = useStyles()
  const { videosSearchData, playlistId } = useContext(globalStore)

  return (
    <Paper className={classes.mainContainer}>
      <Box className={classes.headerContainer}>
        <Typography variant="h5">Videos</Typography>
        <Divider />
      </Box>
      <Box className={classes.videosConainer}>
        {getProperty(videosSearchData, '.items', []).map((item, index) => (
          <VideoCards
            key={item.id}
            videoId={item.id}
            index={index + 1}
            title={item.snippet.title}
            publishedAt={item.snippet.publishedAt}
            thumbnail={item.snippet.thumbnails.medium.url}
            viewCount={item.statistics.viewCount}
            likeCount={item.statistics.likeCount}
            listId={playlistId}
            duration={item.contentDetails.duration}
          />
        ))}
      </Box>
    </Paper>
  )
}

const useStyles = makeStyles((theme) =>
  createStyles({
    mainContainer: {
      padding: theme.spacing(2),
    },
    headerContainer: {
      marginBottom: theme.spacing(1),
      '& > h5': {
        marginBottom: theme.spacing(1),
      },
    },
    videosConainer: {
      maxHeight: '80vh',
      overflowY: 'scroll',
      overflowX: 'hidden',
    },
  })
)

export default PlaylistVideosNew
