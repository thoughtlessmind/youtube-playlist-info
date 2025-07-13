import React from 'react'
import { Box, Typography, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material'
import { makeStyles } from '@mui/styles'

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

const useStyles = makeStyles((theme) => ({}))

export default VideoSorting
