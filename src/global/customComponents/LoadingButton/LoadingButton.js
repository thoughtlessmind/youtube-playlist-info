import React from 'react'
import Button from '@mui/material/Button'
import { CircularProgress } from '@mui/material'
import { makeStyles } from '@mui/styles'
import PropTypes from 'prop-types'

const LoadingButton = (props) => {
  const classes = useStyles()
  const { loading, ...buttonProps } = props

  return (
    <Button
      classes={{ root: classes.root }}
      {...buttonProps}
      disabled={loading}
    >
      {props.children}
      {loading && (
        <CircularProgress
          classes={{ root: classes.progressRoot }}
          size={19}
          aria-busy={true}
          style={{ color: '#fff' }}
        />
      )}
    </Button>
  )
}

const useStyles = makeStyles({
  root: {
    position: 'relative',
  },
  progressRoot: {
    position: 'absolute',
  },
})

LoadingButton.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.node,
}

export default LoadingButton
