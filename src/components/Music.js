
import { useContext } from "react";
import Song from "../audioFile/stand-by-me.mp3";
import ReactHowler from 'react-howler';
import { AudioContext } from "../context/AudioContext";

function Music() {


  const { play } = useContext(AudioContext);

  




  return (
      
    <div>
      <ReactHowler 
        src={Song}
        playing={play}
        volume={0.5}
        html5={true}
      
      />
       
    </div>
  )

}

export default Music