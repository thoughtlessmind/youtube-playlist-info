import React from 'react'
import Button from '@material-ui/core/Button'
import { CircularProgress, makeStyles } from '@material-ui/core'
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
