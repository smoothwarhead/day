
import { useEffect, useRef } from "react";
import Song from "../audioFile/best-part.mp3";
// import ReactAudioPlayer from 'react-audio-player';

function Music() {

  const audioRef = useRef();

  // useEffect(() => {
  //   // const audio = new Audio(Song);
    
  //   // audio.addEventListener("canplay", event => {
  //   //   audio.play();
  //   //   audio.volume = 0.2;
  //   //   audio.controls = true;
  //   // })

  //   audioRef.current.src = 
    
    
  // },[])



  return (
      
    <div>
        <audio 
          className="audio-play" 
          src={Song}
          autoPlay
          controls
          ref={audioRef}
        >          
        </audio>
    </div>
  )

}

export default Music