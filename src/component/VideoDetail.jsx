import { Paper } from "@mui/material";
import {Typography} from "@mui/material";
import React from "react";
const VideoDetail=({video :{id:{videoId},snippet:{title,channelTitle,description}}})=>
{
    if(!videoId)return <div>Loading...</div>
    return (
        <React.Fragment>
            <Paper elevation={6} style={{height:'75%'}}>
                <iframe
                frameBorder='0'
                height='100%'
                width='100%'
                src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                title="Video player"

                />

            </Paper>
            <Paper elevation={6} style={{padding:"15px"}}>
                <Typography variant="h4">
                {title}-{channelTitle}


                </Typography>
                    <Typography variant="subtitle1">
                        {channelTitle}

                    </Typography>
                    <Typography variant="subtitle2">
                        {description}

                    </Typography>



            </Paper>

        </React.Fragment>
    )

}
export default VideoDetail;