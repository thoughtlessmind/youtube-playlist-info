import React, { useContext, useEffect, useState } from 'react'
import { Box, makeStyles, createStyles, Grid } from '@material-ui/core'
import {
  PlaylistSummary,
  PlaylistTime,
  SearchBar,
  PlaylistVideosNew,
  VideoPlayer,
} from 'components'
import { globalStore } from 'global/Contexts/PlaylistDataContext'
import clsx from 'clsx'
import Channel_Info from 'components/Channel_Info/Channel_Info'


const PageContainer = () => {
  const classes = useStyles()
  const { playingVideo, videosSearchData, channelInfo } = useContext(globalStore)
  const [showVideoList , setShowVideosList ] = useState(false)
  const [showContent, setShowContent] = useState({
    videosList: false,
    channelInfo:false,
    palylistTime:false
  })

  useEffect(() => {
    setShowVideosList(Object.keys(videosSearchData).length > 0)
  }, [videosSearchData])

  useEffect(()=>{
    setShowContent(data=>({...data, channelInfo: Object.keys(channelInfo).length > 0}))
  },[channelInfo])

  return (
    <Box className={classes.mainContainer}>
      <SearchBar />
      <Grid
        className={clsx({
          [classes.visibleContent]: showContent.channelInfo,
          [classes.hideContent]:  !showContent.channelInfo,
        })}
        spacing={2}
        direction="row"
        container
      >
        <Grid item xs={12} sm={6}>
          <PlaylistTime />
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* <PlaylistSummary /> */}
          <Channel_Info />
        </Grid>
      </Grid>
      <Grid
        className={clsx({
          [classes.slideUp]: showVideoList,
          [classes.hidden]: !showVideoList,
        })}
        container
        spacing={2}
        style={{ marginTop: '8px' }}
      >
        <Grid item md={Object.keys(playingVideo).length > 0 ? 6 : 12} xs={12}>
          <PlaylistVideosNew />
        </Grid>
        <Grid
          item
          xs={0}
          md={6}
          className={clsx({
            [classes.hide]: Object.keys(playingVideo).length === 0,
          })}
        >
          <VideoPlayer videoData={playingVideo} />
        </Grid>
      </Grid>
    </Box>
  )
}

const useStyles = makeStyles((theme) =>
  createStyles({
    mainContainer: {
      padding: `0 ${theme.spacing(8)}px`,
      width: '90vw',
      margin: '0 auto',
      maxWidth: '1200px',
    },
    [theme.breakpoints.down('md')]: {
      mainContainer: {
        padding: `0 ${theme.spacing(4)}px`,
        width: '99vw',
      },
    },
    [theme.breakpoints.down('xs')]: {
      mainContainer: {
        padding: `0 ${theme.spacing(1.5)}px`,
        width: '100vw',
      },
    },
    hide: {
      display: 'none',
    },
    slideUp: {
      overflowY: 'hidden',
      maxHeight: '800px',
      transitionProperty: 'all',
      transitionDuration: '5s',
      transitionTimingFunction: 'cubic-bezier(0, 1, 0.5, 1)',
    },
    hidden:{
      maxHeight:0,
      overflow:'hidden',
      transitionProperty: 'all',
      transitionDuration: '5s',
      transitionTimingFunction: 'cubic-bezier(0, 1, 0.5, 1)',
    },
    visibleContent:{
      display:'flex'
    },
    hideContent:{
      display:'none'
    }
  })
)

export default PageContainer
