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
import { getProperty } from 'utils'
import VideoCards from 'components/VideoCards/VideoCards'
import { globalStore } from 'global/Contexts/PlaylistDataContext'

const PlaylistVideosNew = () => {
  const classes = useStyles()
  const { videosSearchData, playlistId } = useContext(globalStore)
  const [allVideos, setAllVideos] = useState([])
  const [sortValue, setSortValue] = useState("")

  const handleSortChange = (e) => {
    setSortValue(e.target.value)
    setAllVideos(prev => sortVideos(prev))
    console.log(sortVideos(allVideos))
  }

  const sortVideos = (videoData) => {
    const data = [].concat(videoData).sort((a,b)=>(parseInt(a.statistics.viewCount) < parseInt(b.statistics.viewCount )? 1 : -1))
    return data
  }

  useEffect(() => {
    setAllVideos(getProperty(videosSearchData, '.items', []))
  }, [videosSearchData])

  useEffect(() => {console.log('all videos-------', allVideos)},[allVideos])

  return (
    <Paper className={classes.mainContainer}>
      <Box>
      <Box className={classes.headerContainer}>
        <Typography variant="h5">Videos</Typography>
        <FormControl className={classes.sortSelect} variant="outlined" >
          <InputLabel>Sort</InputLabel>
          <Select onChange={handleSortChange} value={sortValue} label={"Sort"} iconComponent={SwapVertIcon}>
            <MenuItem value={0}>Uploaded Time</MenuItem>
            <MenuItem value={1}>Play Time</MenuItem>
            <MenuItem value={2}>Likes</MenuItem>
            <MenuItem value={4}>Views</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Divider />
      <Box className={classes.videosConainer}>
        
        {/* {getProperty(allVideos, '.items', []).map((item, index) => ( */}
        {allVideos.map((item, index) => (
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
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      '& > h5': {
        marginBottom: theme.spacing(1),
      },
    },
    videosConainer: {
      maxHeight: '80vh',
      overflowY: 'scroll',
      overflowX: 'hidden',
    },
    sortSelect:{
      width:'100px'
    }
  })
)

export default PlaylistVideosNew
