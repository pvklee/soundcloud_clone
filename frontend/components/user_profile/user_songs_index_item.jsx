import React from 'react'
import ReactAudioPlayer from 'react-audio-player';

export default ({song}) => {
  return(
    <div>
      <div>
      {song.title}
      
      </div>
      <ReactAudioPlayer
        src={song.songUrl}
        controls
      />
      
    </div>
  )
}