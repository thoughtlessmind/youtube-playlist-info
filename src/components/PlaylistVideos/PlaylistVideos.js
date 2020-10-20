import React, { useContext } from 'react'
import {
  Box,
  makeStyles,
  createStyles,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { VideoCards } from 'components'
import { globalStore } from 'global/Contexts/PlaylistDataContext'
import { getProperty } from 'utils'

const PlaylistVideos = () => {
  const classes = useStyles()
  const { videosSearchData } = useContext(globalStore)
  return (
    <Box>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">Videos</Typography>
        </AccordionSummary>
        <AccordionDetails classes={{ root: classes.accordionDetailsRootStyle }}>
          {getProperty(videosSearchData, '.items', []).map((item, index) => (
            <VideoCards
              key={item.id}
              index={index + 1}
              title={item.snippet.title}
              publishedAt={item.snippet.publishedAt}
              thumbnail={item.snippet.thumbnails.medium.url}
              viewCount={item.statistics.viewCount}
              likeCount={item.statistics.likeCount}
            />
          ))}
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

const useStyles = makeStyles((theme) =>
  createStyles({
    accordionDetailsRootStyle: {
      display: 'block',
      overflow: 'scroll',
      maxHeight: '600px',
    },
  })
)

export default PlaylistVideos
