import React from 'react'
import {
  Box,
  makeStyles,
  createStyles,
  Grid,
  Typography,
} from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import { abbrNumber } from 'utils'

const VideoCards = (props) => {
  const { index, thumbnail, title, publishedAt, likeCount, viewCount } = props
  const classes = useStyles()
  return (
    <Grid container spacing={2}>
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
        <Typography>
          <Moment fromNow>{publishedAt}</Moment>
        </Typography>
        <Box className={classes.statsContainer}>
          <Typography variant="body2">
            <VisibilityIcon />
            {abbrNumber(viewCount, 0)}
          </Typography>
          <Typography variant="body2">
            <ThumbUpAltIcon />
            {likeCount}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme) =>
  createStyles({
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
}

export default VideoCards
