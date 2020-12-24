import React from 'react'
import {
  Box,
  makeStyles,
  createStyles,
  Typography,
  Paper,
} from '@material-ui/core'
import ReactPlayer from 'react-player/youtube'
import { getProperty } from 'utils'

const VideoPlayer = (props) => {
  const { videoData } = props
  const classes = useStyles()

  return (
    <Paper style={{ padding: '8px' }} className={classes.mainContainer}>
      <Box style={{ width: '100%', height: '300px' }}>
        <ReactPlayer
          controls={true}
          width="100%"
          height="100%"
          config={{
            youtube: {
              playerVars: { showinfo: 0 },
              controls: 1,
            },
          }}
          url={`https://youtu.be/${videoData.id}`}
        />
      </Box>
      <Box className={classes.videoDetailsContainer}>
        <Typography variant="h4">
          {getProperty(videoData, 'snippet.title', '')}
        </Typography>
        <Typography variant="body2" style={{ whiteSpace: 'pre-wrap' }}>
          {getProperty(videoData, 'snippet.description', '').substr(0, 200) +
            '...'}
        </Typography>
      </Box>
    </Paper>
  )
}

const useStyles = makeStyles((theme) =>
  createStyles({
    mainContainer: {
      backgroundColor: theme.custom.lightTransparentBackground,
      height: '100%',
    },
    videoDetailsContainer: {
      marginTop: theme.spacing(2),
      '&>h4': {
        fontSize: '1.7rem',
        marginBottom: theme.spacing(1),
        borderBottom: '1px solid #ddd',
      },
      '&>p': {
        whiteSpace: 'pre-wrap',
        maxHeight: '200px',
      },
    },
  })
)

export default VideoPlayer
