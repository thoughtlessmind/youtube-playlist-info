import React, { useState, useReducer, useEffect } from 'react'
const UPDATE_PLAYLIST_SEARCH = 'UPDATE_PLAYLIST_SEARCH'
const UPDATE_VIDEO_SEARCH = 'UPDATE_VIDEO_SEARCH'


export const globalStore = React.createContext({})



const initialState = {
  playlistSearchData: [],
  videosSearchData: [],
  playlistId: 'PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3',
  dispatch: () => {},
}

const reducer = (state = initialState, action) => {
  console.log('➡-------------------- Global Store Update ----------------')
  // console.log('Prev State-- ', state)
  console.log('action--- ', action.type)
  console.log('payload--- ', action.payload)
  switch (action.type) {
    case UPDATE_PLAYLIST_SEARCH:
      return { ...state, playlistSearchData: action.payload }
    case UPDATE_VIDEO_SEARCH:
      return { ...state, videosSearchData: action.payload }
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


