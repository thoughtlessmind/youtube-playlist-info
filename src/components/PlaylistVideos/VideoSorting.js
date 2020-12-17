import React from 'react'
import { Box, makeStyles, createStyles, Typography } from '@material-ui/core'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

const VideoSorting = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState('female')

  const handleChange = (event) => {
    setValue(event.target.value)
  }
  return (
    <Box>
      <Typography>Sort By</Typography>
      <FormControl component="fieldset">
        {/* <FormLabel component="legend">Gender</FormLabel> */}
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
          <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="(Disabled option)"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  )
}

const useStyles = makeStyles((theme) => createStyles({}))

export default VideoSorting
