import React, { useEffect, useState, useContext } from 'react'
import {
  Box,
  createStyles,
  InputAdornment,
  makeStyles,
  TextField,
} from '@material-ui/core'
import LinkIcon from '@material-ui/icons/Link'
import LoadingButton from 'global/customComponents/LoadingButton/LoadingButton'
import { globalStore } from 'global/Contexts/PlaylistDataContext'
import { getDetailsByVideoId, searchPlayListApi } from 'api'

const SearchBar = () => {
  const { playlistSearchData, dispatch } = useContext(globalStore)
  const [playListUrl, setPlayListUrl] = useState('')
  const [playListSearchData, setPlayListSearchData] = useState([])
  const [initiatedSearch, setInitiatedSearch] = useState(false)
  const [loading, setLoading] = useState(false)
  const classes = useStyles({ initiatedSearch })

  const urlInputHandler = (e) => {
    setPlayListUrl(e.target.value)
  }

  const urlFormSubmitHandler = (e) => {
    e.preventDefault()
    setLoading(true)
    searchPlayListApi('PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3')
      .then((res) => {
        // updateSearchData(res.data)
        dispatch({ type: 'UPDATE_PLAYLIST_SEARCH', payload: res.data })
        console.log(res.data.items)
        getDetailsByVideoId(sortVideosId(res.data.items)).then((res) =>
          dispatch({ type: 'UPDATE_VIDEO_SEARCH', payload: res.data })
        )
      })
      .then((res) => setInitiatedSearch(true))
      .then(() => setLoading(false))
  }

  const sortVideosId = (videosData) => {
    let ids = []
    videosData.map((video) => ids.push(video.contentDetails.videoId))
    return ids.toString()
  }

  useEffect(() => {
    console.log('---', playListSearchData)
  }, [playListSearchData])

  return (
    <Box className={classes.formContainerStyles}>
      <form className={classes.formStyles} onSubmit={urlFormSubmitHandler}>
        <TextField
          // className={classes.margin}
          id="input-with-icon-textfield"
          label="Link"
          placeholder="Paste YouTube playlist link here"
          className={classes.linkInputStyle}
          value={playListUrl}
          onChange={urlInputHandler}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LinkIcon style={{ color: 'blue' }} />
              </InputAdornment>
            ),
          }}
        />
        <LoadingButton
          loading={loading}
          type="submit"
          variant="contained"
          color="primary"
        >
          Search
        </LoadingButton>
      </form>
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
      transition: 'height 0.5s ease-out'
    },
    formStyles: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    linkInputStyle: {
      width: '40%',
      minWidth: '200px',
    },
  })
)

export default SearchBar
