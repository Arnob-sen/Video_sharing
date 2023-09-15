import React from "react";
import { Grid } from "@mui/material";
import youtube from './api/youtube'


import SearchBar from "./component/SearchBar";



const App = () => {
 

  return (
    <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            {/* <VideoDetail video={selectedVideo} /> */}
          </Grid>
          <Grid item xs={4}>
            {/* <VideoList videos={videos} onVideoSelect={setSelectedVideo} /> */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  async function handleSubmit(search) {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyC8IMbOHTw6_x5NXFYzZmzANwYuZZj2p3E",
        q: search,
      }
    });

    console.log(response)
  }
}

export default App;