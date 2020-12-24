import { createMuiTheme } from '@material-ui/core/styles'

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    background: {
      // default:
    },
  },
  typography: {
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    h6: {
      fontSize: '1rem',
      lineHeight: 1.3,
    },
    body2: {
      // color: '#6f6f6f',
    },
    caption: {
      // color: 'rgba(9,30,66,.84)',
      fontWeight: '400',
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        opacity: '0.9',
      },
    },
    MuiAppBar: {
      root: {
        backgroundColor: '#1976d2',
      },
      colorPrimary: {
        backgroundColor: '#1976d2',
      },
    },
  },
  custom: {
    // lightTransparentBackground: '#ffffffb8',
  },
})

export const darkTheme = createMuiTheme({
  ...lightTheme,
  palette: {
    type: 'dark',
    background: {
      default: '#151515',
      paper: '#151515',
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        backgroundColor: '#151515',
      },
      colorPrimary: {
        backgroundColor: '#151515',
      },
    },
  },
})
