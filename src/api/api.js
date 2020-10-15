import axios from 'axios'
const KEY = 'AIzaSyAWz06FEGtCppFDdTIioYol4c4W4nDkbAU'
const API_KEY = process.env.REACT_APP_YOUTUBE_APIKEY

/**
 * Gets the playlist info
 * @param {String} playlistId Playlist Id of which data neds to be feteched
 */
export const searchPlayListApi = (playlistId) => {
  return axios({
    method: 'GET',
    url: `/playlistItems?part=snippet%2CcontentDetails%2C%20status%2C%20id&maxResults=10&playlistId=${playlistId}&key=${API_KEY}`,
  })
}

/**
 * Gets the video details of the given ids
 * @param {String} videoIds Video ids of which data needs to be fetched. Multiple ids can be provided seperated by ','
 */
export const getDetailsByVideoId = (videoIds) => {
  return axios({
    method: 'GET',
    url: `/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoIds}&key=${API_KEY}`,
  })
}
