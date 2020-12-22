import { MuiThemeProvider } from '@material-ui/core'
import axios from 'axios'
import { useTitle } from 'customHooks'
import { globalStore, StoreProvider } from 'global/Contexts/PlaylistDataContext'
import React, { useContext, useEffect } from 'react'
import { theme } from 'resources'
import { darkTheme, lightTheme } from 'resources/themes/themes'
import './App.css'
import AppContainer from './containers/AppContainer'
axios.defaults.baseURL = 'https://www.googleapis.com/youtube/v3/'
axios.defaults.headers.common[
  'Authorization'
] = `${process.env.REACT_APP_YOUTUBE_APIKEY}`


function App() {
  useTitle('YouTube Plalist Info || Get the watch time of the YouTube playlist')
  // const {activeTheme } = useContext(globalStore)
  // useEffect(()=>console.log({activeTheme}),[activeTheme])
  return (
    <StoreProvider>
        {/* <MuiThemeProvider theme={activeTheme === "light" ? lightTheme : darkTheme}> */}
        <div className="App">
          <AppContainer />
        </div>
        {/* </MuiThemeProvider> */}
    </StoreProvider>
  )
}

export default App
