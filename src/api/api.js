import axios from 'axios'
const API_KEY = process.env.REACT_APP_YOUTUBE_APIKEY

/**
 * Gets the playlist info
 * @param {String} playlistId Playlist Id of which data neds to be feteched
 */

export const searchPlayListApi = (playlistId) => {
  return axios({
    method: 'GET',
    url: `/playlistItems`,
    params: {
      part: 'snippet,contentDetails,status,id',
      maxResults: '50',
      playlistId,
      key: API_KEY,
    },
  })
}

/**
 * Gets the video details of the given ids
 * @param {String} videoIds Video ids of which data needs to be fetched. Multiple ids can be provided seperated by ','
 */
export const getDetailsByVideoId = (videoIds) => {
  return axios({
    method: 'GET',
    url: `/videos`,
    params: {
      part: 'snippet,contentDetails,statistics',
      id: videoIds,
      key: API_KEY,
    },
  })
}


export const getChannelInfo = (channelId) => {
  return axios({
    method: 'GET',
    url: `/channels`,
    params: {
      part: 'snippet,contentDetails,statistics',
      id: channelId,
      key: API_KEY,
    },
  })
}