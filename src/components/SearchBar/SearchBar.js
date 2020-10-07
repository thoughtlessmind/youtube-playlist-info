import React, { useEffect, useState, useContext } from 'react'
import {
  Box,
  createStyles,
  InputAdornment,
  makeStyles,
  TextField,
} from '@material-ui/core'
import LinkIcon from '@material-ui/icons/Link'
import LoadingButton from '../../global/customComponents/LoadingButton/LoadingButton'
import { getDetailsByVideoId, searchPlayListApi } from './getData'
import { PlayListSearchContext } from '../../global/Contexts/PlaylistDataContext'

const SearchBar = () => {
  const { updateSearchData } = useContext(PlayListSearchContext)
  const [playListUrl, setPlayListUrl] = useState('')
  const [playListSearchData, setPlayListSearchData] = useState([])
  const [initiatedSearch, setInitiatedSearch] = useState(false)
  const classes = useStyles({ initiatedSearch })

  const urlInputHandler = (e) => {
    setPlayListUrl(e.target.value)
  }

  const urlFormSubmitHandler = (e) => {
    e.preventDefault()
    // api
    //   .getData('PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3')
    //   .then((res) => updateSearchData(res.data))
    //   .then((res) => setInitiatedSearch(true))
    // api
    searchPlayListApi('PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3')
      .then((res) => {
        updateSearchData(res.data)
        console.log(res.data.items)
        getDetailsByVideoId(sortVideosId(res.data.items))
      })
      .then((res) => setInitiatedSearch(true))
  }

  const sortVideosId = (data)=>{
    let ids = []
    data.map((video)=>(
      ids.push(video.contentDetails.videoId)
    ))
    console.log(ids)
    console.log(ids.toString())
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
          // loading={false}
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
