import React, { useContext, useState } from 'react'
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
  const { videosSearchData, playlistId } = useContext(globalStore)
  const [expandedState, setExpandedState] = useState(false)

  const accordioExpandHandler = () => {
    setExpandedState((prev) => setExpandedState(!prev))
  }

  return (
    <Box>
      <Accordion expanded={expandedState}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          onClick={accordioExpandHandler}
          className={
            expandedState && Object.keys(videosSearchData).length !== 0
              ? classes.accordionSummaryRoot
              : ''
          }
        >
          <Typography variant="h5">Videos</Typography>
        </AccordionSummary>
        <AccordionDetails classes={{ root: classes.accordionDetailsRootStyle }}>
          {getProperty(videosSearchData, '.items', []).map((item, index) => (
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
      padding: `${theme.spacing(2)}px ${theme.spacing(3)} px`,
    },
    accordionSummaryRoot: {
      boxShadow: '0px 1px 2px 0px #0e0e0e08, 0px 3px 4px 0px #4c4c4c54',
    },
  })
)

export default PlaylistVideos
