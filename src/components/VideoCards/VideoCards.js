import React, { useContext } from 'react'
import {
  Box,
  makeStyles,
  createStyles,
  Grid,
  Typography,
} from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import EventIcon from '@material-ui/icons/Event';
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import { abbrNumber } from 'utils'
import { globalStore } from 'global/Contexts/PlaylistDataContext'

const VideoCards = (props) => {
  const { index, thumbnail, title, publishedAt, likeCount, viewCount, videoId } = props
  const { playlistId } = useContext(globalStore)
  const classes = useStyles()

  const openVideoLink = () =>{
    window.open(`https://youtube.com/watch?v=${videoId}&list=${playlistId}`, "_blank")
  }

  return (
    <Grid container spacing={2} className={classes.cardContainer} onClick={openVideoLink}>
      <Grid item md={1} xs={1}>
        <Typography>{index}</Typography>
      </Grid>
      <Grid item md={4} xs={4} style={{ maxWidth: '300px' }}>
        <img width="100%" height="auto" src={thumbnail} />
      </Grid>
      <Grid item md={7} xs={7}>
        <Typography variant={'h5'} className={classes.videoTitle}>
          {title}
        </Typography>
        <Typography variant="body2" style={{display:'flex', alignItems:'center'}}>
            {/* <EventIcon style={{marginRight: '8px',
            fontSize: '18px',
            color: 'gray',}}/> */}
          <Moment fromNow>{publishedAt}</Moment>
        </Typography>
        <Box className={classes.statsContainer}>
          <Typography variant="body2">
            <VisibilityIcon />
            {abbrNumber(viewCount, 0)}
          </Typography>
          <Typography variant="body2">
            <ThumbUpAltIcon />
            {abbrNumber(likeCount,1)}
          </Typography>
        </Box>
      </Grid>
      <OpenInNewIcon className={classes.openIcon}   />
    </Grid>
  )
}

const useStyles = makeStyles((theme) =>
  createStyles({
    cardContainer: {
      cursor: 'pointer',
      transition: 'background-color 0.2s',
      borderRadius: theme.shape.borderRadius,
      position:  'relative',
      '&:hover': {
        backgroundColor: 'rgb(70 70 70 / 12%)',
        '& $openIcon':{
          transform:'scale(1)'
        }
      },
    },
    statsContainer: {
      display: 'flex',
      alignItems: 'center',
      '& > p': {
        display: 'flex',
        alignItems: 'center',
        marginRight: theme.spacing(4),
        '& > svg': {
          marginRight: theme.spacing(1),
          fontSize: '18px',
          color: 'gray',
        },
      },
    },
    openIcon:  {
      position:  'absolute',
      bottom:  '10px',
      right:  '10px',
      transform:'scale(0)',
      transition: 'transform 0.15s ease-in-out '
    },
    [theme.breakpoints.down('sm')]: {
      videoTitle: {
        fontSize: '1.2rem',
      },
    },
    [theme.breakpoints.down('xs')]: {
      videoTitle: {
        fontSize: '1rem',
      },
    },
  })
)

VideoCards.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  likeCount: PropTypes.string.isRequired,
  viewCount: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  videoId: PropTypes.string.isRequired,
}

export default VideoCards
