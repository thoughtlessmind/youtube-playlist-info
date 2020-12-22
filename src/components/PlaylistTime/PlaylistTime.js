import React, { useContext, useEffect, useState } from 'react'
import {
  Box,
  makeStyles,
  createStyles,
  Typography,
  Paper,
} from '@material-ui/core'
import { getProperty, parseISODuration, secondToMinutes } from 'utils'
import { globalStore } from 'global/Contexts/PlaylistDataContext'
import Moment from 'react-moment'

const PlaylistTime = () => {
  const classes = useStyles()
  const { playlistSearchData, videosSearchData } = useContext(globalStore)
  const [calculateddTime, setCalculatedTime] = useState(null)
  const [first_n_LastVideo, setFirst_n_LastVideo] = useState({
    first: '',
    last: '',
  })
  console.log('playlistSearchData', playlistSearchData)

  const calculateTime = (searchData) => {
    let time = 0
    searchData.map(
      (data) => (time += parseISODuration(data.contentDetails.duration))
    )
    return time
  }

  useEffect(() => {
    setCalculatedTime(
      calculateTime(getProperty(videosSearchData, '.items', []))
    )

    if (Object.keys(videosSearchData).length > 0) {
      let sortedData = [...videosSearchData.items]
      sortedData.sort(function (a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt)
      })

      setFirst_n_LastVideo({
        last: sortedData[0].snippet.publishedAt,
        first: sortedData[sortedData.length - 1].snippet.publishedAt,
      })
    }
  }, [videosSearchData])

  return (
    <Box className={classes.mainContainer} component={Paper}>
      <Box>
        <Box className={classes.oneLineDataContainer}>
          <Typography component={'span'} color="textSecondary">
            Total Time -{' '}
          </Typography>
          <Typography variant="h4" component={'span'}>
            {secondToMinutes(calculateddTime)}
          </Typography>
        </Box>
        <Box className={classes.oneLineDataContainer}>
          <Typography component={'span'} color="textSecondary">
            Videos -
          </Typography>
          <Typography className={classes.secondaryText} variant="h5" component={'span'}>
            {getProperty(playlistSearchData, '.pageInfo.totalResults', '0')}
          </Typography>
        </Box>
        <Box className={classes.oneLineDataContainer}>
          <Typography component={'span'} color="textSecondary">
            First video -
          </Typography>
          <Typography className={classes.secondaryText} variant="h5" component={'span'}>
            <Moment format="MMM YYYY" withTitle>
              {first_n_LastVideo.first}
            </Moment>
          </Typography>
        </Box>
        <Box className={classes.oneLineDataContainer}>
          <Typography component={'span'} color="textSecondary">
            Last video -
          </Typography>
          <Typography className={classes.secondaryText} variant="h5" component={'span'}>
            <Moment  withTitle format="MMM YYYY">
              {first_n_LastVideo.last}
            </Moment>
          </Typography>
        </Box>
        <Box>
          {/* 
          <Box component={'ul'} className={classes.listStyle}>
            <Typography component={'li'}>
              <span>1.25x </span> - &nbsp; &nbsp;{secondToMinutes(calculateddTime / 1.25)}
            </Typography>
            <Typography component={'li'}>
              <span>1.5x </span> - &nbsp; &nbsp;{secondToMinutes(calculateddTime / 1.5)}
            </Typography>
            <Typography component={'li'}>
              <span>1.75x </span> - &nbsp; &nbsp;{secondToMinutes(calculateddTime / 1.75)}
            </Typography>
            <Typography component={'li'}>
              <span>2x  </span> - &nbsp; &nbsp;{secondToMinutes(calculateddTime / 2)}
            </Typography>
          </Box> 
          */}
        </Box>
      </Box>
      {/* {getProperty(playlistSearchData, '.items', []).map((item) => (
        <p key={item.etag}>{item.snippet.title}</p>
      ))} */}
    </Box>
  )
}

const useStyles = makeStyles((theme) =>
  createStyles({
    mainContainer: {
      padding: theme.spacing(4),
      backgroundColor: theme.custom.lightTransparentBackground,
    },
    listStyle: {
      listStyle: 'none',
      '& li>span': {
        width: theme.spacing(6),
        display: 'inline-block',
        color: theme.palette.text.secondary,
      },
    },
    oneLineDataContainer: {
      display: 'flex',
      alignItems: 'center',
      '& span:first-child ': {
        width: '100px',
        display: 'inline-block',
        textAlign: 'right',
        marginRight: '10px',
        whiteSpace: 'nowrap',
      },
    },
    secondaryText:{
      fontSize:'18px'
    }
  })
)

const areEqual = (prev, next) => {
  return false
}

export default React.memo(PlaylistTime, areEqual)
