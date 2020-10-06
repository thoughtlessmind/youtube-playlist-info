import axios from 'axios'
const KEY = 'AIzaSyAWz06FEGtCppFDdTIioYol4c4W4nDkbAU'

export default {
  getData: (url) =>
    axios({
      method: 'GET',
      url: `/playlistItems?part=snippet%2CcontentDetails%2C%20status%2C%20id&maxResults=10&playlistId=${url}&key=${process.env.REACT_APP_YOUTUBE_APIKEY}`,
    }),
}
