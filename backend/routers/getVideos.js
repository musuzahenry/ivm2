

require('dotenv').config(); // Load environment variables from .env
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
app.use(cors());

const router = express.Router();

//load environment vairables
const API_KEY = process.env.API_KEY
const CHANNEL_ID = process.env.CHANNEL_ID; // e.g., UC_x5XG1OV2P6uZZ5FSM9Ttw (Google Developers)



router.get('/:vids', async (req, res) => {

  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search`, {
        params: {
          key: API_KEY,
          channelId: CHANNEL_ID,
          part: 'snippet,id',
          order: 'date',
          maxResults: parseInt(req.params.vids),
        }
      }
    );

   

    const videos = response.data.items
      .filter(item => item.id.kind === "youtube#video")
      .map(item => ({
        title: item.snippet.title,
        videoId: item.id.videoId,
        thumbnail: item.snippet.thumbnails.medium.url,
        publishedAt: item.snippet.publishedAt,
        liveBroadcastContent: item.snippet.liveBroadcastContent,
      }));

    //now lets separate live and not live videos
    const liveVideos = [];
    const normalVideos = [];

    videos.forEach(video => {
        if (video.liveBroadcastContent === "live" || video.liveBroadcastContent === "upcoming") {
            liveVideos.push(video);
            
        } else {
            normalVideos.push(video);
            //console.log(video.videoId)
        }
    });

    res.json({liveVideos, normalVideos});
   
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching videos');
  }
});


 //console.log("llllllllllllllllllllllll")

module.exports = router;