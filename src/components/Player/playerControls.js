import React from 'react'
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const PlayerControls = ({song}) => {
  return (
<div className={"style.playercontrols"}>
     <AudioPlayer
       autoPlay
       src={song.src}
       onPlay={(e) => console.log("onPlay")}
       // other props here
       showSkipControls
       autoPlayAfterSrcChange

     />
   </div>  )
}

export default PlayerControls