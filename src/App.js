
import React from "react";
import { Grid } from "@mui/material";
import youtube from "./api/youtube";

function App() {
  return (
    <div className="App">
      <Grid style={{justifyContent:'center'}} container spacing={10}>
        <Grid item xs={11}>
          <Grid container spacing={10}>

            <Grid item xs={12}>
              {/* {Searchbar} */}
            </Grid>
            <Grid item xs={8}>
              {/* {Videodetails} */}

            </Grid>
            <Grid item xs={4}>
              {/* { Videolist} */}
            </Grid>
          </Grid>

        </Grid>
      
        
      </Grid>
   
    </div>
  );
}

export default App;
