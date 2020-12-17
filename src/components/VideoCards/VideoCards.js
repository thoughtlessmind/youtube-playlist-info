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
import EventIcon from '@material-ui/icons/Event'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import { abbrNumber, parseISODuration, secondToMinutes } from 'utils'
import { globalStore } from 'global/Contexts/PlaylistDataContext'

const VideoCards = (props) => {
  const {
    index,
    thumbnail,
    title,
    publishedAt,
    likeCount,
    viewCount,
    videoId,
    duration,
  } = props
  const { playlistId } = useContext(globalStore)
  const classes = useStyles()

  const openVideoLink = () => {
    window.open(
      `https://youtube.com/watch?v=${videoId}&list=${playlistId}`,
      '_blank'
    )
  }

  return (
    <Grid
      container
      spacing={2}
      className={classes.cardContainer}
      onClick={openVideoLink}
    >
      {/* <Grid item md={1} xs={1}>
        <Typography variant="body2">{index}</Typography>
      </Grid> */}
      <Grid
        item
        xs={4}
        md={3}
        style={{ maxWidth: '200px', display: 'flex', alignItems: 'center' }}
      >
        <Box className={classes.imageWrapper}>
          <Typography
            component="span"
            variant="body2"
            className={`${classes.imageOverlay} ${classes.imageOverlayIndex}`}
          >
            {index}
          </Typography>
          <img width="100%" height="auto" src={thumbnail} />
          <Typography
            component="span"
            variant="body2"
            className={`${classes.imageOverlay} ${classes.imageOverlayTime}`}
          >
            {secondToMinutes(parseISODuration(duration))}
          </Typography>
        </Box>
      </Grid>
      <Grid item md={9} xs={8}>
        <Typography variant={'h6'} className={classes.videoTitle}>
          {title}
        </Typography>
        <Typography
          variant="caption"
          style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}
        >
          <Moment withTitle fromNow>
            {publishedAt}
          </Moment>
        </Typography>
        <Box className={classes.statsContainer}>
          <Typography variant="caption">
            <VisibilityIcon />
            {abbrNumber(viewCount, 0)}
          </Typography>
          <Typography variant="caption">
            <ThumbUpAltIcon />
            {abbrNumber(likeCount, 1)}
          </Typography>
        </Box>
      </Grid>
      <OpenInNewIcon className={classes.openIcon} />
    </Grid>
  )
}

const useStyles = makeStyles((theme) =>
  createStyles({
    cardContainer: {
      cursor: 'pointer',
      transition: 'background-color 0.2s',
      borderRadius: theme.shape.borderRadius,
      position: 'relative',
      marginTop: '8px',
      borderBottom: '1px solid #d8d6d6b8',
      '&:hover': {
        backgroundColor: '#e5e5e5',
        '& $openIcon': {
          transform: 'scale(1)',
        },
      },
    },
    imageWrapper: {
      width: 'fit-content',
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      '& > img': {
        borderRadius: theme.shape.borderRadius,
      },
    },
    imageOverlay: {
      position: 'absolute',
      background: 'rgba(0,0,0,0.8)',
      color: '#fff',
      padding: '5px',
      lineHeight: '0.8',
      fontSize: '12px',
      letterSpacing: '0.5px',
    },
    imageOverlayIndex: {
      top: '0',
      left: '0',
      borderRadius: theme.shape.borderRadius,
      // borderBottomRightRadius: theme.shape.borderRadius,
      // borderTopRighttRadius: theme.shape.borderRadius,
    },
    imageOverlayTime: {
      bottom: 5,
      right: 0,
      borderRadius: theme.shape.borderRadius,

      // borderBottomLeftRadius: theme.shape.borderRadius,
      // borderTopLeftRadius: theme.shape.borderRadius,
    },
    videoTitle:{
      display:'-webkit-box',
      WebkitLineClamp:'2',
      WebkitBoxOrient:'vertical',
      overflow:'hidden'
    },
    statsContainer: {
      display: 'flex',
      alignItems: 'center',
      marginTop: theme.spacing(0.5),
      '& > span': {
        display: 'flex',
        alignItems: 'center',
        marginRight: theme.spacing(3),
        '& > svg': {
          marginRight: theme.spacing(0.5),
          fontSize: '16px',
          color: 'gray',
        },
      },
    },
    openIcon: {
      position: 'absolute',
      bottom: '10px',
      right: '10px',
      transform: 'scale(0)',
      transition: 'transform 0.15s ease-in-out ',
    },
    [theme.breakpoints.down('sm')]: {
      videoTitle: {
        fontSize: '0.8rem',
      },
    },
    [theme.breakpoints.down('xs')]: {
      videoTitle: {
        fontSize: '0.8rem',
      },
    },
  })
)

VideoCards.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  likeCount: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  viewCount: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  videoId: PropTypes.string.isRequired,
}

export default VideoCards
