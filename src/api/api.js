import axios from 'axios'
const API_KEY = process.env.REACT_APP_YOUTUBE_APIKEY

/**
 * Gets all the videos of the playlist
 * @param {String} playlistId Playlist Id of which data neds to be feteched
 * @returns {Object}
 */

export const searchPlayListApi = async (playlistId) => {
  let aggregateData = {
    items: [],
  }
  let currentToken
  while (true) {
    const res = await playlistApiCall(playlistId, currentToken)
    console.log('res===', res)
    aggregateData = {
      ...aggregateData,
      ...res,
      items: aggregateData.items.concat(res.items),
    }
    if (Object.keys(res).includes('nextPageToken')) {
      currentToken = res.nextPageToken
    } else {
      break
    }
  }
  return aggregateData
}

/**
 * Gets the videos of the playlist wiht a limit of 50 videos at once
 * @param {String} playlistId Playliast id
 * @param {String} pageToken Next/Previous page token
 * @see Youtube - `/playlistItems` [Documentation](https://developers.google.com/youtube/v3/docs/playlistItems)
 */
const playlistApiCall = async (playlistId, pageToken) => {
  const res = await axios({
    method: 'GET',
    url: `/playlistItems`,
    params: {
      part: 'snippet,contentDetails,status,id',
      maxResults: '50',
      playlistId,
      key: API_KEY,
      pageToken,
    },
  })
  return res.data
}

/**
 * Gets the video details of all the given ids (also for 50+ ids)
 * @param {Array<String>} videosId Video ids of which data needs to be fetched.'
 */
export const getDetailsByVideoId = async (videosId) => {
  let aggregateData = {
    items: [],
  }
  let idsArr = [...videosId]
  while (true) {
    const res = await getVideosDataApi(idsArr.splice(0, 50))
    aggregateData = {
      ...aggregateData,
      ...res,
      items: aggregateData.items.concat(res.items),
    }
    if (idsArr.length <= 0) {
      break
    }
  }
  return aggregateData
}

/**
 * Gets the videos info of the given ids with limit of max 50 videos at once.
 * @param {Array<String>} videosId videos ids
 * @see  Youtube - `/videos` [Documentation](https://developers.google.com/youtube/v3/docs/videos)
 */
const getVideosDataApi = async (videosId) => {
  const res = await axios({
    method: 'GET',
    url: `/videos`,
    params: {
      part: 'snippet,contentDetails,statistics',
      id: videosId.join(','),
      key: API_KEY,
    },
  })
  return res.data
}


/**
 * Fetches channel info
 * @param {String} channelId Channel id
 * @see Youtube - `/channels` [Documentation](https://developers.google.com/youtube/v3/docs/channels/list)
 */
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