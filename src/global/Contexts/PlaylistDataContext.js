import React, { useState, useReducer, useEffect } from 'react'
const UPDATE_PLAYLIST_SEARCH = 'UPDATE_PLAYLIST_SEARCH'
const UPDATE_VIDEO_SEARCH = 'UPDATE_VIDEO_SEARCH'
const PLAY_VIDEO = 'PLAY_VIDEO'
const CHANNEL_INFO = 'CHANNEL_INFO'
const CHANGE_THEME = 'CHANGE_THEME'


export const globalStore = React.createContext({})



const initialState = {
  playlistSearchData: [],
  videosSearchData: [],
  playlistId: 'PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3',
  dispatch: () => {},
  playingVideo: {},
  channelInfo: {},
  activeTheme: 'dark',
}

const reducer = (state = initialState, action) => {
  console.log('➡-------------------- Global Store Update ----------------')
  // console.log('Prev State-- ', state)
  console.log(
    '%c-------------------------------->>>>>>>>>>>>>>>>>>>>>>>',
    'color:#fff;background-color:green'
  )
  console.log('action--- ', action.type)
  console.log('payload--- ', action.payload)
  console.log('state--- ', state)
  console.log(
    '%c------------------------------------------------------------------',
    'color:#fff;background-color:red'
  )

  switch (action.type) {
    case UPDATE_PLAYLIST_SEARCH:
      return { ...state, playlistSearchData: action.payload }
    case UPDATE_VIDEO_SEARCH:
      return { ...state, videosSearchData: action.payload }
    case PLAY_VIDEO:
      return { ...state, playingVideo: action.payload }
    case CHANNEL_INFO:
      return { ...state, channelInfo: action.payload }
    case CHANGE_THEME:
      return { ...state, activeTheme: action.payload }
    default:
      return state
  }
}

export const StoreProvider = ({ children }) => {
  const [storeData, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    console.log('state----------', storeData)
  }, [storeData])
  return (
    <globalStore.Provider value={{ ...storeData, dispatch }}>
      {children}
    </globalStore.Provider>
  )
}


