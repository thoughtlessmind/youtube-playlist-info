import axios from 'axios'
import React from 'react'
import './App.css'
import AppContainer from './containers/AppContainer'

axios.defaults.baseURL = 'https://www.googleapis.com/youtube/v3/'
axios.defaults.headers.common[
  'Authorization'
] = `${process.env.REACT_APP_YOUTUBE_APIKEY}`


function App() {
  return (
    <div className="App">
      <AppContainer />
    </div>
  )
}

export default App
