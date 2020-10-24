/**
 * Parse the playlist id from the URL string (User input )
 * @param {String} userInput User input string
 */
export const getIdFromUrl = (userInput) => {
  if (userInput.includes('youtube')) {
    const userURL = new URL(userInput)
    const playlistId = userURL.searchParams.get('list')
    return playlistId
  } else return userInput
}
