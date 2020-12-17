import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    h6: {
      fontSize: '1rem',
      lineHeight: 1.3,
    },
    caption: {
      color: 'rgba(9,30,66,.84)',
      fontWeight: '500',
    },
  },
})

export default theme
