
import Song from "../audioFile/best-part.mp3";
import ReactAudioPlayer from 'react-audio-player';

function Music() {



  return (
      
    <div>
        <ReactAudioPlayer
          src={Song}
          autoPlay
        />
    </div>
  )

}

export default Music