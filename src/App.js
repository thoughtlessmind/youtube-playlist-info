import axios from 'axios'
import { useTitle } from 'customHooks'
import React from 'react'
import './App.css'
import AppContainer from './containers/AppContainer'
axios.defaults.baseURL = 'https://www.googleapis.com/youtube/v3/'
axios.defaults.headers.common[
  'Authorization'
] = `${process.env.REACT_APP_YOUTUBE_APIKEY}`


function App() {
  useTitle('YouTube Plalist Info || Get the watch time of the YouTube playlist')
  return (
    <div className="App">
      <AppContainer />
    </div>
  )
}

export default App
