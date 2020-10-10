import React, { useState, useReducer, useEffect } from 'react'
const UPDATE_PLAYLIST_SEARCH = 'UPDATE_PLAYLIST_SEARCH'
const UPDATE_VIDEO_SEARCH = 'UPDATE_VIDEO_SEARCH'

/* 
export const PlayListSearchContext = React.createContext({
  searchData: [],
  updateSearchData: () => {},
})

export const PlaylistSeachSotre = ({ children }) => {
  const [searchData, updateSearchData] = useState({})

  return (
    <PlayListSearchContext.Provider value={{ searchData, updateSearchData }}>
      {children}
    </PlayListSearchContext.Provider>
  )
}
 */

export const globalStore = React.createContext({})

const initialState = {
  playlistSearchData: [],
  videosSearchData: [],
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


