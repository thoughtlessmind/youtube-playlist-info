import React, { useContext, useEffect } from 'react'
import {
  Box,
  makeStyles,
  createStyles,
  Typography,
  Paper,
} from '@material-ui/core'
import { globalStore } from 'global/Contexts/PlaylistDataContext'
import OpenInNewRoundedIcon from '@material-ui/icons/OpenInNewRounded'
import { abbrNumber, calculateTotalViews, getProperty } from 'utils'

const Channel_Info = () => {
  const classes = useStyles()
  const { channelInfo, videosSearchData } = useContext(globalStore)

  const handleOpenChannel = () => {
    window.open(
      `https://www.youtube.com/channel/${channelInfo.items[0].id || ''}`
    )
  }

  // useEffect(() => {
  //   calculateTotalViews(getProperty(videosSearchData, '.items', []))
  // }, [videosSearchData])

  return (
    <Box component={Paper} className={classes.mainContainer}>
      {Object.keys(channelInfo).length > 0 ? (
        <Box>
          <Box
            onClick={handleOpenChannel}
            className={classes.upperpartContainer}
          >
            <img src={channelInfo.items[0].snippet.thumbnails.medium.url} />
            <Box>
              <Typography className={classes.channeltitle}>
                {channelInfo.items[0].snippet.title}
                <OpenInNewRoundedIcon />
              </Typography>
              <Typography className={classes.channelDescription}>
                {channelInfo.items[0].snippet.description}
              </Typography>
            </Box>
          </Box>
          <Typography className={classes.subscribersLine}>
            {abbrNumber(channelInfo.items[0].statistics.subscriberCount, 2)}{' '}
            Subscribers
          </Typography>
        </Box>
      ) : (
        <Typography>Loading.....</Typography>
      )}
    </Box>
  )
}

const useStyles = makeStyles((theme) =>
  createStyles({
    mainContainer: {
      padding: theme.spacing(4),
      height: '100%',
      // backgroundColor: theme.custom.lightTransparentBackground,
    },
    infoContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    upperpartContainer: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '8px',
      cursor: 'pointer',
      '&:hover': {
        // prettier-ignore
        '& $channeltitle': {
          '&>svg':{
            color: '#484848',
            transform: 'scale(1.1)',
          }
        },
      },
      '&>img': {
        height: '57px',
        borderRadius: '50px',
      },
      '&>div': {
        flexGrow: 1,
      },
    },
    channeltitle: {
      fontSize: '18px',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      // cursor: 'pointer',
      // '&:hover': {
      //   '&>svg': {
      //     color: '#484848',
      //     transform: 'scale(1.1)',
      //   },
      // },
      '&>svg': {
        color: 'gray',
        cursor: 'pointer',
        fontSize: '16px',
        transition: '0.2s',
        // '&:hover': {
        //   color: '#000',
        //   fontSize: '14px',
        // },
      },
    },
    channelDescription: {
      lineHeight: '1',
      WebkitLineClamp: 3,
      overflow: 'hidden',
      display: '-webkit-box',
      textOverflow: 'ellipsis',
      WebkitBoxOrient: 'vertical',
    },
    subscribersLine: {
      marginLeft: '65px',
      fontWeight: '500',
      fontSize: 14,
      marginTop: theme.spacing(1),
    },
  })
)

export default Channel_Info
