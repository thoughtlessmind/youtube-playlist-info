import React from 'react'
import { Box, makeStyles, createStyles, Typography } from '@material-ui/core'
import ReactPlayer from 'react-player/youtube'

const VideoPlayer = (props) => {
  const { videoData } = props
  const classes = useStyles()

  return (
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
      <Box className={classes.videoDetailsContainer}>
        <Typography vairnat="h4">Video Title</Typography>
        <Typography>Video Description</Typography>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme) =>
  createStyles({
    videoDetailsContainer: {
      marginTop: theme.spacing(1),
    },
  })
)

export default VideoPlayer
