import React, { useContext, useEffect, useState } from 'react'
import {
  Paper,
  makeStyles,
  createStyles,
  Typography,
  Divider,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core'
import SwapVertIcon from '@material-ui/icons/SwapVert'
import { getProperty, parseISODuration } from 'utils'
import VideoCards from 'components/VideoCards/VideoCards'
import { globalStore } from 'global/Contexts/PlaylistDataContext'

const PlaylistVideosNew = () => {
  const classes = useStyles()
  const { videosSearchData, playlistId } = useContext(globalStore)
  const [allVideos, setAllVideos] = useState([])
  const [sortValue, setSortValue] = useState("")

  const handleSortChange = (e) => {
    setSortValue(e.target.value)
    setAllVideos(prev => sortVideos(prev, e.target.value))
    // console.log(sortVideos(allVideos))
  }


  const sortVideos = (videoData, sortBy) => {
    const data = [].concat(videoData).sort((a,b)=>(parseInt(a.statistics.viewCount) < parseInt(b.statistics.viewCount )? 1 : -1))
    let sortedData = [...videoData]
    if(sortBy === 0) {
      sortedData.sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt);
      });
    } else if(sortBy === 1){
      sortedData.sort((a,b)=>(parseISODuration(a.contentDetails.duration) < parseISODuration(b.contentDetails.duration )? 1 : -1))
    }else if(sortBy ===2){
      sortedData.sort((a,b)=>(parseInt(a.statistics.likeCount) < parseInt(b.statistics.likeCount )? 1 : -1))
    } else if(sortBy === 3){
      sortedData.sort((a,b)=>(parseInt(a.statistics.viewCount) < parseInt(b.statistics.viewCount )? 1 : -1))
    } else {
      sortedData.length = 0
      sortedData = getProperty(videosSearchData, '.items', [])
    }
    console.clear()
    console.log({videoData, sortBy})
    console.log({sortedData})
    return sortedData
  }

  useEffect(() => {
    setAllVideos(getProperty(videosSearchData, '.items', []))
  }, [videosSearchData])

  useEffect(() => {console.log('all videos-------', allVideos)},[allVideos])

  return (
    <Paper className={classes.mainContainer}>
        <Box className={classes.headerContainer}>
          <Typography variant="h5">Videos</Typography>
          <FormControl className={classes.sortSelect} variant="outlined">
            <InputLabel classes={{ outlined: classes.sortInputLabelStyle }}>
              Sort
            </InputLabel>
            <Select
              classes={{ outlined: classes.inputClass }}
              onChange={handleSortChange}
              value={sortValue}
              label={'Sort'}
              iconComponent={<SwapVertIcon />}
            >
              <MenuItem value={0}>Uploaded Time</MenuItem>
              <MenuItem value={1}>Video Length</MenuItem>
              <MenuItem value={2}>Most Liked</MenuItem>
              <MenuItem value={3}>Most Viewed</MenuItem>
              <MenuItem value={4}>Default</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Divider />
        <Box className={classes.videosConainer}>
          {/* {getProperty(allVideos, '.items', []).map((item, index) => ( */}
          {allVideos.map((item, index) => (
            <VideoCards
              key={item.id}
              index={index + 1}
              videoData={item}
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
      // backgroundColor: theme.custom.lightTransparentBackground,
    },
    headerContainer: {
      marginBottom: theme.spacing(1),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      '& > h5': {
        marginBottom: theme.spacing(1),
      },
    },
    videosConainer: {
      maxHeight: '500px',
      overflowY: 'scroll',
      overflowX: 'hidden',
      // height: '600px',
    },
    sortSelect: {
      width: '200px',
    },
    inputClass: {
      padding: '12px',
    },
    sortInputLabelStyle: {
      transform: 'translate(15px, 14px) scale(1)',
    },
  })
)

export default PlaylistVideosNew
