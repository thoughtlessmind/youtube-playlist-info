import axios from 'axios'
const API_KEY = process.env.REACT_APP_YOUTUBE_APIKEY

export default {
  getData: (url) =>
    axios({
      method: 'GET',
      url: `/playlistItems?part=snippet%2CcontentDetails%2C%20status%2C%20id&maxResults=10&playlistId=${url}&key=${process.env.REACT_APP_YOUTUBE_APIKEY}`,
    }),
}


export const searchPlayListApi = (plalistId) => {
  return axios({
    method: 'GET',
    url: `/playlistItems?part=snippet%2CcontentDetails%2C%20status%2C%20id&maxResults=10&playlistId=${plalistId}&key=${API_KEY}`,
  })
}

export const getDetailsByVideoId = (videoIds) => {
  return axios({
    method: 'GET',
    url: `/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoIds}&key=${API_KEY}`,
  })
}