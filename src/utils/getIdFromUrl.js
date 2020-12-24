const urlRegex =  /https:\/\/(www\.)?youtube.+list=[\w].{12,}/i

/**
 * Parse the playlist id from the URL string (User input )
 * @param {String} userInput User input string
 */
export const getIdFromUrl = (userInput) => {
  
  // if (userInput.includes('youtube.com')) {
  if (urlRegex.test(userInput)) {
    // const queryParams = userInput.split('?')[1].split('=')
    // return queryParams[queryParams.indexOf('list') + 1]
    const url = new URL(userInput)
    const playlistId = url.searchParams.get('list')
    return playlistId
  } else return false
}
