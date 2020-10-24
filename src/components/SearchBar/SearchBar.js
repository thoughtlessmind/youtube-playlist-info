import React, { useEffect, useState, useContext } from 'react'
import {
  Box,
  createStyles,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  makeStyles,
  OutlinedInput,
  TextField,
} from '@material-ui/core'
import LinkIcon from '@material-ui/icons/Link'
import LoadingButton from 'global/customComponents/LoadingButton/LoadingButton'
import { globalStore } from 'global/Contexts/PlaylistDataContext'
import { getDetailsByVideoId, searchPlayListApi } from 'api'
import { getIdFromUrl } from 'utils'

const SearchBar = () => {
  const { dispatch } = useContext(globalStore)
  const [userInput, setUserInput] = useState('')
  const [initiatedSearch, setInitiatedSearch] = useState(false)
  const [loading, setLoading] = useState(false)
  const classes = useStyles({ initiatedSearch })

  const urlInputHandler = (e) => {
    setUserInput(e.target.value)
  }

  const urlFormSubmitHandler = (e) => {
    e.preventDefault()
    setLoading(true)
    searchPlayListApi(getIdFromUrl(userInput))
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
      .catch((err) =>   setLoading(false))
  }

  const sortVideosId = (videosData) => {
    let ids = []
    videosData.map((video) => ids.push(video.contentDetails.videoId))
    return ids.toString()
  }

  return (
    <Box className={classes.formContainerStyles}>
      <form  className={classes.formStyles} onSubmit={urlFormSubmitHandler}>
        <FormControl>
          <InputLabel classes={{formControl:classes.inputLabelStyle}}>Playlist URL</InputLabel>
          <OutlinedInput
            // className={classes.linkInputStyle}
            value={userInput}
            labelWidth={100}
            onChange={urlInputHandler}
            required
            // classes={{input:classes.outlinedInputStyle}}
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
    formStyles:{
      width:'60%',
      minWidth:'350px',
      '& > div:first-child':{
        width:'100%',
        maxWidth:'800px',
        minWidth:'350px',
      }
    },
    inputLabelStyle:{
        top:'-7px',
        left:'21px'
    },
    outlinedInputStyle:{
      padding:'10px 20px',
      height:'1.5em'
    }
  })
)

export default SearchBar
