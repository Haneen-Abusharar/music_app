import React from 'react'
import PlayerDetails from './playerDetails'
import PlayerControls from './playerControls'

function Player({song, nextSong}) {
   return (
       <div className={`m-0 box-border bg-neutral-800 text-white w-full p-12 pt-1
       flex flex-col items-center justify-center min-h-screen rounded-tl-xl rounded-bl-xl `}>
           <audio></audio>
           <h4 className='text-sm uppercase font-normal text-center'>Playing now</h4>
           {/*music search functionality */}
           <PlayerDetails song={song} />
           <PlayerControls song={song}/>
          <p><strong>Next up: </strong>{nextSong.title} by {nextSong.artist}</p>
       </div>
  )
}
export default Player