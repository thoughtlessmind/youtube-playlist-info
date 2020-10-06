import React, { useState } from 'react'

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
