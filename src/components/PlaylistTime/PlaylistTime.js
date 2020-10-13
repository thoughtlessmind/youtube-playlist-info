import React, { useContext, useEffect, useState } from 'react'
import { Box, makeStyles, createStyles, Typography } from '@material-ui/core'
import { getProperty, parseISODuration, secondToMinutes } from 'utils'
import { globalStore } from 'global/Contexts/PlaylistDataContext'

const PlaylistTime = () => {
  const classes = useStyles()
  const { playlistSearchData, videosSearchData } = useContext(globalStore)
  const [calculateddTime, setCalculatedTime] = useState(null)
  console.log('playlistSearchData', playlistSearchData)

  const calculateTime = (searchData) => {
    let time = 0
    searchData.map((data, index) => {
      time += parseISODuration(data.contentDetails.duration)
    })
    return time
  }

  useEffect(() => {
    setCalculatedTime(
      calculateTime(getProperty(videosSearchData, '.items', []))
    )
  }, [videosSearchData])

  

  return (
    <Box>
      <Box>
        <Box style={{ display: 'flex', alignItems: 'center' }}>
          <Typography>
            Videos-
            {getProperty(playlistSearchData, '.pageInfo.totalResults', '0')}
          </Typography>
          <Typography>Total Time</Typography>
          <Typography variant="h4">
            {secondToMinutes(calculateddTime)}
          </Typography>
        </Box>
        <Box>
          <Box component={'ul'} className={classes.listStyle}>
            <Typography component={'li'}>
              <span>At 1.25x:-</span> {secondToMinutes(calculateddTime / 1.25)}
            </Typography>
            <Typography component={'li'}>
              <span>At 1.5x:-</span> {secondToMinutes(calculateddTime / 1.5)}
            </Typography>
            <Typography component={'li'}>
              <span>At 1.75x:-</span> {secondToMinutes(calculateddTime / 1.75)}
            </Typography>
            <Typography component={'li'}>
              <span>At 2x:- </span>
              {secondToMinutes(calculateddTime / 2)}
            </Typography>
          </Box>
        </Box>
        <Typography component="span" variant="body2">
          1x:
        </Typography>
        <Typography component="span" variant="body2">
          {secondToMinutes(calculateddTime / 2)}
        </Typography>
      </Box>
      {getProperty(playlistSearchData, '.items', []).map((item) => (
        <p key={item.etag}>{item.snippet.title}</p>
      ))}
    </Box>
  )
}

const useStyles = makeStyles((theme) =>
  createStyles({
    listStyle: {
      '& li>span': {
        width: '75px',
        display: 'inline-block',
      },
    },
  })
)

const areEqual = (prev, next) => {
  return false
}

export default React.memo(PlaylistTime, areEqual)
