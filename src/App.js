import { MuiThemeProvider } from '@material-ui/core'
import axios from 'axios'
import { useTitle } from 'customHooks'
import React from 'react'
import { theme } from 'resources'
import './App.css'
import AppContainer from './containers/AppContainer'
axios.defaults.baseURL = 'https://www.googleapis.com/youtube/v3/'
axios.defaults.headers.common[
  'Authorization'
] = `${process.env.REACT_APP_YOUTUBE_APIKEY}`


function App() {
  useTitle('YouTube Plalist Info || Get the watch time of the YouTube playlist')
  return (
    <MuiThemeProvider theme={theme}>
        <div className="App">
          <AppContainer />
        </div>
    </MuiThemeProvider>
  )
}

export default App
