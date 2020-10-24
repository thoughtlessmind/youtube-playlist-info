import { useEffect } from 'react'

/**
 * Change title of the document according to the current page
 * @param {string} title Title of the current page
 */

const useTitle = (title) => {
  useEffect(() => {
    document.title = title
  }, [])
}

export default useTitle
