import React, { useContext } from 'react'
import { Box, makeStyles, createStyles } from '@material-ui/core'
import { PlayListSearchContext } from '../../global/Contexts/PlaylistDataContext'

const PlaylistTime = () => {
  const classes = useStyles()
  const { searchData } = useContext(PlayListSearchContext)
  console.log(searchData)

  return (
    <Box>
      {Object.keys(searchData).length !== 0 &&
        searchData.constructor === Object &&
        searchData.items.map((item) => (
          <p key={item.etag}>{item.snippet.title}</p>
        ))}
    </Box>
  )
}

const useStyles = makeStyles((theme) => createStyles({}))

export default PlaylistTime
