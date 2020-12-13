## [YouTube Playlist Info](https://youtube-playlist-info.netlify.app/)
This calculates and shows the total time required to watch a complete YouTube playlist. Playlist id or playlist link is required.
It also shows the videos of the playlist and user can click the video and redirected to that video of the playlist.

[![Netlify Status](https://api.netlify.com/api/v1/badges/99d5f523-bd86-4224-88bb-089fff68cc9e/deploy-status)](https://app.netlify.com/sites/youtube-playlist-info/deploys)

#### Tools used
- Built using [ReactJS](https://reactjs.org/) 
- [React Context](https://reactjs.org/docs/context.html) used for data and state management
- [Axios](https://github.com/axios/axios) is used for making HTTP calls
- [Material UI](https://material-ui.com/) is used for UI components, stylings and theming
- [YouTube API](https://developers.google.com/youtube/v3) service for fetching data
- Hosted on [Netlify](https://www.netlify.com/)

##### Steps to run this repo on local
1. Clone this repo and run npm install.
2. Go to [YoutTube API Docuementation](https://developers.google.com/youtube/registering_an_application) and follow the steps to generate and get an API key.
3. Create an environment  file named `.env` and add your YouTube API key in this file as `REACT_APP_YOUTUBE_APIKEY = YOUR_API_KEY`.
4. Run `npm start`