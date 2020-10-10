import React, { useContext } from 'react'
import { Box, makeStyles, createStyles } from '@material-ui/core'
import { globalStore } from '../../global/Contexts/PlaylistDataContext'

const PlaylistTime = () => {
  const classes = useStyles()
  // const { searchData } = useContext(PlayListSearchContext)
  const { playlistSearchData } = useContext(globalStore)
  console.log('updated')
  // console.log(searchData)

  return (
    <Box>
      {Object.keys(playlistSearchData).length !== 0 &&
        playlistSearchData.constructor === Object &&
        playlistSearchData.items.map((item) => (
          <p key={item.etag}>{item.snippet.title}</p>
        ))}
    </Box>
  )
}

const useStyles = makeStyles((theme) => createStyles({}))

const areEqual = (prev, next) => {
  return false
}

export default React.memo(PlaylistTime, areEqual)
