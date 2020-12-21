import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    h6: {
      fontSize: '1rem',
      lineHeight: 1.3,
    },
    body2:  {
      color:  '#6f6f6f',
    },
    caption: {
      color: 'rgba(9,30,66,.84)',
      fontWeight: '500',
    },
  },
  custom: {
    lightTransparentBackground: '#ffffffb8',
  },
})

export default theme
