import React, { useEffect, useState, useContext } from 'react'
import {
  Box,
  createStyles,
  FormControl,
  InputAdornment,
  InputLabel,
  makeStyles,
  OutlinedInput,
  Snackbar,
} from '@material-ui/core'
import LoadingButton from 'global/customComponents/LoadingButton/LoadingButton'
import { globalStore } from 'global/Contexts/PlaylistDataContext'
import { getDetailsByVideoId, searchPlayListApi } from 'api'
import { getIdFromUrl } from 'utils'
import { getChannelInfo } from 'api/api'
import MuiAlert from '@material-ui/lab/Alert'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}


const SearchBar = () => {
  const { dispatch } = useContext(globalStore)
  const inputRef = React.useRef(null)
  const [initiatedSearch, setInitiatedSearch] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const classes = useStyles({ initiatedSearch })


  const urlFormSubmitHandler = (e) => {
    e.preventDefault()

    if (getIdFromUrl(inputRef.current.value)) {
      setLoading(true)
      searchPlayListApi(getIdFromUrl(inputRef.current.value))
        .then((res) => {
          // updateSearchData(res.data)
          dispatch({ type: 'UPDATE_PLAYLIST_SEARCH', payload: res })
          getDetailsByVideoId(sortVideosId(res.items)).then((res) =>
            dispatch({ type: 'UPDATE_VIDEO_SEARCH', payload: res })
          )
          getChannelInfo(res.items[0].snippet.channelId).then((res) => {
            dispatch({ type: 'CHANNEL_INFO', payload: res.data })
          })
        })
        .then((res) => setInitiatedSearch(true))
        .then(() => setLoading(false))
        .catch((err) => setLoading(false))
    } else {
      setAlertMessage('Not a valid playlist URL')
      return false
    }
  }

  const alertCloseHandler = () => {
    setAlertMessage('')
  }

  const sortVideosId = (videosData) => {
    let ids = []
    videosData.map((video) => ids.push(video.contentDetails.videoId))
    return ids
  }

  useEffect(() => {
    inputRef.current.focus()
    if (process.env.NODE_ENV === 'development')
      inputRef.current.value =
        'https://www.youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3'
  }, [])

  return (
    <Box className={classes.formContainerStyles}>
      <form className={classes.formStyles} onSubmit={urlFormSubmitHandler}>
        <FormControl>
          <InputLabel classes={{ formControl: classes.inputLabelStyle }}>
            Playlist URL
          </InputLabel>
          <OutlinedInput
            inputRef={inputRef}
            classes={{ input: classes.outlinedInputStyle }}
            labelWidth={100}
            required
            endAdornment={
              <InputAdornment position="end">
                <LoadingButton
                  loading={loading}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Search
                </LoadingButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </form>

      <Snackbar
        open={Boolean(alertMessage)}
        autoHideDuration={6000}
        onClose={alertCloseHandler}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Alert onClose={alertCloseHandler} severity="error">
          {alertMessage}
        </Alert>
      </Snackbar>
    </Box>
  )
}

const useStyles = makeStyles((theme) =>
  createStyles({
    formContainerStyles: {
      height: (props) => (props.initiatedSearch ? '30vh' : '70vh'),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'height 0.5s ease-out',
    },
    formStyles: {
      width: '60%',
      minWidth: '290px',
      backdropFilter: 'blur(26px)',
      '& > div:first-child': {
        width: '100%',
        maxWidth: '800px',
        minWidth: '290px',
      },
    },
    inputLabelStyle: {
      top: '-7px',
      left: '21px',
    },
    outlinedInputStyle: {
      // color:   '#000',
    },
  })
)

export default SearchBar
