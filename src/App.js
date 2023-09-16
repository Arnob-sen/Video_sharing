import React from "react";
import { Grid } from "@mui/material";
import youtube from './api/youtube'


import SearchBar from "./component/SearchBar";
import { useState } from "react";
import VideoDetail from "./component/VideoDetail";


const App = () => {
  const[videos,setVideos]=useState([]);
  const [selectedVideo,setSelectedVideo]=useState({id :{},snippet:{}});
 

  return (
    <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            {/* <VideoList videos={videos} onVideoSelect={setSelectedVideo} /> */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  async function handleSubmit(search) {
    const {data :{items:videos}} = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyC8IMbOHTw6_x5NXFYzZmzANwYuZZj2p3E",
        q: search,
      }
    });
    setVideos(videos);
    setSelectedVideo(videos[0]);

    
  }
}

export default App;