
import { useContext } from "react";
import Song from "../audioFile/best-part.mp3";
import ReactHowler from 'react-howler';
import { AudioContext } from "../context/AudioContext";

function Music() {


  const { play } = useContext(AudioContext);

  




  return (
      
    <div>
      <ReactHowler 
        src={Song}
        playing={play}
        volume={0.05}
        html5={true}
      
      />
       
    </div>
  )

}

export default Music